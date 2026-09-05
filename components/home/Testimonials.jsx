'use client';

import { useState, useCallback } from 'react';
import testimonialsData from '@/data/testimonials.json';
import SectionHeading from '@/components/ui/SectionHeading';

const { testimonials: td } = testimonialsData;

function getItems(items, limit) {
  const filtered = items.filter((i) => i.enabled !== false);
  return limit ? filtered.slice(0, limit) : filtered;
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < rating ? 'var(--gold)' : 'var(--border)'}
          aria-hidden="true"
        >
          <path d="M7 1l1.6 3.2L12 4.7l-2.5 2.5.6 3.5L7 9.2 3.9 10.7l.6-3.5L2 4.7l3.4-.5L7 1z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name) {
  return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export default function Testimonials() {
  if (!td?.enabled) return null;

  const items = getItems(td.items, td.limit);
  /* Slide index — each "page" shows 3 on desktop, 1 on mobile */
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  /* Build a window of visible cards based on viewport (handled via grid) */
  const getVisible = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) indices.push((current + i) % total);
    return indices;
  };

  return (
    <section className="section-py section-bg-testimonials">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            badge={td.badge}
            heading={td.heading}
            headingAccent={td.headingAccent}
          />

          {/* Prev / Next */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="text-sm text-[var(--text-muted)] font-medium tabular-nums">
              {current + 1} / {total}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Cards — 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisible().map((idx, pos) => {
            const t = items[idx];
            return (
              <article
                key={`${idx}-${pos}`}
                className={`bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 ${
                  pos === 0 ? '' : pos === 1 ? 'hidden md:flex' : 'hidden lg:flex'
                }`}
              >
                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed italic">
                    "{t.review}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-light)]">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center shrink-0 font-black text-sm text-[var(--primary)]">
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] font-bold text-sm leading-tight">{t.name}</p>
                    <p className="text-[var(--text-muted)] text-xs mt-0.5">
                      {t.role}{t.company ? `, ${t.company}` : ''}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? 'w-6 h-2 bg-[var(--primary)]'
                  : 'w-2 h-2 bg-[var(--border)]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
