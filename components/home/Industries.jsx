import industriesData from '@/data/industries.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const { industries: id } = industriesData;

function getItems(items, limit) {
  const filtered = items.filter((i) => i.enabled !== false);
  return limit ? filtered.slice(0, limit) : filtered;
}

/* Warm palette cycling for icon backgrounds */
const iconBgs = [
  'bg-[var(--primary-light)] text-[var(--primary)]',
  'bg-[var(--accent-light)] text-[#C26840]',
  'bg-[var(--gold-light)] text-[#9A7A2E]',
  'bg-[var(--surface-soft)] text-[var(--primary-dark)]',
];

export default function Industries() {
  if (!id?.enabled) return null;

  const items = getItems(id.items, id.limit);

  return (
    <section className="section-py section-bg-industries">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            badge={id.badge}
            heading={id.heading}
            headingAccent={id.headingAccent}
            subheading={id.subheading}
          />
          {/* Item count chip */}
          <p className="text-sm text-[var(--text-muted)] shrink-0 hidden lg:block">
            Serving <span className="font-bold text-[var(--text-primary)]">{id.items.filter(i => i.enabled !== false).length}+</span> industries
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((industry, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-5 text-center hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 card-lift cursor-default"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBgs[i % iconBgs.length]} group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-200`}
              >
                <Icon name={industry.icon} size={18} className="transition-colors duration-200" />
              </div>
              <span className="text-[12px] font-semibold text-[var(--text-secondary)] leading-snug group-hover:text-[var(--primary)] transition-colors">
                {industry.name}
              </span>
            </div>
          ))}
        </div>

        {/* Show more hint when limit is applied */}
        {id.limit && id.limit < id.items.filter(i => i.enabled !== false).length && (
          <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
            + {id.items.filter(i => i.enabled !== false).length - id.limit} more industries served
          </p>
        )}
      </div>
    </section>
  );
}
