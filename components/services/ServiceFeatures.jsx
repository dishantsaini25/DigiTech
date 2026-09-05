import SectionHeading from '@/components/ui/SectionHeading';
import { FiCheckCircle } from 'react-icons/fi';

export default function ServiceFeatures({ features = [], title = 'Our Services', subtitle = 'Comprehensive solutions tailored to your business goals' }) {
  return (
    <section className="section-py bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading badge="What We Offer" heading={title} subheading={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => {
            const t = typeof feature === 'string' ? feature : feature.title;
            const d = typeof feature === 'string' ? null  : feature.desc;
            return (
              <div
                key={t}
                className="flex gap-4 p-5 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl hover:border-[var(--primary)] hover:bg-[var(--primary-light)]/20 transition-all duration-200 group"
              >
                <FiCheckCircle size={18} className="text-[var(--primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                    {t}
                  </p>
                  {d && <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{d}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
