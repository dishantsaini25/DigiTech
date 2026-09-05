import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/common/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection({ limit = 6 }) {
  const shown = testimonials.slice(0, limit);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Testimonials"
          title="What Our Clients"
          highlight="Say"
          subtitle="Don't just take our word for it — hear from businesses we've helped grow online."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((t) => (
            <TestimonialCard
              key={t.id}
              name={t.name}
              role={t.role}
              company={t.company}
              text={t.text}
              rating={t.rating}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors"
          >
            View More on Our Google Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
