// AI Readiness self-check. The one genuinely interactive piece on the site.
// Runs entirely in the browser, nothing is sent or stored. Respects reduced
// motion via the shared hook for the result reveal.
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useReducedMotion } from '@/components/motion/useReducedMotion';

interface Option {
  label: string;
  score: number;
}

interface Question {
  q: string;
  options: Option[];
}

const questions: Question[] = [
  {
    q: 'Where is your business with AI right now?',
    options: [
      { label: 'We have not really started', score: 1 },
      { label: 'A few people experiment on their own', score: 2 },
      { label: 'We have tools, but they are used unevenly', score: 2 },
      { label: 'AI is part of how some of our work gets done', score: 3 },
    ],
  },
  {
    q: 'How document-heavy is your work, reports, proposals, correspondence, records?',
    options: [
      { label: 'Light', score: 1 },
      { label: 'Moderate', score: 2 },
      { label: 'It is most of what we do', score: 3 },
    ],
  },
  {
    q: 'Is anyone reviewing and approving AI output before it is used?',
    options: [
      { label: 'We are not really using it yet', score: 1 },
      { label: 'Not in any consistent way', score: 1 },
      { label: 'Sometimes, it depends on the person', score: 2 },
      { label: 'Yes, important work is always checked', score: 3 },
    ],
  },
  {
    q: 'Do your people know which tool to use, and how to use it well?',
    options: [
      { label: 'No real guidance', score: 1 },
      { label: 'A few have worked it out themselves', score: 2 },
      { label: 'Most have a clear idea', score: 3 },
    ],
  },
  {
    q: 'Have you set any rules for where business or client data can go?',
    options: [
      { label: 'No', score: 1 },
      { label: 'Informally', score: 2 },
      { label: 'Yes, clear rules', score: 3 },
    ],
  },
  {
    q: 'What is your biggest blocker right now?',
    options: [
      { label: 'We do not know where to start', score: 1 },
      { label: 'We have tools but no real adoption', score: 2 },
      { label: 'We are going well and want to scale it properly', score: 3 },
    ],
  },
];

interface Tier {
  min: number;
  max: number;
  heading: string;
  body: string;
}

const tiers: Tier[] = [
  {
    min: 6,
    max: 9,
    heading: 'Early days',
    body: 'You are near the start, and that is a perfectly good place to be. The risk at this stage is not moving too slowly, it is moving badly, paying for tools nobody adopts or using AI on work without the right checks. The smartest first step is a clear, honest look at where AI would actually help your business, before you buy or build anything. That is exactly what the AI Readiness Assessment gives you, a plain roadmap and a sensible first move, with no jargon and no lock-in.',
  },
  {
    min: 10,
    max: 14,
    heading: 'Started, but not joined up',
    body: 'You are underway, with some tools and some use, but it is not yet joined up, and that is where most businesses get stuck. The gain from here rarely comes from buying more. It comes from configuring what you have around how you actually work, putting checks in place, and getting your people genuinely confident. The AI Readiness Assessment maps where you are, finds the gaps holding you back, and hands you a clear plan to turn patchy use into real results.',
  },
  {
    min: 15,
    max: 18,
    heading: 'Ready to scale',
    body: 'You are further along than most, with real use and some discipline already in place. The opportunity now is to scale it properly, bespoke systems that hold your standard across the team, the right tool for each job, and governance built in so it stays safe as it grows. The AI Readiness Assessment is the quickest way to map where the next and biggest gains are, and to build only what earns its place.',
  },
];

export default function ReadinessCheck() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const allAnswered = selected.every((value) => value !== null);
  const total = selected.reduce<number>(
    (sum, optionIndex, questionIndex) =>
      sum + (optionIndex === null ? 0 : questions[questionIndex]!.options[optionIndex]!.score),
    0,
  );
  const tier = tiers.find((t) => total >= t.min && total <= t.max) ?? tiers[0]!;

  function choose(questionIndex: number, optionIndex: number) {
    setSelected((previous) => {
      const next = [...previous];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function reset() {
    setSelected(Array(questions.length).fill(null));
    setShowResult(false);
  }

  if (showResult) {
    return (
      <div className={reduced ? '' : 'animate-fade-in'}>
        <div className="p-8 sm:p-10 rounded-2xl border border-si-teal/30 bg-si-teal/5">
          <p className="text-si-teal text-xs font-semibold tracking-widest uppercase mb-3">
            Your result
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-si-white mb-5">{tier.heading}</h2>
          <p className="text-si-white-muted leading-relaxed mb-8">{tier.body}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
            >
              Book an AI Readiness Assessment
            </Link>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center px-7 py-4 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
            >
              Start again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-8">
        {questions.map((question, questionIndex) => (
          <fieldset key={question.q} className="border-0 p-0 m-0">
            <legend className="text-si-white font-semibold mb-3">
              {questionIndex + 1}. {question.q}
            </legend>
            <div className="grid sm:grid-cols-2 gap-3">
              {question.options.map((option, optionIndex) => {
                const isSelected = selected[questionIndex] === optionIndex;
                return (
                  <button
                    key={option.label}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => choose(questionIndex, optionIndex)}
                    className={`text-left px-4 py-3 rounded-xl border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal ${
                      isSelected
                        ? 'border-si-teal bg-si-teal/10 text-si-white'
                        : 'border-white/10 bg-white/5 text-si-white-muted hover:border-si-teal/40 hover:text-si-white'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="button"
          onClick={() => setShowResult(true)}
          disabled={!allAnswered}
          className="inline-flex items-center justify-center px-7 py-4 bg-si-teal text-si-bg font-semibold rounded-xl transition-colors hover:bg-si-teal-light disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-si-teal focus-visible:ring-offset-2 focus-visible:ring-offset-si-bg"
        >
          See my result
        </button>
        {!allAnswered && (
          <p className="text-si-white-dim text-sm">Answer all six questions to see your result.</p>
        )}
      </div>
    </div>
  );
}
