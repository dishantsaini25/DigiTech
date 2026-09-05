import SectionHeading from '@/components/ui/SectionHeading';
import { FiCheckCircle } from 'react-icons/fi';

export default function ServiceWhyUs({
  points = [],
  title    = 'Why Choose DIGITECH',
  subtitle = 'We build solutions that not only look great but deliver real business results.',
}) {
  return (
    <section className="section-py bg-[var(--surface-warm)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <SectionHeading badge="Why Choose Us" heading={title} subheading={subtitle} aligned="left" />
            <ul className="space-y-4 mt-6">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <FiCheckCircle size={18} className="text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — warm stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '90+',  label: 'Performance Score',  color: 'var(--primary)'  },
              { value: '100%', label: 'Mobile Responsive',  color: 'var(--accent)'   },
              { value: '40%+', label: 'Higher Conversions', color: '#9A7A2E'          },
              { value: '3-5x', label: 'Faster Load Times',  color: 'var(--primary-dark)' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--surface)] rounded-2xl border border-[var(--border-light)] p-6 text-center hover:shadow-md hover:border-[var(--primary)] transition-all"
              >
                <p className="text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-xs font-medium text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
