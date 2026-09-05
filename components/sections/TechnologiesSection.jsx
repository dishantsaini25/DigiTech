import SectionHeading from '@/components/common/SectionHeading';
import { technologies } from '@/data/clients';

export default function TechnologiesSection() {
  return (
    <section className="py-20 hero-bg relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Tech Stack"
          title="Technologies & Platforms"
          highlight="We Build With"
          subtitle="We use industry-leading tools and platforms to deliver exceptional results for every client."
          light
        />

        {/* Marquee-style row */}
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-purple-700/30 hover:border-purple-500/40 transition-all duration-200 group cursor-default"
              >
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-gray-500 group-hover:text-purple-300 transition-colors">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
