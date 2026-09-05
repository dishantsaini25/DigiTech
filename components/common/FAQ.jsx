import Accordion from '@/components/ui/Accordion';

/** Thin wrapper — kept for backward compat. Delegates to the ui/Accordion primitive. */
export default function FAQ({ items = [], limit = null }) {
  return <Accordion items={items} limit={limit} />;
}
