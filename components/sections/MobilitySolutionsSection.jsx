import Link from 'next/link';
import { FiSmartphone, FiArrowRight } from 'react-icons/fi';

// "Mobility Solutions" section — appears near bottom of homepage
export default function MobilitySolutionsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-3xl p-10 sm:p-14 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              {/* Icon */}
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                <FiSmartphone size={26} className="text-white" />
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 text-purple-200 border border-white/20 mb-4">
                Mobility Solutions
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                End-to-end mobile app development for startups, enterprises, and growing businesses
              </h2>

              <p className="text-purple-200 text-base leading-relaxed mb-6">
                From ideation to App Store launch — we build high-performance iOS, Android, and cross-platform apps that delight users and drive business growth.
              </p>

              <Link
                href="/services/mobile-app-development"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-purple-700 font-bold rounded-xl hover:bg-yellow-50 transition-colors shadow-lg text-sm"
              >
                Explore Our Software &amp; Development Services
                <FiArrowRight size={16} />
              </Link>
            </div>

            {/* Right side feature grid */}
            <div className="grid grid-cols-2 gap-4 shrink-0 w-full lg:w-auto">
              {[
                { label: 'iOS Development',     icon: '🍎' },
                { label: 'Android Development', icon: '🤖' },
                { label: 'React Native',         icon: '⚛️' },
                { label: 'Flutter',              icon: '💙' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-white text-xs font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
