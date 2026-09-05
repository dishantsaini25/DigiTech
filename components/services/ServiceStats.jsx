import SectionHeading from '@/components/ui/SectionHeading';
import Counter from '@/components/ui/Counter';

export default function ServiceStats({
  stats    = [],
  title    = 'Measurable Results',
  subtitle = 'The tangible impact our work delivers for every client.',
}) {
  return (
    <section className="section-py bg-[var(--primary-dark)] relative overflow-hidden">
      {/* Warm decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[var(--primary)] opacity-30" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[var(--accent)] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading badge="Our Impact" heading={title} subheading={subtitle} light />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            /* If value looks like a pure number string, animate it */
            const num = parseFloat(stat.value);
            const isNum = !isNaN(num) && String(num) === String(stat.value);
            const suffix = isNum ? '' : '';

            return (
              <div
                key={i}
                className="bg-white/8 border border-white/15 rounded-2xl p-6 text-center hover:bg-white/12 transition-colors"
              >
                <p className="text-3xl sm:text-4xl font-black text-[var(--text-white)] mb-1.5 tabular-nums leading-none">
                  {isNum ? <Counter value={num} suffix="" /> : stat.value}
                </p>
                <p className="text-xs font-semibold text-[var(--primary-light)]/60">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
