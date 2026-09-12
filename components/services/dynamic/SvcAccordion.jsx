'use client';

// Adapts the dynamic schema's { title, text } format to the existing
// Accordion component's expected { question, answer } format.
import Accordion from '@/components/ui/Accordion';

export default function SvcAccordion({ items = [] }) {
  const mapped = items.map((item) => ({
    question: item.title ?? '',
    answer:   item.text  ?? '',
    enabled:  true,
  }));
  return <Accordion items={mapped} />;
}
