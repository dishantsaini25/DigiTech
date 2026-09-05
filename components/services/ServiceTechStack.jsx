import SectionHeading from '@/components/ui/SectionHeading';

export default function ServiceTechStack({
  techStack = [],
  title    = 'Our Technology Stack',
  subtitle = 'Modern tools and frameworks we use to build fast, scalable solutions.',
}) {
  return (
    <section className="section-py bg-[var(--surface-soft)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading badge="Tech Stack" heading={title} subheading={subtitle} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-[var(--surface)] rounded-2xl border border-[var(--border-light)] p-5 text-center hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 group card-lift"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--primary)] transition-colors duration-200">
                <span className="text-[var(--primary)] group-hover:text-white font-black text-xs transition-colors duration-200">
                  {tech.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <p className="text-xs font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary)] transition-colors leading-tight">
                {tech.name}
              </p>
              <p className="text-[10px] text-[var(--text-muted)] leading-snug">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
