import PortfolioProjects from '@/components/sections/PortfolioProjects';
import ClientLogos from '@/components/sections/ClientLogos';

import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

import portfolioData from '@/data/portfolio.json';

const { portfolio } = portfolioData;

export const metadata = {
  title: portfolio?.meta?.title || 'Our Work | DIGITECH',
  description:
    portfolio?.meta?.description ||
    'Explore the digital products and solutions built by DIGITECH.',
};

export default function PortfolioPage() {
  return (
    <main>

      {/* Hero */}
      {portfolio?.hero?.enabled !== false && (
        <section className="section-py pt-32 lg:pt-40">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="max-w-4xl">
              {portfolio.hero.badge && (
                <span
                  className="
                    inline-flex
                    items-center
                    px-3.5
                    py-1.5
                    rounded-full
                    bg-[var(--primary)]/10
                    text-[var(--primary)]
                    text-sm
                    font-semibold
                    mb-5
                  "
                >
                  {portfolio.hero.badge}
                </span>
              )}

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-[var(--text-primary)]
                "
              >
                {portfolio.hero.heading}

                <span className="block text-[var(--primary)]">
                  {portfolio.hero.headingAccent}
                </span>
              </h1>

              {portfolio.hero.description && (
                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-base
                    sm:text-lg
                    leading-relaxed
                    text-[var(--text-secondary)]
                  "
                >
                  {portfolio.hero.description}
                </p>
              )}
            </div>

            {/* Stats */}
            {portfolio.stats?.enabled && (
              <div className="flex flex-wrap gap-8 mt-10">
                {portfolio.stats.items.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        w-10
                        h-10
                        rounded-xl
                        bg-[var(--primary)]/10
                        text-[var(--primary)]
                      "
                    >
                      <span className="text-lg">
                        {stat.icon === 'users' ? '◉' : '↗'}
                      </span>
                    </div>

                    <div>
                      <p
                        className="
                          text-xl
                          font-bold
                          text-[var(--text-primary)]
                        "
                      >
                        {stat.value}
                      </p>

                      <p
                        className="
                          text-sm
                          text-[var(--text-secondary)]
                        "
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* Portfolio Projects */}
      <PortfolioProjects />

      {/* Existing Clients */}
      <ClientLogos />

      {/* Existing Testimonials */}
      <Testimonials />

      {/* Existing CTA */}
      <CTA />

    </main>
  );
}