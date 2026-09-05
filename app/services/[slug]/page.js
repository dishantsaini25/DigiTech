import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';
import ServiceHero     from '@/components/services/ServiceHero';
import ServiceFeatures  from '@/components/services/ServiceFeatures';
import ServiceWhyUs    from '@/components/services/ServiceWhyUs';
import ServiceTechStack from '@/components/services/ServiceTechStack';
import ServiceProcess  from '@/components/services/ServiceProcess';
import ServiceStats    from '@/components/services/ServiceStats';
import FAQSection      from '@/components/home/FAQ';
import CTASection      from '@/components/common/CTASection';

const { developmentServices: ds } = servicesData;

/* Build the full service detail map from the tabs + their items */
const serviceMap = ds.tabs.reduce((acc, tab) => {
  acc[tab.id] = {
    slug:     tab.id,
    title:    tab.name,
    tagline:  buildTagline(tab),
    badges:   tab.items.slice(0, 6).map((i) => i.name),
    features: tab.items,
    whyUs:    buildWhyUs(tab.id),
    techStack: buildTechStack(tab.id),
    process:   buildProcess(tab.id),
    stats:     buildStats(tab.id),
    faqs:      buildFaqs(tab.id),
  };
  return acc;
}, {});

function buildTagline(tab) {
  const taglines = {
    web:       'We design and develop modern, high-performance websites and web applications that help businesses grow, convert and scale.',
    app:       'End-to-end mobile app development for iOS, Android and cross-platform — from concept and design to App Store launch.',
    ecommerce: 'Custom e-commerce solutions built to sell — whether you need a Shopify store, a WooCommerce setup or a fully bespoke platform.',
    crm:       'Tailor-made CRM systems that streamline your workflows, automate follow-ups, and give your team real-time insights.',
  };
  return taglines[tab.id] ?? `Professional ${tab.name} services tailored to your business goals.`;
}

function buildWhyUs(id) {
  const map = {
    web: [
      'Optimised for performance — 90+ PageSpeed scores as standard',
      'Flawless experience across all devices and screen sizes',
      'Built with SEO-friendly architecture from day one',
      'Enterprise-grade security and accessibility compliance',
    ],
    app: [
      'End-to-end delivery from UX research to App Store submission',
      'Expert teams across Swift, Kotlin, React Native and Flutter',
      'Agile development with weekly demos and transparent updates',
      'Post-launch monitoring, updates and ongoing support',
    ],
    ecommerce: [
      'Conversion-focused design — every element serves the sale',
      'Fully mobile-optimised — over 70% of purchases happen on mobile',
      'SEO and performance built in — not bolted on',
      'Seamless payment, shipping and inventory integrations',
    ],
    crm: [
      'Built around your exact workflow — not the other way around',
      'Full mobile access so your team works effectively anywhere',
      'Role-based permissions, audit logs and enterprise-grade security',
      'Real-time dashboards and automated reporting',
    ],
  };
  return map[id] ?? ['Experienced team', 'On-time delivery', 'Transparent communication', 'Post-launch support'];
}

function buildTechStack(id) {
  const map = {
    web: [
      { name: 'React',       desc: 'Dynamic, fast-loading UI' },
      { name: 'Next.js',     desc: 'SSR & SSG for performance' },
      { name: 'Node.js',     desc: 'Scalable backend APIs' },
      { name: 'Tailwind CSS',desc: 'Rapid, consistent styling' },
      { name: 'PostgreSQL',  desc: 'Reliable relational data' },
      { name: 'Vercel / AWS',desc: 'Global edge deployment' },
    ],
    app: [
      { name: 'Swift',         desc: 'Native iOS development' },
      { name: 'Kotlin',        desc: 'Native Android development' },
      { name: 'React Native',  desc: 'Cross-platform apps' },
      { name: 'Flutter',       desc: 'Beautiful native UIs' },
      { name: 'Firebase',      desc: 'Real-time backend services' },
      { name: 'Node.js / REST',desc: 'Backend APIs' },
    ],
    ecommerce: [
      { name: 'Shopify',       desc: 'Leading e-commerce platform' },
      { name: 'Shopify Liquid',desc: 'Custom theme development' },
      { name: 'WooCommerce',   desc: 'WordPress e-commerce' },
      { name: 'Stripe / Razorpay', desc: 'Payment integration' },
      { name: 'Next.js',       desc: 'Headless storefronts' },
      { name: 'Storefront API',desc: 'Flexible data access' },
    ],
    crm: [
      { name: 'Node.js',      desc: 'High-performance backend' },
      { name: 'React',        desc: 'Intuitive dashboard UIs' },
      { name: 'PostgreSQL',   desc: 'Robust relational data' },
      { name: 'REST / GraphQL', desc: 'Flexible API layer' },
      { name: 'HubSpot / Salesforce', desc: 'Platform integrations' },
      { name: 'Power BI',     desc: 'Analytics dashboards' },
    ],
  };
  return map[id] ?? [];
}

function buildProcess(id) {
  const shared = [
    { step: '01', title: 'Discovery',    desc: 'Deep-dive into your goals, users and requirements.' },
    { step: '02', title: 'Strategy',     desc: 'Architecture, roadmap and design direction approval.' },
    { step: '03', title: 'Design',       desc: 'Wireframes and visual design with iterative feedback.' },
    { step: '04', title: 'Development',  desc: 'Agile build cycles with regular demos and updates.' },
    { step: '05', title: 'QA & Testing', desc: 'Rigorous testing across devices, browsers and edge cases.' },
    { step: '06', title: 'Launch & Support', desc: 'Deployment, handover and ongoing maintenance.' },
  ];
  const overrides = {
    app: [
      { step: '01', title: 'Discovery',       desc: 'Understanding your users, market and technical requirements.' },
      { step: '02', title: 'UX & Wireframes', desc: 'User flows, wireframes and prototype approval.' },
      { step: '03', title: 'Visual Design',   desc: 'High-fidelity screens aligned to your brand.' },
      { step: '04', title: 'Development',     desc: 'Sprint-based build with weekly build reviews.' },
      { step: '05', title: 'QA & Device Testing', desc: 'Testing on real devices across OS versions.' },
      { step: '06', title: 'App Store Launch', desc: 'Submission, approval and post-launch monitoring.' },
    ],
    crm: [
      { step: '01', title: 'Business Analysis',    desc: 'Mapping your workflows, team structure and data needs.' },
      { step: '02', title: 'Solution Architecture', desc: 'Designing the system, modules and integrations.' },
      { step: '03', title: 'CRM Development',      desc: 'Building features, automation rules and dashboards.' },
      { step: '04', title: 'Integration & QA',     desc: 'Connecting third-party tools and thorough testing.' },
      { step: '05', title: 'Deployment',           desc: 'Zero-downtime launch with data migration.' },
      { step: '06', title: 'Training & Support',   desc: 'Onboarding your team and providing long-term support.' },
    ],
  };
  return overrides[id] ?? shared;
}

function buildStats(id) {
  const map = {
    web:       [{ value: '90+', label: 'PageSpeed Score' }, { value: '3-5x', label: 'Faster Load Times' }, { value: '40%+', label: 'Higher Conversions' }, { value: '100%', label: 'Mobile Responsive' }],
    app:       [{ value: '50+', label: 'Apps Delivered' }, { value: '4.8+', label: 'Avg App Store Rating' }, { value: '99%', label: 'Crash-Free Rate' }, { value: '100%', label: 'On-Time Delivery' }],
    ecommerce: [{ value: '100+', label: 'Stores Built' }, { value: '4.9/5', label: 'Client Rating' }, { value: '50%+', label: 'Conversion Boost' }, { value: '100%', label: 'Mobile Optimised' }],
    crm:       [{ value: '40%', label: 'Faster Sales Cycles' }, { value: '3x', label: 'Lead Capacity' }, { value: '99.9%', label: 'System Uptime' }, { value: '100%', label: 'Custom-Built' }],
  };
  return map[id] ?? [{ value: '150+', label: 'Projects Delivered' }, { value: '98%', label: 'Client Retention' }, { value: '6+', label: 'Years Experience' }, { value: '4.9/5', label: 'Rating' }];
}

function buildFaqs(id) {
  const map = {
    web: [
      { question: 'How long does a website project take?',           answer: 'A standard 5–10 page website typically takes 3–5 weeks. Larger web applications can take 8–16 weeks depending on scope. We provide a detailed timeline after the discovery call.',         enabled: true },
      { question: 'Do you build websites on WordPress?',             answer: 'Yes. We work with WordPress, headless CMS platforms like Sanity and Contentful, and fully custom Next.js builds — we recommend the right stack for your specific needs.',                 enabled: true },
      { question: 'Will my website be optimised for search engines?', answer: 'Absolutely. Every site we build has SEO-friendly architecture — semantic HTML, fast load times, structured data, clean URLs, meta tags and Core Web Vitals optimisation — built in from day one.', enabled: true },
      { question: 'Do you offer website maintenance after launch?',   answer: 'Yes. We offer monthly maintenance packages covering security updates, performance monitoring, content changes and technical support so your site stays fast, secure and up to date.', enabled: true },
    ],
    app: [
      { question: 'Do you develop iOS and Android apps?',             answer: 'Yes — native iOS (Swift), native Android (Kotlin) and cross-platform apps using React Native or Flutter, depending on your budget, timeline and requirements.',                          enabled: true },
      { question: 'How long does app development take?',              answer: 'A simple MVP typically takes 6–10 weeks. A full-featured app can take 12–20 weeks. We scope this precisely after a discovery session.',                                                 enabled: true },
      { question: 'Can you build a startup MVP quickly?',             answer: 'Yes — we specialise in lean MVP builds. Our process focuses on core value first, so you can validate with real users fast and iterate based on feedback.',                               enabled: true },
      { question: 'Do you submit to the App Store and Play Store?',   answer: 'Yes. We handle the complete submission process — app store listing, screenshots, metadata, review guidelines compliance and ongoing updates.',                                           enabled: true },
    ],
    ecommerce: [
      { question: 'Do you build custom Shopify themes?',             answer: 'Yes — pixel-perfect, performance-optimised Shopify themes built from scratch using Liquid, or heavily customised premium themes.',                                                       enabled: true },
      { question: 'Can you migrate my existing store to Shopify?',   answer: 'Yes. We handle full store migrations from WooCommerce, Magento and other platforms — products, customers, orders and SEO — without downtime or data loss.',                              enabled: true },
      { question: 'What payment gateways do you integrate?',         answer: 'Razorpay, Stripe, PayPal, PayU and all major Indian and international payment gateways. We also handle tax, shipping and checkout configuration.',                                        enabled: true },
      { question: 'Will my store be mobile-optimised?',              answer: 'Always — over 70% of e-commerce purchases happen on mobile. Every store we build is designed mobile-first and tested across all major devices.',                                          enabled: true },
    ],
    crm: [
      { question: 'What is a custom CRM?',                           answer: 'A custom CRM is built specifically around your business workflows rather than forcing you to adapt to a generic off-the-shelf product. It does exactly what your team needs — no more, no less.', enabled: true },
      { question: 'Can you integrate the CRM with our existing tools?', answer: 'Yes. We integrate with email platforms, calendars, ERP systems, marketing automation tools, WhatsApp Business and any third-party service with an API.',                               enabled: true },
      { question: 'Do you work with Salesforce or HubSpot?',         answer: 'Yes — we implement, customise and extend Salesforce, HubSpot and Zoho CRM, and we also build fully custom systems when those platforms don\'t fit.',                                     enabled: true },
      { question: 'Is training included after the CRM is built?',    answer: 'Yes. We provide full documentation, video walkthroughs and live training sessions so your team can manage the CRM confidently without developer assistance.',                              enabled: true },
    ],
  };
  return map[id] ?? [];
}

export function generateStaticParams() {
  return ds.tabs.map((tab) => ({ slug: tab.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) return { title: 'Service Not Found | DIGITECH' };
  return {
    title: `${service.title} Services | DIGITECH`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) notFound();

  return (
    <>
      <ServiceHero
        title={service.title}
        tagline={service.tagline}
        badges={service.badges}
      />
      <ServiceFeatures
        features={service.features}
        title={`Our ${service.title} Services`}
        subtitle={`Comprehensive ${service.title.toLowerCase()} solutions tailored to your business goals.`}
      />
      <ServiceWhyUs
        points={service.whyUs}
        title={`Why Choose DIGITECH for ${service.title}`}
        subtitle="We don't just deliver projects — we deliver results your business can measure."
      />
      <ServiceTechStack
        techStack={service.techStack}
        title="Our Technology Stack"
        subtitle={`The modern tools and frameworks we use to build your ${service.title.toLowerCase()} solution.`}
      />
      <ServiceProcess
        process={service.process}
        title="Our Process"
        subtitle="A clear, systematic approach that keeps you informed at every step."
      />
      <ServiceStats
        stats={service.stats}
        title="Measurable Results"
        subtitle={`The tangible impact our ${service.title.toLowerCase()} work delivers.`}
      />
      {service.faqs?.length > 0 && (
        <section className="section-py bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            {/* Inline FAQ using Accordion directly to avoid circular import */}
            <FaqList items={service.faqs} />
          </div>
        </section>
      )}
      <CTASection
        title={`Ready to Start Your`}
        highlight={`${service.title} Project?`}
        subtitle={`Tell us about your requirements and we'll have a tailored proposal back to you within 2 business hours.`}
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}

/* Inline FAQ accordion to avoid import issues — delegates to Accordion primitive */
import Accordion from '@/components/ui/Accordion';
function FaqList({ items }) {
  return <Accordion items={items} />;
}
