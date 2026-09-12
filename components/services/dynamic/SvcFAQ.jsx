import SectionHeading from '@/components/ui/SectionHeading';
import DynamicAccordion from './SvcAccordion';

export default function SvcFAQ({ data }) {
  if (!data) return null;
  const { heading, items } = data;
  if (!items?.length) return null;

  return (
    <section className="section-py bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        {heading && (
          <SectionHeading heading={heading} align="center" className="mb-10" />
        )}
        <DynamicAccordion items={items} />
      </div>
    </section>
  );
}
