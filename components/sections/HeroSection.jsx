import Link from 'next/link';

// Homepage hero — matches Promfly's dark purple hero exactly
export default function HeroSection() {
  const devServices = [
    { label: 'Learn more', title: 'App Development',     href: '/services/mobile-app-development' },
    { label: 'Learn more', title: 'CRM Development',     href: '/services/crm-development'        },
    { label: 'Learn more', title: 'Website Development', href: '/services/website-development'    },
    { label: 'Learn more', title: 'Shopify Development', href: '/services/shopify-development'    },
    { label: 'Learn more', title: 'Theme Development',   href: '/services/theme-development'      },
    { label: 'Learn more', title: 'CMS Development',     href: '/services/cms-development'        },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center hero-bg overflow-hidden">
      {/* Dot-grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/4  w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        {/* Tag line */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-purple-200 text-xs font-medium tracking-wide backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            Software &amp; App Development Company
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-3">
          iOS · Android · CRM
        </h1>
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="gradient-text">Website Development</span>
        </h2>

        <p className="text-center text-lg sm:text-xl text-purple-200 mb-2 max-w-xl mx-auto leading-relaxed">
          Scalable solutions for startups and enterprises —
        </p>
        <p className="text-center text-xl sm:text-2xl font-semibold text-white mb-10">
          ready to build?
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-900/40 text-center text-sm"
          >
            Our Development Services
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all text-center text-sm backdrop-blur-sm"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Dev services strip — "Custom apps, iOS solutions…" */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm mb-5">
            Custom apps, iOS solutions, CRM systems, and high-performance websites built for scale
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {devServices.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="px-4 py-2 bg-white/5 hover:bg-purple-700/30 border border-white/10 hover:border-purple-500/40 rounded-lg text-purple-200 hover:text-white text-xs font-medium transition-all duration-200"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Digital marketing callout */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm">
            <span className="text-gray-400">Also need SEO, Social Media &amp; Graphic Design? —</span>
            <Link
              href="/services/digital-marketing"
              className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-2 transition-colors"
            >
              explore our digital marketing services.
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave into white */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 72L1440 72L1440 24C1200 72 900 4 720 20C540 36 240 64 0 24L0 72Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
