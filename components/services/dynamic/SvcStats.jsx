'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import SectionHeading from '@/components/ui/SectionHeading';

// Extracts a leading number from strings like "300%+", "90+" or "4.8".
// Returns null for strings like "3-5x", "24/7" that can't be animated.
function parseStatValue(val) {
  if (val === null || val === undefined) return null;
  const match = String(val).trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  return { num: parseFloat(match[1]), suffix: match[2] ?? '' };
}

function StatCard({ stat }) {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const parsed = parseStatValue(stat.value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-2 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-7 hover:border-[var(--primary)] hover:shadow-md transition-all duration-200"
    >
      <span className="text-3xl sm:text-4xl font-black text-[var(--primary)] leading-none tabular-nums">
        {parsed && started ? (
          <CountUp
            start={0}
            end={parsed.num}
            duration={1.8}
            suffix={parsed.suffix}
            decimals={parsed.num % 1 !== 0 ? 1 : 0}
          />
        ) : (
          // Non-numeric values (e.g. "3-5x", "24/7") rendered as-is
          stat.value
        )}
      </span>
      <span className="text-xs font-semibold text-[var(--text-muted)] leading-snug">
        {stat.label}
      </span>
    </div>
  );
}

export default function SvcStats({ data }) {
  if (!data) return null;
  const { heading, subheading, stats } = data;
  if (!stats?.length) return null;

  return (
    <section className="section-py bg-[var(--primary-dark)] relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[var(--primary)] opacity-25" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[var(--accent)] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {(heading || subheading) && (
          <SectionHeading
            heading={heading}
            subheading={subheading ?? undefined}
            align="center"
            light
            className="mb-12"
          />
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
