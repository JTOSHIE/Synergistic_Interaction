// On-site AI assistant widget. Client component, mounted site-wide in the root
// layout. Calls the server route at /api/chat, which holds the Anthropic key.
// Conversation lives in React state for the session only, nothing is stored.
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '@/components/motion/useReducedMotion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING =
  'Hi, I am the Synergistic Interaction assistant. Ask me how practical AI adoption could work for your business, or what a readiness assessment involves.';

const STARTERS = [
  'What do you actually do?',
  'How does an AI Readiness Assessment work?',
  'Can you help a business like mine?',
];

function TypingDots({ reduced }: { reduced: boolean }) {
  if (reduced) {
    return <span className="text-si-white-muted text-sm">Typing</span>;
  }
  return (
    <span className="inline-flex items-center gap-1" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-si-white-muted animate-bounce [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-si-white-muted animate-bounce [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-si-white-muted animate-bounce" />
    </span>
  );
}

export default function ChatWidget() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Move focus into the panel on open, and back to the trigger on close.
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  // Keep the message list scrolled to the latest content.
  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: 'end' });
  }, [messages, open, waiting]);

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;

    const nextMessages: Message[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setIsStreaming(true);
    setWaiting(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const contentType = res.headers.get('Content-Type') ?? '';

      if (contentType.includes('application/json') || !res.body) {
        const data = (await res.json()) as { message?: string };
        setWaiting(false);
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              data.message ??
              'Sorry, something went wrong. Please try again, or book an assessment via the contact page.',
          },
        ]);
        return;
      }

      // Stream the reply in as it arrives.
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let first = true;

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        if (!chunk) continue;
        if (first) {
          setWaiting(false);
          first = false;
        }
        setMessages((prev) => {
          const next = [...prev];
          const last = next[next.length - 1];
          if (last && last.role === 'assistant') {
            next[next.length - 1] = { ...last, content: last.content + chunk };
          }
          return next;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Sorry, I could not reach the assistant just now. Please try again shortly, or book a fixed-price AI Readiness Assessment via the contact page.',
        },
      ]);
    } finally {
      setWaiting(false);
      setIsStreaming(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    void send(input);
  }

  const showStarters = messages.length === 1 && !isStreaming;

  return (
    <>
      {/* Launcher */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="si-assistant-panel"
        aria-label={open ? 'Close the assistant' : 'Open the assistant'}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-si-teal text-si-bg shadow-lg shadow-black/30 hover:bg-si-teal-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg ${
          reduced ? '' : 'transition-colors'
        }`}
      >
        {open ? (
          <X className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          id="si-assistant-panel"
          role="dialog"
          aria-label="Synergistic Interaction assistant"
          className={`fixed z-50 flex flex-col border border-white/10 bg-si-bg-secondary shadow-2xl shadow-black/40 inset-0 rounded-none sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[600px] sm:max-h-[calc(100vh-8rem)] sm:w-[400px] sm:rounded-2xl ${
            reduced ? '' : 'animate-fade-in'
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-white/10 p-4">
            <div>
              <p className="text-si-white font-semibold">Ask Synergistic Interaction</p>
              <p className="text-si-white-muted text-xs leading-relaxed mt-0.5">
                Practical answers about AI adoption for your business.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close the assistant"
              className="shrink-0 rounded-lg p-1.5 text-si-white-muted hover:text-si-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
            >
              <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            role="log"
            aria-live="polite"
            aria-label="Conversation"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-si-teal text-si-bg'
                      : 'bg-white/5 border border-white/10 text-si-white'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {waiting && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                  <TypingDots reduced={reduced} />
                </div>
              </div>
            )}

            {showStarters && (
              <div className="flex flex-wrap gap-2 pt-1">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void send(s)}
                    className="rounded-full border border-si-teal/30 bg-si-teal/10 px-3 py-1.5 text-xs text-si-teal hover:bg-si-teal/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Book an assessment */}
          <div className="px-4 pb-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-si-teal hover:text-si-teal-light text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal rounded"
            >
              Book an assessment
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-white/10 p-3">
            <label htmlFor="si-assistant-input" className="sr-only">
              Type your message
            </label>
            <input
              id="si-assistant-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message"
              autoComplete="off"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-si-white placeholder:text-si-white-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
            />
            <button
              type="submit"
              disabled={isStreaming || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-si-teal text-si-bg hover:bg-si-teal-light disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
            >
              <Send className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
