// ContactForm: a small enquiry form for the contact page. Client component,
// controlled inputs, no form libraries. Posts to /api/contact which sends the
// enquiry by email via Resend. Includes a hidden honeypot field for basic spam
// protection. Degrades gracefully: if the server cannot send email it returns
// a message steering the visitor to email directly.
'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-si-white placeholder-si-white-dim focus:outline-none focus:ring-2 focus:ring-si-teal focus:border-transparent transition';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  // Honeypot: real visitors never see or fill this field.
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, organisation, phone, message, website }),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (response.ok && data.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
        setFeedback(
          data.message ??
            'That did not go through. Please email jt@synergisticinteraction.com.au directly.',
        );
      }
    } catch {
      setStatus('error');
      setFeedback(
        'That did not go through. Please email jt@synergisticinteraction.com.au directly.',
      );
    }
  }

  if (status === 'sent') {
    return (
      <div className="p-8 rounded-2xl border border-si-teal/30 bg-si-teal/5 text-center">
        <p className="text-si-white font-semibold text-lg mb-2">Thanks, we have it.</p>
        <p className="text-si-white-muted text-sm leading-relaxed">
          Your message is on its way. We will come back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-si-white-muted text-sm mb-1.5">
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-si-white-muted text-sm mb-1.5">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@business.com.au"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-organisation" className="block text-si-white-muted text-sm mb-1.5">
            Organisation <span className="text-si-white-dim">(optional)</span>
          </label>
          <input
            id="cf-organisation"
            type="text"
            autoComplete="organization"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            className={inputClass}
            placeholder="Business or practice name"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-si-white-muted text-sm mb-1.5">
            Phone <span className="text-si-white-dim">(optional)</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="04xx xxx xxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-si-white-muted text-sm mb-1.5">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder="A line or two about your business and what you are after"
        />
      </div>

      {/* Honeypot, hidden from real visitors, bots tend to fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === 'error' && feedback && (
        <p className="text-si-error text-sm" role="alert">
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
