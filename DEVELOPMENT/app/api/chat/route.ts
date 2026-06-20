// On-site assistant API route. Server-side only. Holds the Anthropic key,
// calls the model, and streams the reply back to the client. The key is never
// exposed to the browser.

import Anthropic from '@anthropic-ai/sdk';
import { ASSISTANT_SYSTEM_PROMPT } from '@/lib/assistant-prompt';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MODEL = 'claude-haiku-4-5-20251001';
const MAX_TOKENS = 1024;
const MAX_HISTORY = 10;

// Simple in-memory rate limit, keyed by client IP: 15 messages per 10 minutes.
// This resets on cold starts, which is acceptable for a light front-of-site
// assistant. Vercel KV or Upstash is an optional upgrade for persistent limits.
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

interface ClientMessage {
  role: 'user' | 'assistant';
  content: string;
}

function jsonMessage(message: string, status = 200) {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

export async function POST(request: Request) {
  // Missing key: stay up, return a friendly note so the site never breaks.
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return jsonMessage(
      'The assistant is briefly unavailable. In the meantime, you can book a fixed-price AI Readiness Assessment via the contact page, or email jt@synergisticinteraction.com.au.',
    );
  }

  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return jsonMessage(
      'You have sent a lot of messages in a short time. The best next step is to book an assessment and speak with a person. You can do that on the contact page, or email jt@synergisticinteraction.com.au.',
      429,
    );
  }

  let messages: ClientMessage[] = [];
  try {
    const body = (await request.json()) as { messages?: unknown };
    if (Array.isArray(body.messages)) {
      messages = body.messages
        .filter(
          (m): m is ClientMessage =>
            !!m &&
            typeof (m as ClientMessage).content === 'string' &&
            ((m as ClientMessage).role === 'user' || (m as ClientMessage).role === 'assistant'),
        )
        .slice(-MAX_HISTORY)
        .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));
    }
  } catch {
    return jsonMessage('Sorry, that request could not be read. Please try again.');
  }

  if (messages.length === 0) {
    return jsonMessage('Ask me anything about how Synergistic Interaction can help your business.');
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const stream = anthropic.messages.stream({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: ASSISTANT_SYSTEM_PROMPT,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch {
          controller.enqueue(
            encoder.encode(
              ' Sorry, something went wrong on my end. Please try again, or book an assessment via the contact page.',
            ),
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  } catch {
    return jsonMessage(
      'Sorry, the assistant ran into a problem. Please try again shortly, or book a fixed-price AI Readiness Assessment via the contact page.',
    );
  }
}
