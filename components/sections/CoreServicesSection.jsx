import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import { homeServices } from '@/data/services';

export default function CoreServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Core Services"
          title="App, CRM, and web development solutions"
          highlight="tailored to your business"
          subtitle="From mobile apps and CRM platforms to high-performance websites — we deliver end-to-end development solutions built for performance, security, and growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
