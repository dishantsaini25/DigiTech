import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import CTASection from '@/components/common/CTASection';
import JobApplicationForm from '@/components/common/JobApplicationForm';
import {
  FiHeart, FiUsers, FiZap, FiCalendar,
  FiBookOpen, FiTrendingUp, FiMapPin, FiBriefcase,
} from 'react-icons/fi';

export const metadata = {
  title: 'Careers at DIGITECH — Join Our Team',
  description:
    'Build your career at DIGITECH. We\'re a growing digital agency looking for talented people who care about craft, collaboration and delivering real results.',
};

const benefits = [
  { icon: FiHeart,     label: 'Work-Life Balance',            desc: 'We respect your personal time. Flexible hours and a culture that doesn\'t glorify overwork.' },
  { icon: FiUsers,     label: 'Collaborative Culture',         desc: 'Work alongside talented designers, engineers and strategists who genuinely enjoy what they do.' },
  { icon: FiZap,       label: 'Creative Freedom',             desc: 'We encourage ownership. Bring your ideas — the best ones get built.' },
  { icon: FiCalendar,  label: 'Team Events & Outings',        desc: 'Regular team lunches, offsite events and activities that keep us connected.' },
  { icon: FiBookOpen,  label: 'Learning & Development',       desc: 'Paid courses, conference tickets and internal knowledge-sharing sessions every month.' },
  { icon: FiTrendingUp, label: 'Clear Growth Path',           desc: 'Performance-based progression with transparent criteria — no guesswork about what it takes to grow.' },
];

const openPositions = [
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    type: 'In-Office | Full-Time',
    location: 'Delhi NCR',
    description:
      'We\'re looking for a Frontend Developer who cares deeply about craft and loves building fast, accessible, pixel-perfect interfaces using React and Next.js.',
    requirements: [
      'Proficiency in React, Next.js and modern JavaScript (ES2020+)',
      'Strong command of Tailwind CSS or equivalent utility-first CSS',
      'Understanding of web performance, accessibility and SEO',
      'Ability to translate Figma designs into clean, maintainable components',
      'Familiarity with Git workflows and agile development',
    ],
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'In-Office | Full-Time',
    location: 'Delhi NCR',
    description:
      'We need a UI/UX Designer who thinks clearly about user problems and crafts interfaces that are both beautiful and intuitive — across web and mobile.',
    requirements: [
      'Strong portfolio showing end-to-end product design work',
      'Proficiency in Figma, including components, variants and auto-layout',
      'Experience with user research, user flows and interaction design',
      'Understanding of design systems and accessibility standards',
      'Ability to collaborate closely with developers',
    ],
  },
  {
    title: 'SEO Associate',
    department: 'Digital Marketing',
    type: 'In-Office | Full-Time',
    location: 'Delhi NCR',
    description:
      'We\'re looking for an SEO Associate who combines technical understanding with strong content instincts to improve organic visibility for our clients.',
    requirements: [
      'Solid understanding of on-page, off-page and technical SEO',
      'Hands-on experience with Ahrefs, SEMrush, Google Search Console and Analytics',
      'Ability to write SEO-optimised content or brief writers effectively',
      'Familiarity with crawl budget, Core Web Vitals and structured data',
      'Analytical mindset with strong reporting skills',
    ],
  },
];

const careerFaqs = [
  {
    question: 'What is the work culture like at DIGITECH?',
    answer: 'DIGITECH has a collaborative, low-ego culture where good ideas win regardless of seniority. We work hard on things that matter, take ownership of our work, and make time for learning, fun and each other.',
    enabled: true,
  },
  {
    question: 'Are positions remote or in-office?',
    answer: 'Current positions are in-office at our Delhi NCR location. We believe in strong in-person collaboration — especially early in a project. Flexible arrangements may be considered for experienced candidates.',
    enabled: true,
  },
  {
    question: 'What does the application process look like?',
    answer: 'After you apply, our hiring team reviews your profile within 3 business days. Shortlisted candidates are invited for an initial video call, followed by a practical skill assessment, and then a final conversation with the team lead.',
    enabled: true,
  },
  {
    question: "I don't see a role that fits — can I still apply?",
    answer: "Yes. We love meeting talented people even when there isn't an open role that matches. Submit a general application and tell us what you do best — we keep strong profiles on file for future openings.",
    enabled: true,
  },
];

const positionTitles = openPositions.map((p) => p.title);

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 bg-[var(--primary-dark)] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-25" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--accent)] opacity-10" />
          <div className="absolute top-14 right-[12%] w-3 h-3 rounded-full bg-[var(--gold)] opacity-70" />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/10 text-[var(--primary-light)]/80 border border-white/15 mb-5">
            Join DIGITECH
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-white)] mb-5 leading-tight">
            Build Your Career at{' '}
            <span className="text-[var(--accent)]">DIGITECH</span>
          </h1>
          <p className="text-[var(--primary-light)]/70 text-lg max-w-xl mx-auto leading-relaxed">
            We're a growing digital agency on a mission to build experiences that genuinely move businesses forward. Join a team that cares about craft, collaboration and shipping great work.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 56L1440 56L1440 16C1200 56 900 0 720 14C540 28 240 50 0 16L0 56Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* ── Why Work With Us ──────────────────────────── */}
      <section className="section-py bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="Life at DIGITECH"
            heading="Why Work"
            headingAccent="With Us?"
            subheading="We invest in our team because we know that great work comes from people who feel valued, challenged and supported."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="flex gap-4 p-6 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] transition-colors duration-200">
                    <Icon size={17} className="text-[var(--primary)] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                      {b.label}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Positions ────────────────────────────── */}
      <section className="section-py bg-[var(--surface-warm)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="Now Hiring"
            heading="Open"
            headingAccent="Positions"
            subheading="Explore current openings and find the role where your skills can have the most impact."
            align="center"
            className="mb-12"
          />

          <div className="space-y-5">
            {openPositions.map((pos) => (
              <div
                key={pos.title}
                className="bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="p-7 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-black text-[var(--text-primary)] mb-2">{pos.title}</h3>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                          <FiBriefcase size={12} className="text-[var(--primary)]" />
                          {pos.department}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                          <FiMapPin size={12} className="text-[var(--primary)]" />
                          {pos.type}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[var(--primary-light)] text-[var(--primary)] text-xs font-bold rounded-full shrink-0">
                      Open
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {pos.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                      Requirements
                    </p>
                    <ul className="space-y-2">
                      {pos.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#apply"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--primary)] text-[var(--text-white)] text-sm font-bold rounded-xl hover:bg-[var(--primary-dark)] transition-colors shadow-sm"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ──────────────────────────── */}
      <section id="apply" className="section-py bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="Apply"
            heading="Send Your"
            headingAccent="Application"
            subheading="Fill in the form below and our hiring team will review your application within 3 business days."
            align="center"
            className="mb-10"
          />
          <div className="bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-7 sm:p-9 shadow-sm">
            <JobApplicationForm positions={positionTitles} />
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="section-py bg-[var(--surface-soft)]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            badge="FAQ"
            heading="Career"
            headingAccent="Questions"
            align="center"
            className="mb-10"
          />
          <Accordion items={careerFaqs} />
        </div>
      </section>

      <CTASection
        badge="Still Have Questions?"
        title="Ready to Join"
        highlight="DIGITECH?"
        subtitle="Don't see the right role? Send us a general application — we keep strong profiles on file for future openings."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
