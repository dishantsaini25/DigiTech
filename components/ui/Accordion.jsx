'use client';

import { useState } from 'react';

export default function Accordion({ items = [], limit }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedAnswers, setExpandedAnswers] = useState({});

  const visibleItems = limit ? items.slice(0, limit) : items;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAnswer = (index) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-4">
      {visibleItems.map((item, index) => {
        const isOpen = openIndex === index;
        const isExpanded = expandedAnswers[index];

        return (
          <div
            key={index}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-semibold">
                {item.question}
              </span>

              <span className="shrink-0">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5">
                <div className="relative">
                  <p
                    className={`text-[var(--text-muted)] leading-7 transition-all ${
                      isExpanded
                        ? ''
                        : 'max-h-24 overflow-hidden'
                    }`}
                  >
                    {item.answer}
                  </p>

                  {!isExpanded && item.answer.length > 180 && (
                    <button
                      type="button"
                      onClick={() => toggleAnswer(index)}
                      className="mt-2 text-sm font-semibold text-[var(--primary)] hover:underline"
                    >
                      ... more
                    </button>
                  )}

                  {isExpanded && item.answer.length > 180 && (
                    <button
                      type="button"
                      onClick={() => toggleAnswer(index)}
                      className="mt-2 text-sm font-semibold text-[var(--primary)] hover:underline"
                    >
                      show less
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}