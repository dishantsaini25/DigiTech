import SectionHeading from '@/components/common/SectionHeading';
import { clients } from '@/data/clients';

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Clients"
          title="Trusted by"
          highlight="Growing Businesses"
          subtitle="We've helped businesses across India build their digital presence and scale online."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group cursor-default"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-[9px] leading-none">{client.initial}</span>
              </div>
              <span className="text-xs font-medium text-gray-700 group-hover:text-purple-700 whitespace-nowrap transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
