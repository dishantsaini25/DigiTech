import Link from 'next/link';

export default function ServiceHero({ title, tagline, badges = [] }) {
  return (
    <section className="relative pt-28 pb-20 bg-[var(--primary-dark)] overflow-hidden">
      {/* Subtle warm shape decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-25" />
        <div className="absolute -bottom-24 -left-20 w-[320px] h-[320px] rounded-full bg-[var(--accent)] opacity-10" />
        <div className="absolute top-16 right-[12%] w-3 h-3 rounded-full bg-[var(--gold)] opacity-70" />
        <div className="absolute bottom-20 right-[18%] w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-60" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        {/* Badges row */}
        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[var(--primary-light)] text-xs font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-white)] leading-tight mb-5">
          {title}
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-[var(--primary-light)]/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          {tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-[var(--accent)] text-[var(--primary-dark)] font-bold rounded-xl hover:bg-[var(--gold)] transition-colors shadow-lg text-sm text-center"
          >
            Start a Project
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm text-center"
          >
            All Services
          </Link>
        </div>
      </div>

      {/* Wave transition into white */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0 56L1440 56L1440 16C1200 56 900 0 720 14C540 28 240 50 0 16L0 56Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
