import SectionHeading from '@/components/common/SectionHeading';
import { FiSmartphone, FiDatabase, FiMonitor, FiLayers } from 'react-icons/fi';

const pillars = [
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    desc: 'End-to-end mobile app development for startups, enterprises, and growing businesses using iOS, Android, React Native and Flutter.',
    color: '#7c3aed',
  },
  {
    icon: FiDatabase,
    title: 'CRM Platforms',
    desc: 'Custom CRM systems that streamline your workflows, automate follow-ups, and deliver real-time analytics for smarter decisions.',
    color: '#3b82f6',
  },
  {
    icon: FiMonitor,
    title: 'High-Performance Websites',
    desc: 'Fast, secure, SEO-friendly websites built with modern technologies that drive engagement, conversions, and long-term growth.',
    color: '#22c55e',
  },
  {
    icon: FiLayers,
    title: 'End-to-End Solutions',
    desc: 'From concept to launch and beyond — we handle design, development, testing, deployment, and ongoing support.',
    color: '#f97316',
  },
];

export default function HowWeHelpSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Help"
          title="How We Help You"
          highlight="Build & Scale"
          subtitle="From mobile apps and CRM platforms to high-performance websites — we deliver end-to-end development solutions built for performance, security, and growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 card-hover group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
