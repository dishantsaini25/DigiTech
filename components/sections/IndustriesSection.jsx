import SectionHeading from '@/components/common/SectionHeading';
import { industries } from '@/data/clients';

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Industries We Serve"
          title="We Work Across"
          highlight="Every Industry"
          subtitle="We provide AI-powered digital marketing solutions across multiple industries, helping businesses increase visibility, generate leads, and scale revenue with data-driven strategies."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 cursor-default"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
