'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animated counter that counts from 0 → value when it enters the viewport.
 *
 * Props:
 *  value    – target number
 *  suffix   – string appended after the number, e.g. '+', '%', 'M+'
 *  prefix   – string prepended before the number (optional)
 *  duration – animation duration in ms (default 1800)
 */
export default function Counter({ value, suffix = '', prefix = '', duration = 1800 }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  /* Start the counter only once, when the element scrolls into view */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  /* Animate from 0 → value using requestAnimationFrame */
  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const startVal = 0;
    const endVal   = value;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      /* Ease-out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(startVal + (endVal - startVal) * eased));

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [started, value, duration]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}{display}{suffix}
    </span>
  );
}
