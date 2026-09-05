/**
 * Reusable section heading block.
 *
 * Props:
 *  badge        – small eyebrow label (optional)
 *  heading      – main headline text (plain part)
 *  headingAccent– part of headline rendered in accent color (optional)
 *  subheading   – supporting paragraph text (optional)
 *  align        – 'left' | 'center'  (default: 'left')
 *  light        – true = inverts text for dark backgrounds
 *  className    – extra wrapper classes
 */
export default function SectionHeading({
  badge,
  heading,
  headingAccent,
  subheading,
  align     = 'left',
  light     = false,
  className = '',
}) {
  const center = align === 'center';

  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl ${className}`}>
      {/* Badge */}
      {badge && (
        <span
          className={`inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 ${
            light
              ? 'bg-white/15 text-white/80'
              : 'bg-[var(--primary-light)] text-[var(--primary)]'
          }`}
        >
          {badge}
        </span>
      )}

      {/* Headline */}
      {(heading || headingAccent) && (
        <h2
          className={`text-3xl sm:text-4xl font-black leading-tight mb-4 ${
            light ? 'text-[var(--text-white)]' : 'text-[var(--text-primary)]'
          }`}
        >
          {heading}
          {headingAccent && (
            <>
              {' '}
              <span className="text-[var(--accent)]">{headingAccent}</span>
            </>
          )}
        </h2>
      )}

      {/* Subheading */}
      {subheading && (
        <p
          className={`text-base leading-relaxed ${
            light ? 'text-white/70' : 'text-[var(--text-muted)]'
          }`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
