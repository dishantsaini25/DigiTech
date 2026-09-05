import SectionHeading from '@/components/common/SectionHeading';
import FAQ from '@/components/common/FAQ';

export default function FAQSection({ items, badge = 'FAQ', title = 'Frequently Asked Questions', highlight, subtitle, light = false }) {
  return (
    <section className={`py-20 ${light ? 'hero-bg' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={badge}
          title={title}
          highlight={highlight}
          subtitle={subtitle}
          light={light}
        />
        <FAQ items={items} />
      </div>
    </section>
  );
}
