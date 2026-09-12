import Link from 'next/link';

export default function SvcCTA({ data }) {
  if (!data) return null;
  const { heading, text, primary, secondary, note } = data;

  const hasButtons = primary || secondary;

  return (
    <section className="section-py bg-[var(--surface-soft)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="relative bg-[var(--primary)] rounded-3xl overflow-hidden px-8 py-14 sm:px-14 lg:px-20">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--primary-dark)] opacity-40" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white opacity-5" />
            <div className="absolute top-10 right-[15%] w-3 h-3 rounded-full bg-[var(--gold)] opacity-70" />
          </div>

          <div className="relative max-w-2xl">
            {heading && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-white)] leading-tight mb-4">
                {heading}
              </h2>
            )}

            {text && (
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                {text}
              </p>
            )}

            {hasButtons && (
              <div className="flex flex-wrap gap-4 mb-4">
                {primary && (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[var(--primary)] font-bold text-sm hover:bg-[var(--gold-light)] transition-colors shadow-sm"
                  >
                    {primary}
                  </Link>
                )}
                {secondary && (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent text-white border-2 border-white/30 font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all"
                  >
                    {secondary}
                  </Link>
                )}
              </div>
            )}

            {note && (
              <p className="text-white/50 text-xs mt-3 leading-relaxed">{note}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
