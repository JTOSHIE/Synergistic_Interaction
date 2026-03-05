// V7 §11: Get Started contact form — client component
// Handles category multi-select, validation, and /api/contact submission
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone?: string;
  message: string;
  categories: string[];
  referralSource?: string;
}

// V7 §2.1 + §3.3: Product categories for Tier 1 compliance risk
const productCategories = [
  'Electrical Goods',
  'Baby Products',
  "Children's Toys",
  'General Merchandise',
  'Homewares',
  'Sporting Goods',
  'Personal Care',
  'Other',
];

const roleOptions = [
  'Chief Executive Officer',
  'Chief Operating Officer',
  'General Manager — Merchandise',
  'Head of Procurement',
  'Compliance Manager',
  'Category Manager',
  'Other',
];

export default function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({ defaultValues: { categories: [] } });

  const toggleCategory = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    setValue('categories', updated);
  };

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, categories: selectedCategories }),
      });
      const json = await res.json() as { success: boolean; error?: string };
      if (!json.success) {
        setServerError(json.error ?? 'Submission failed. Please try again.');
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError('Network error. Please try again or contact us directly.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/5 border border-si-teal/30 rounded-xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-si-teal/10 border border-si-teal/30 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-si-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-si-white mb-2">Enquiry Received</h3>
        <p className="text-si-white-muted leading-relaxed">
          Joshua Thompson will review your submission and respond within one business day.
          The scoping conversation is structured, documented, and produces a written output.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
      aria-label="Get started contact form"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-si-white mb-1.5">
          Full Name <span className="text-si-error" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-si-white placeholder-si-white-dim
                      focus:outline-none focus:ring-2 focus:ring-si-teal focus:border-transparent transition-colors
                      ${errors.name ? 'border-si-error' : 'border-white/10 hover:border-white/20'}`}
          placeholder="e.g. Joshua Thompson"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name', { required: 'Full name is required' })}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-si-error" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Organisation */}
      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-si-white mb-1.5">
          Organisation <span className="text-si-error" aria-hidden="true">*</span>
        </label>
        <input
          id="organisation"
          type="text"
          autoComplete="organization"
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-si-white placeholder-si-white-dim
                      focus:outline-none focus:ring-2 focus:ring-si-teal focus:border-transparent transition-colors
                      ${errors.organisation ? 'border-si-error' : 'border-white/10 hover:border-white/20'}`}
          placeholder="e.g. Acme Retail Group"
          aria-required="true"
          aria-invalid={!!errors.organisation}
          aria-describedby={errors.organisation ? 'organisation-error' : undefined}
          {...register('organisation', { required: 'Organisation is required' })}
        />
        {errors.organisation && (
          <p id="organisation-error" className="mt-1 text-xs text-si-error" role="alert">
            {errors.organisation.message}
          </p>
        )}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-si-white mb-1.5">
          Role <span className="text-si-error" aria-hidden="true">*</span>
        </label>
        <select
          id="role"
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-si-white
                      focus:outline-none focus:ring-2 focus:ring-si-teal focus:border-transparent transition-colors
                      ${errors.role ? 'border-si-error' : 'border-white/10 hover:border-white/20'}`}
          aria-required="true"
          aria-invalid={!!errors.role}
          aria-describedby={errors.role ? 'role-error' : undefined}
          {...register('role', { required: 'Role is required' })}
          defaultValue=""
        >
          <option value="" disabled>Select your role</option>
          {roleOptions.map((r) => (
            <option key={r} value={r} className="bg-si-bg-secondary text-si-white">
              {r}
            </option>
          ))}
        </select>
        {errors.role && (
          <p id="role-error" className="mt-1 text-xs text-si-error" role="alert">
            {errors.role.message}
          </p>
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-si-white mb-1.5">
            Email <span className="text-si-error" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-si-white placeholder-si-white-dim
                        focus:outline-none focus:ring-2 focus:ring-si-teal focus:border-transparent transition-colors
                        ${errors.email ? 'border-si-error' : 'border-white/10 hover:border-white/20'}`}
            placeholder="you@organisation.com.au"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-si-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-si-white mb-1.5">
            Phone <span className="text-si-white-dim text-xs font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-si-white placeholder-si-white-dim
                       focus:outline-none focus:ring-2 focus:ring-si-teal focus:border-transparent
                       hover:border-white/20 transition-colors"
            placeholder="+61 4xx xxx xxx"
            {...register('phone')}
          />
        </div>
      </div>

      {/* Product categories multi-select */}
      <div>
        <span className="block text-sm font-medium text-si-white mb-1.5">
          Product Categories{' '}
          <span className="text-si-white-dim text-xs font-normal">(select all that apply)</span>
        </span>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Product categories"
        >
          {productCategories.map((cat) => {
            const selected = selectedCategories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleCategory(cat)}
                aria-pressed={selected}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors
                            focus:outline-none focus:ring-2 focus:ring-si-teal focus:ring-offset-1 focus:ring-offset-si-bg-primary
                            ${
                              selected
                                ? 'bg-si-teal/20 border-si-teal/50 text-si-teal'
                                : 'bg-white/5 border-white/10 text-si-white-muted hover:border-white/30 hover:text-si-white'
                            }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-si-white mb-1.5">
          What prompted you to reach out?{' '}
          <span className="text-si-error" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-si-white placeholder-si-white-dim
                      focus:outline-none focus:ring-2 focus:ring-si-teal focus:border-transparent transition-colors resize-none
                      ${errors.message ? 'border-si-error' : 'border-white/10 hover:border-white/20'}`}
          placeholder="Brief description of your current situation and what you're hoping to achieve."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message', {
            required: 'Please describe what prompted you to reach out',
            minLength: { value: 20, message: 'Please provide at least 20 characters' },
          })}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-si-error" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Referral source */}
      <div>
        <label htmlFor="referralSource" className="block text-sm font-medium text-si-white mb-1.5">
          How did you hear about us?{' '}
          <span className="text-si-white-dim text-xs font-normal">(optional)</span>
        </label>
        <input
          id="referralSource"
          type="text"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-si-white placeholder-si-white-dim
                     focus:outline-none focus:ring-2 focus:ring-si-teal focus:border-transparent
                     hover:border-white/20 transition-colors"
          placeholder="e.g. LinkedIn, referral, ACCC website, search engine"
          {...register('referralSource')}
        />
      </div>

      {/* Server error */}
      {serverError && (
        <div
          className="bg-si-error/10 border border-si-error/30 rounded-lg px-4 py-3 text-sm text-si-error"
          role="alert"
        >
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-8 bg-si-teal text-si-bg-primary font-semibold rounded-lg
                   hover:bg-si-teal-light transition-colors
                   focus:outline-none focus:ring-2 focus:ring-si-teal focus:ring-offset-2 focus:ring-offset-si-bg-primary
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Request Scoping Conversation'}
      </button>

      <p className="text-xs text-si-white-dim text-center">
        Joshua Thompson responds personally within one business day.
        The scoping conversation produces a documented output at no cost.
      </p>
    </form>
  );
}
