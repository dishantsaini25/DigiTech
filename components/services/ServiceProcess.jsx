import SectionHeading from '@/components/ui/SectionHeading';

export default function ServiceProcess({
  process  = [],
  title    = 'Our Process',
  subtitle = 'A clear, systematic approach that ensures every project is delivered on time and on brief.',
}) {
  return (
    <section className="section-py bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading badge="How We Work" heading={title} subheading={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {process.map((step, i) => (
            <div
              key={step.step}
              className="relative bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-6 hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 group"
            >
              {/* Step number badge */}
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-[var(--text-white)] flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                {step.step}
              </div>

              {/* Connector line — desktop only, between non-last items */}
              {i % 3 !== 2 && i < process.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-9 -right-2.5 w-5 h-px bg-[var(--border)]"
                />
              )}

              <h3 className="text-[var(--text-primary)] font-bold text-[15px] mb-2 group-hover:text-[var(--primary)] transition-colors">
                {step.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
