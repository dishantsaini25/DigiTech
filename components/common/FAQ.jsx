// Kept for backward compatibility — delegates to ui/Accordion.
import Accordion from '@/components/ui/Accordion';

export default function FAQ({ items = [], limit = null }) {
  return <Accordion items={items} limit={limit} />;
}
