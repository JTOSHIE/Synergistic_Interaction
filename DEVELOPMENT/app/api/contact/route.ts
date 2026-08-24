// Contact enquiry API. Server-side only. Validates the enquiry, applies a
// light in-memory rate limit and a honeypot check, then sends the enquiry by
// email via Resend. If the Resend key is not configured the route degrades
// gracefully and steers the visitor to email directly, so the site never
// breaks. The in-memory rate limit resets on cold starts, which is acceptable
// for a light front-of-site form.
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const RATE_LIMIT = 5;
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

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[<>]/g, '').trim().slice(0, max);
}

export async function POST(request: NextRequest) {
  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: 'Too many messages in a short time. Please email jt@synergisticinteraction.com.au directly.' },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: 'That request could not be read. Please try again.' }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (clean(body.website, 200).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const organisation = clean(body.organisation, 200);
  const phone = clean(body.phone, 60);
  const message = clean(body.message, 4000);

  if (!name) return NextResponse.json({ ok: false, message: 'Please add your name.' }, { status: 400 });
  if (!email || !isValidEmail(email)) return NextResponse.json({ ok: false, message: 'Please add a valid email address.' }, { status: 400 });
  if (!message) return NextResponse.json({ ok: false, message: 'Please add a short message.' }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, message: 'The form is briefly unavailable. Please email jt@synergisticinteraction.com.au directly.' },
      { status: 503 },
    );
  }

  const destination = process.env.CONTACT_DESTINATION_EMAIL ?? 'jt@synergisticinteraction.com.au';
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? 'Synergistic Interaction <enquiries@synergisticinteraction.com.au>';

  const submitted = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' });
  const emailText = [
    'NEW WEBSITE ENQUIRY',
    '===================',
    `Submitted:    ${submitted} (Melbourne time)`,
    '',
    `Name:         ${name}`,
    `Email:        ${email}`,
    `Organisation: ${organisation || 'Not provided'}`,
    `Phone:        ${phone || 'Not provided'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: destination,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: emailText,
    });
    if (error) {
      return NextResponse.json(
        { ok: false, message: 'That did not send. Please email jt@synergisticinteraction.com.au directly.' },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: 'That did not send. Please email jt@synergisticinteraction.com.au directly.' },
      { status: 502 },
    );
  }
}
