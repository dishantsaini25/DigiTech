import faqData from '@/data/faqs.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';

const { faqs: fd } = faqData;

export default function FAQ() {
  if (!fd?.enabled) return null;

  return (
    <section className="section-py section-bg-faq">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          badge={fd.badge}
          heading={fd.heading}
          headingAccent={fd.headingAccent}
          align="center"
          className="mb-12"
        />
        <Accordion items={fd.items} limit={fd.limit} />
      </div>
    </section>
  );
}
