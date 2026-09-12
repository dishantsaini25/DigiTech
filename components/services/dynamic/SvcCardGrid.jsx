import SectionHeading from '@/components/ui/SectionHeading';

// A single card handles every data combination: title+text, title+list, title+text+tags, text-only, tags-only
function Card({ item }) {
  const { title, text, list, tags } = item;
  return (
    <div className="group bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-6 hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 card-lift flex flex-col">
      {title && (
        <h3 className="text-[var(--text-primary)] font-bold text-[15px] mb-3 group-hover:text-[var(--primary)] transition-colors">
          {title}
        </h3>
      )}

      {text && (
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-3 flex-1">
          {text}
        </p>
      )}

      {list?.length > 0 && (
        <ul className="space-y-1.5 mb-3 flex-1">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-[var(--primary-light)] text-[var(--primary)] text-[11px] font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SvcCardGrid({ data }) {
  if (!data) return null;
  const { heading, subheading, items } = data;
  if (!items?.length) return null;

  // Use 4 columns when there are many short cards (no list/tags), else 3
  const useFourCols = items.length >= 6 && items.every((i) => !i.list?.length && !i.tags?.length);

  return (
    <section className="section-py bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {(heading || subheading) && (
          <SectionHeading
            heading={heading}
            subheading={subheading ?? undefined}
            align="center"
            className="mb-10"
          />
        )}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${useFourCols ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}>
          {items.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
