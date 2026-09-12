import { notFound } from 'next/navigation';
import schema from '@/data/services-dynamic-schema.json';
import ServicePageRenderer from '@/components/services/ServicePageRenderer';

const { pages } = schema;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return { title: 'Service Not Found | DIGITECH' };
  return {
    title: `${page.meta.title} | DIGITECH`,
    description:
      page.sections.find((s) => s.type === 'hero' && s.active)?.data?.subheading ?? '',
  };
}

export default async function DynamicServicePage({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return <ServicePageRenderer sections={page.sections} />;
}
