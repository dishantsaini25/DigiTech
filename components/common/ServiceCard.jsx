import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export default function ServiceCard({ title, description, icon, color = 'var(--primary)', href, features }) {
  return (
    <div className="group bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all duration-200 card-lift flex flex-col h-full">
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0 transition-colors duration-200 group-hover:bg-[var(--primary)]"
        style={{ backgroundColor: color !== 'var(--primary)' ? `${color}18` : 'var(--primary-light)' }}
      >
        <Icon
          name={icon}
          size={18}
          style={{ color: color !== 'var(--primary)' ? color : 'var(--primary)' }}
          className="group-hover:!text-white transition-colors duration-200"
        />
      </div>

      {/* Title */}
      <h3 className="text-[var(--text-primary)] font-bold text-[15px] mb-2 group-hover:text-[var(--primary)] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-4">
        {description}
      </p>

      {/* Feature bullets */}
      {features?.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {features.slice(0, 3).map((f) => {
            const label = typeof f === 'string' ? f : f.title;
            return (
              <li key={label} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                {label}
              </li>
            );
          })}
        </ul>
      )}

      {/* Link */}
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:gap-2.5 transition-all duration-150 mt-auto"
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}
    </div>
  );
}
