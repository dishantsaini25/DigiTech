import homeData from '@/data/home.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Counter from '@/components/ui/Counter';

const { successNumbers: sn } = homeData;

function getItems(items) {
  return items.filter((i) => i.enabled !== false);
}

export default function SuccessNumbers() {
  if (!sn?.enabled) return null;

  const items = getItems(sn.items);

  return (
    <section className="section-py section-bg-numbers">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading block */}
        <SectionHeading
          badge={sn.badge}
          heading={sn.heading}
          headingAccent={sn.headingAccent}
          subheading={sn.subheading}
          align="center"
          className="mb-16"
        />

        {/* Counter grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-7 hover:border-[var(--primary)] hover:shadow-md transition-all duration-200"
            >
              {/* Animated counter value */}
              <span className="text-3xl sm:text-4xl font-black text-[var(--primary)] leading-none tabular-nums">
                <Counter value={item.value} suffix={item.suffix} />
              </span>
              <span className="text-xs font-semibold text-[var(--text-muted)] leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <p className="mt-10 text-center text-sm text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
          Every number represents a real business we've helped grow — from early-stage startups to established enterprises.
        </p>
      </div>
    </section>
  );
}
