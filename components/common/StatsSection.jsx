import Counter from '@/components/ui/Counter';

/**
 * Reusable stats grid.
 * stats: array of { value, label } where value is a string like '150+' OR a number.
 * animated: if true and value is a number, uses animated Counter.
 * light: inverts colors for dark backgrounds.
 */
export default function StatsSection({ stats = [], animated = false, light = false }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {stats.map((stat, i) => {
        const isNumeric = typeof stat.value === 'number';
        return (
          <div
            key={i}
            className={`text-center p-6 rounded-2xl border transition-colors ${
              light
                ? 'bg-white/10 border-white/15 hover:bg-white/15'
                : 'bg-[var(--surface)] border-[var(--border-light)] hover:border-[var(--primary)] hover:shadow-md'
            }`}
          >
            <p className={`text-3xl sm:text-4xl font-black mb-1.5 tabular-nums leading-none ${
              light ? 'text-[var(--text-white)]' : 'text-[var(--primary)]'
            }`}>
              {animated && isNumeric
                ? <Counter value={stat.value} suffix={stat.suffix ?? ''} />
                : stat.value
              }
            </p>
            <p className={`text-xs font-semibold ${light ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
