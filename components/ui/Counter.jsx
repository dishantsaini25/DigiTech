'use client';

import CountUp from 'react-countup';

export default function Counter({
  value,
  suffix = '',
  prefix = '',
  duration = 1.8,
}) {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  return (
    <CountUp
      start={0}
      end={numericValue}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
    />
  );
}