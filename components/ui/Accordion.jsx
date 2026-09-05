'use client';

import { useState } from 'react';

/**
 * Single-open accordion list.
 *
 * Props:
 *  items  – array of { question, answer, enabled }
 *  limit  – max items to show (null = all)
 */
export default function Accordion({ items = [], limit = null }) {
  const [openIndex, setOpenIndex] = useState(null);

  const visible = (limit ? items.slice(0, limit) : items).filter((i) => i.enabled !== false);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {visible.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
              isOpen
                ? 'border-[var(--primary)] bg-[var(--surface)]'
                : 'border-[var(--border-light)] bg-[var(--surface)]'
            }`}
          >
            {/* Trigger */}
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-inset"
            >
              <span
                className={`text-sm sm:text-[15px] font-semibold leading-snug transition-colors ${
                  isOpen ? 'text-[var(--primary)]' : 'text-[var(--text-primary)]'
                }`}
              >
                {item.question}
              </span>

              {/* +/- icon */}
              <span
                className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'bg-[var(--primary)] border-[var(--primary)] text-white rotate-45'
                    : 'border-[var(--border)] text-[var(--text-muted)]'
                }`}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
            </button>

            {/* Body — CSS grid height trick for smooth animation */}
            <div
              className={`accordion-body ${isOpen ? 'open' : ''}`}
              aria-hidden={!isOpen}
            >
              <div className="accordion-inner">
                <div className="px-6 pb-5 pt-1">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
