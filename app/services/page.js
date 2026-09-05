import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import CTASection from '@/components/common/CTASection';
import servicesData from '@/data/services.json';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Our Services — Web, App, E-Commerce & CRM Development',
  description:
    'Explore DIGITECH\'s full range of services — website development, mobile app development, e-commerce, CRM, UI/UX design, digital marketing, SEO and more.',
};

const { developmentServices: ds } = servicesData;

/* Flatten all service items across all tabs for the overview grid */
const allTabServices = ds.tabs.map((tab) => ({
  slug: tab.id,
  title: tab.name,
  description: tab.items[0]?.description ?? '',
  icon: tab.icon,
  color: 'var(--primary)',
  href: `/services/${tab.id}`,
  features: tab.items.slice(0, 4).map((i) => i.name),
}));

const packages = [
  {
    name: 'Starter',
    badge: null,
    highlight: false,
    description: 'Perfect for startups and small businesses launching their digital presence.',
    features: [
      '5-page responsive website',
      'Mobile-optimised design',
      'Basic SEO setup',
      '1 round of revisions',
      '30-day post-launch support',
    ],
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    highlight: true,
    description: 'For growing businesses that need more capability and a stronger digital footprint.',
    features: [
      'Up to 15-page custom website',
      'CMS integration (Sanity / WordPress)',
      'Full on-page & technical SEO',
      'Performance optimisation',
      '3 rounds of revisions',
      '90-day post-launch support',
      'Social media design kit',
    ],
  },
  {
    name: 'Enterprise',
    badge: null,
    highlight: false,
    description: 'For established businesses requiring end-to-end digital solutions at scale.',
    features: [
      'Full custom web application',
      'Mobile app (iOS + Android)',
      'API & third-party integrations',
      'CRM / dashboard development',
      'Dedicated project manager',
      'Unlimited revisions',
      '6-month support & maintenance',
      'Monthly analytics reporting',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 bg-[var(--primary-dark)] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-25" />
          <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[var(--accent)] opacity-10" />
          <div className="absolute top-16 right-[10%] w-3 h-3 rounded-full bg-[var(--gold)] opacity-70" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/10 text-[var(--primary-light)]/80 border border-white/15 mb-5">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-white)] leading-tight mb-5">
            Services That Drive{' '}
            <span className="text-[var(--accent)]">Real Results</span>
          </h1>
          <p className="text-[var(--primary-light)]/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            End-to-end digital solutions — from pixel-perfect websites and mobile apps to powerful e-commerce platforms and custom business systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--accent)] text-[var(--primary-dark)] font-bold rounded-xl hover:bg-[var(--gold)] transition-colors shadow-lg text-sm text-center"
            >
              Start a Project
            </Link>
            <a
              href="#packages"
              className="w-full sm:w-auto px-8 py-3.5 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm text-center"
            >
              View Packages
            </a>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 56L1440 56L1440 16C1200 56 900 0 720 14C540 28 240 50 0 16L0 56Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* ── Intro paragraph ───────────────────────────── */}
      <section className="py-14 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
            At DIGITECH, we believe every business deserves a digital presence that truly works. We combine strategic thinking with world-class engineering to deliver{' '}
            <strong className="text-[var(--text-primary)]">Web Development</strong>,{' '}
            <strong className="text-[var(--text-primary)]">App Development</strong>,{' '}
            <strong className="text-[var(--text-primary)]">E-Commerce</strong>,{' '}
            <strong className="text-[var(--text-primary)]">CRM Systems</strong>,{' '}
            <strong className="text-[var(--text-primary)]">UI/UX Design</strong> and{' '}
            <strong className="text-[var(--text-primary)]">Digital Marketing</strong> — all under one roof.
          </p>
        </div>
      </section>

      {/* ── Service overview cards ─────────────────────── */}
      <section className="section-py bg-[var(--surface-warm)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="What We Build"
            heading="Our Core"
            headingAccent="Service Areas"
            subheading="Each service area is a deep specialisation — not a checkbox on a generic agency list."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allTabServices.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.description}
                icon={s.icon}
                color="var(--primary)"
                href={s.href}
                features={s.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ──────────────────────────────────── */}
      <section id="packages" className="section-py bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="Pricing"
            heading="Choose the Right"
            headingAccent="Package"
            subheading="Transparent pricing designed to fit every stage of business growth. Every package includes dedicated support."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col bg-[var(--surface)] rounded-2xl border-2 p-8 transition-all duration-200 hover:shadow-xl ${
                  pkg.highlight
                    ? 'border-[var(--primary)] shadow-lg shadow-[var(--primary-light)]'
                    : 'border-[var(--border-light)]'
                }`}
              >
                {/* Popular badge */}
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--primary)] text-[var(--text-white)] text-xs font-bold rounded-full shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}

                {/* Plan name */}
                <h3 className="text-xl font-black text-[var(--text-primary)] mb-2">{pkg.name}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <FiCheckCircle size={15} className="text-[var(--primary)] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    pkg.highlight
                      ? 'bg-[var(--primary)] text-[var(--text-white)] hover:bg-[var(--primary-dark)] shadow-sm'
                      : 'bg-[var(--surface-soft)] text-[var(--text-primary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] border border-[var(--border-light)]'
                  }`}
                >
                  Get Started
                  <FiArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
            Need something custom?{' '}
            <Link href="/contact" className="text-[var(--primary)] font-semibold hover:underline underline-offset-2">
              Let's talk →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Process strip ─────────────────────────────── */}
      <section className="section-py bg-[var(--surface-soft)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="How We Work"
            heading="Our Project"
            headingAccent="Process"
            subheading="A clear, repeatable process that keeps you informed and in control at every stage."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { num: '01', title: 'Discovery',    desc: 'Deep-dive into your goals, users and competitive landscape.' },
              { num: '02', title: 'Strategy',     desc: 'Architecture, roadmap and design direction signed off by you.' },
              { num: '03', title: 'Design',        desc: 'Wireframes and visual design with your feedback built in.' },
              { num: '04', title: 'Development',  desc: 'Agile build cycles with regular demos and updates.' },
              { num: '05', title: 'Launch & Grow', desc: 'Deployment, QA, handover and ongoing support.' },
            ].map((step, i) => (
              <div key={step.num} className="relative bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-5 hover:border-[var(--primary)] hover:shadow-md transition-all group">
                {/* Connector */}
                {i < 4 && (
                  <div aria-hidden="true" className="hidden lg:block absolute top-8 -right-2.5 w-5 h-px bg-[var(--border)]" />
                )}
                <div className="w-9 h-9 rounded-xl bg-[var(--primary)] text-[var(--text-white)] flex items-center justify-center font-black text-xs mb-4 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--primary)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something"
        highlight="Remarkable?"
        subtitle="Tell us about your project and we'll put together a tailored proposal within 2 business hours."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
