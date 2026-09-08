import ClientLogos from '@/components/sections/ClientLogos';
import ClientIndustries from '@/components/sections/ClientIndustries';
import ClientPartnership from '@/components/sections/ClientPartnership';

import clientsData from '@/data/clients.json';
import CTA from '@/components/home/CTA';
import Testimonials from '@/components/home/Testimonials';

const { clients } = clientsData;

export const metadata = {
  title: clients?.meta?.title || 'Our Clients | DIGITECH',
  description:
    clients?.meta?.description ||
    'Discover the businesses and brands that trust DIGITECH for modern digital solutions.',
};

export default function ClientsPage() {
  return (
    <main>
      {/* Hero */}
      {clients?.hero?.enabled !== false && (
        <section className="section-py pt-32 lg:pt-40">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-4xl">
              {clients.hero.badge && (
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
                  {clients.hero.badge}
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
                {clients.hero.heading}

                {clients.hero.headingAccent && (
                  <span className="block text-[var(--primary)]">
                    {clients.hero.headingAccent}
                  </span>
                )}
              </h1>

              {clients.hero.description && (
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
                  {clients.hero.description}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Client Logos */}
      <ClientLogos />

      {/* Industries */}
      <ClientIndustries />

      {/* Testimonials */}
      <Testimonials />

      {/* Partnership */}
      <ClientPartnership />

      {/* CTA */}
      <CTA />
    </main>
  );
}