'use client';

import { useState } from 'react';

export default function Accordion({ items = [], limit }) {
  const [openIndex, setOpenIndex] = useState(null);

  const visibleItems = limit ? items.slice(0, limit) : items;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {visibleItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
            "
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                p-5
                text-left
              "
            >
              <span className="font-semibold">
                {item.question}
              </span>

              <span className="shrink-0 text-xl">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5">
                <p className="leading-7 text-[var(--text-muted)]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}