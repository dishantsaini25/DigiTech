import Link from 'next/link';

export default function CTASection({
  badge       = 'Ready to Start?',
  title       = 'Transform Your Online Presence',
  highlight   = 'with DIGITECH',
  subtitle    = "Let's build a digital experience that helps your business stand out, connect with customers and grow.",
  primaryLabel   = 'Start Your Project',
  primaryHref    = '/contact',
  secondaryLabel = 'View Our Work',
  secondaryHref  = '/work',
}) {
  return (
    <section className="section-py bg-[var(--surface-soft)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="relative bg-[var(--primary)] rounded-3xl overflow-hidden px-8 py-16 sm:px-14 lg:px-20">
          {/* Tonal decoration */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--primary-dark)] opacity-40" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white opacity-5" />
            <div className="absolute top-10 right-[15%] w-3 h-3 rounded-full bg-[var(--gold)] opacity-70" />
            <div className="absolute bottom-12 right-[20%] w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-60" />
          </div>

          <div className="relative max-w-2xl">
            {badge && (
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/15 text-white/80 mb-6">
                {badge}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-white)] leading-tight mb-5">
              {title}{' '}
              <span className="text-[var(--gold)]">{highlight}</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[var(--primary)] font-bold text-sm hover:bg-[var(--gold-light)] transition-colors shadow-sm"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent text-white border-2 border-white/30 font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
