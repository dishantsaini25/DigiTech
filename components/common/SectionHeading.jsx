/**
 * Legacy SectionHeading — kept for backward compatibility with older pages.
 * New components should use components/ui/SectionHeading instead.
 * Accepts both old prop names (title/highlight) and new prop names (heading/headingAccent).
 */
export default function SectionHeading({
  badge,
  /* new prop names */
  heading, headingAccent,
  /* old prop names — mapped internally */
  title, highlight,
  subheading, subtitle,
  centered = true,
  light = false,
  className = '',
}) {
  const h  = heading  ?? title;
  const ha = headingAccent ?? highlight;
  const sub = subheading ?? subtitle;
  const center = centered;

  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-10 ${className}`}>
      {badge && (
        <span className={`inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 ${
          light
            ? 'bg-white/15 text-white/80'
            : 'bg-[var(--primary-light)] text-[var(--primary)]'
        }`}>
          {badge}
        </span>
      )}

      {(h || ha) && (
        <h2 className={`text-3xl sm:text-4xl font-black leading-tight mb-4 ${
          light ? 'text-[var(--text-white)]' : 'text-[var(--text-primary)]'
        }`}>
          {h}
          {ha && <span className="text-[var(--accent)]"> {ha}</span>}
        </h2>
      )}

      {sub && (
        <p className={`text-base leading-relaxed ${
          light ? 'text-white/70' : 'text-[var(--text-muted)]'
        }`}>
          {sub}
        </p>
      )}
    </div>
  );
}
