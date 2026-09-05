import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/common/TestimonialCard';
import StatsSection from '@/components/common/StatsSection';
import CTASection from '@/components/common/CTASection';
import testimonialsData from '@/data/testimonials.json';
import { FiTarget, FiEye, FiHeart, FiAward } from 'react-icons/fi';

export const metadata = {
  title: 'About DIGITECH | Premium Digital Agency',
  description:
    'Learn about DIGITECH - a premium digital agency building modern websites, apps, e-commerce and digital experiences that help businesses grow and compete online.',
};

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Retention Rate' },
  { value: '4.9/5', label: 'Average Client Rating' },
  { value: '6+',   label: 'Years of Experience' },
];

const values = [
  { icon: FiTarget, title: 'Results-Driven', desc: 'Every decision is backed by data and focused on delivering measurable business outcomes.' },
  { icon: FiEye,    title: 'Transparency',   desc: 'Honest communication and clear reporting - you always know exactly what we are working on.' },
  { icon: FiHeart,  title: 'Client-First',   desc: 'Your success is our success. We invest the same care into every project, regardless of size.' },
  { icon: FiAward,  title: 'Craft & Quality', desc: 'We hold ourselves to the highest standards - from pixel-perfect UI to production-grade code.' },
];

const expertise = [
  { emoji: '🌐', title: 'Website Development',      desc: 'High-performance websites built with React, Next.js, Node.js and modern frameworks.' },
  { emoji: '📱', title: 'Mobile App Development',   desc: 'iOS, Android and cross-platform apps using React Native and Flutter.' },
  { emoji: '🛍️', title: 'E-Commerce Solutions',     desc: 'Shopify, WooCommerce and custom stores built to convert and scale.' },
  { emoji: '⚙️', title: 'CRM Development',          desc: 'Custom CRM systems that streamline workflows and enhance customer relationships.' },
  { emoji: '🎨', title: 'UI/UX Design',             desc: 'Intuitive, accessible interfaces grounded in research and user testing.' },
  { emoji: '📈', title: 'Digital Marketing',        desc: 'SEO, content strategy and performance marketing that drive qualified traffic.' },
  { emoji: '🔍', title: 'Search Engine Optimisation', desc: 'Technical and on-page SEO that improves rankings and brings the right audience.' },
  { emoji: '☁️', title: 'Cloud & DevOps',           desc: 'AWS, Vercel and Docker deployments with CI/CD pipelines for reliable delivery.' },
  { emoji: '🔗', title: 'API & Integrations',       desc: 'REST and GraphQL APIs, third-party integrations and microservice architectures.' },
];

const { testimonials: td } = testimonialsData;
const allTestimonials = td.items.filter((t) => t.enabled !== false);

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden section-bg-hero">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--primary-light)] opacity-40" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--accent-light)] opacity-30" />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--border-light)] mb-5">
            About DIGITECH
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-5 leading-tight">
            We Build Digital Experiences{' '}
            <span className="text-[var(--accent)]">That Matter</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            DIGITECH is a premium digital agency helping startups and enterprises design, build and grow
            their digital presence - from beautiful websites and mobile apps to powerful e-commerce
            platforms and custom CRM systems.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 section-bg-services">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <StatsSection stats={stats} />
        </div>
      </section>

      {/* Our Story */}
      <section className="section-py section-bg-technologies">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] mb-5 leading-tight">
                Built to Deliver{' '}
                <span className="text-[var(--accent)]">Real Digital Impact</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                DIGITECH was founded with a single conviction - that every business deserves a digital
                presence that truly works. We combine strategic thinking with world-class engineering and
                design to deliver products that users love and businesses grow on.
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                From our base in Delhi NCR, we work with clients across India and internationally - from
                early-stage startups validating their first MVP to established enterprises scaling their
                digital operations.
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-7">
                Every project we take on is backed by clear discovery, a rigorous development process, and
                a genuine commitment to outcomes - not just deliverables.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Delhi NCR Based', 'Pan-India Clients', 'Global Reach', 'Outcome-Focused'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border-light)] hover:border-[var(--primary)] hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] flex items-center justify-center mb-3">
                    <Icon size={17} className="text-[var(--primary)]" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">{title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-py section-bg-clients">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="What We Do"
            heading="Our Expertise"
            headingAccent="& Capabilities"
            subheading="A comprehensive set of disciplines - from design and development to marketing and cloud infrastructure."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((area) => (
              <div
                key={area.title}
                className="flex gap-4 p-5 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-2xl shrink-0">{area.emoji}</span>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py section-bg-testimonials">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="Client Stories"
            heading="What Our Clients"
            headingAccent="Say About Us"
            subheading="Real feedback from real businesses we have helped build and grow."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                name={t.name}
                role={t.role}
                company={t.company}
                review={t.review}
                rating={t.rating}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] underline underline-offset-2 transition-colors"
            >
              View More on Our Google Profile &rarr;
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something"
        highlight="Great Together?"
        subtitle="Let's discuss your project and explore how DIGITECH can help you grow."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
