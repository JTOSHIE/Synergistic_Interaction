// V7 §11.3: FAQ accordion — four approved Q&A pairs for /get-started page
// All answers are verbatim from SI_Master_Brief_v7.docx §11.3
'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

// V7 §11.3: Approved FAQ responses — do not alter without Principal sign-off
const faqs: FAQItem[] = [
  {
    question: 'How is this different from hiring a compliance officer?',
    answer:
      'A compliance officer manages the compliance framework you already have. We design and implement the framework — then train your team to operate it. The difference is architectural versus operational. We build the system; your team runs it. When the engagement is complete, you own a documented, audit-ready compliance architecture. A compliance officer running a poorly designed system produces compliance theatre, not compliance protection.',
  },
  {
    question: 'We already have supplier relationships. Why do we need compliance architecture?',
    answer:
      'Established supplier relationships are valuable. They are not compliance protection. A supplier can have a 10-year relationship with a retailer and still supply a product that fails a mandatory safety standard. The ACCC does not treat supplier relationship longevity as a compliance defence. The compliance file is the defence.',
  },
  {
    question: 'Is this only for large retailers?',
    answer:
      'The nine-component architecture scales to any retail size. For a single store with 40–60 SKUs in one category, the implementation takes 40–80 hours across five phases. For a 330-store network, it takes proportionally more. The methodology is identical. The Synergistic Interaction advantage for smaller retailers is that they receive enterprise-grade compliance architecture at a single-store price.',
  },
  {
    question: 'What if our products turn out to be non-compliant during the assessment?',
    answer:
      'This is precisely the scenario we are designed for. Products identified as non-compliant during Phase 2 are removed from purchase orders before any regulatory exposure is created. We identify the compliance gap before the product is on the shelf — not after the enforcement action. Non-compliance discovered during a professional compliance assessment is a managed risk. Non-compliance discovered during an ACCC enforcement visit is not.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-2xl font-bold text-si-white mb-2 text-center">
          Common Questions
        </h2>
        <p className="text-si-white-muted text-center mb-10">
          Answers to the questions that prevent executive decision-makers from taking the first step.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-si-teal"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-si-white font-medium pr-4">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-si-teal flex items-center justify-center text-si-teal transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 1v8M1 5h8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${index}`} role="region" className="px-6 pb-6">
                    <p className="text-si-white-muted leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
