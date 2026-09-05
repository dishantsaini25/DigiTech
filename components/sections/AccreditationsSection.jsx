import SectionHeading from '@/components/common/SectionHeading';

const accreditations = [
  { name: 'Google Partner',     abbr: 'GP',  color: '#4285F4' },
  { name: 'Meta Business Partner', abbr: 'MB', color: '#1877F2' },
  { name: 'Shopify Partner',    abbr: 'SP',  color: '#95bf47' },
  { name: 'HubSpot Certified',  abbr: 'HC',  color: '#FF7A59' },
  { name: 'ISO Certified',      abbr: 'ISO', color: '#7c3aed' },
  { name: 'MSME Registered',    abbr: 'MS',  color: '#22c55e' },
];

export default function AccreditationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Accreditations"
          title="Accreditations &"
          highlight="Affiliations"
          subtitle="Recognised and certified by leading industry bodies and platforms."
        />

        <div className="flex flex-wrap justify-center gap-5">
          {accreditations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 rounded-2xl w-36 hover:border-purple-300 hover:shadow-md transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm"
                style={{ backgroundColor: item.color }}
              >
                {item.abbr}
              </div>
              <span className="text-xs font-semibold text-gray-700 text-center leading-snug">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
