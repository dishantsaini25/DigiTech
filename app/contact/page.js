import ContactForm from '@/components/common/ContactForm';
import footerData from '@/data/footer.json';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Contact Us — Start a Project with DIGITECH',
  description:
    'Get in touch with DIGITECH. Whether you have a project in mind or just want to explore options, our team responds within 2 business hours.',
};

const { footer } = footerData;

const contactCards = [
  {
    icon: FiPhone,
    label: 'Call Us',
    value: footer.contact.phone,
    href: `tel:${footer.contact.phone.replace(/\s/g, '')}`,
    bg: 'bg-[var(--primary-light)]',
    iconColor: 'text-[var(--primary)]',
  },
  {
    icon: FiMail,
    label: 'Email Us',
    value: footer.contact.email,
    href: `mailto:${footer.contact.email}`,
    bg: 'bg-[var(--accent-light)]',
    iconColor: 'text-[#C26840]',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: footer.contact.address,
    href: null,
    bg: 'bg-[var(--gold-light)]',
    iconColor: 'text-[#9A7A2E]',
  },
  {
    icon: FiClock,
    label: 'Response Time',
    value: 'Within 2 business hours',
    href: null,
    bg: 'bg-[var(--surface-soft)]',
    iconColor: 'text-[var(--primary)]',
  },
];

const whyChoose = [
  'Tailored proposals — no one-size-fits-all answers',
  'Transparent pricing with no hidden costs',
  'Dedicated project manager on every engagement',
  'End-to-end delivery from design to deployment',
  'Post-launch support included as standard',
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 bg-[var(--primary-dark)] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-25" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--accent)] opacity-10" />
          <div className="absolute top-14 right-[12%] w-3 h-3 rounded-full bg-[var(--gold)] opacity-70" />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/10 text-[var(--primary-light)]/80 border border-white/15 mb-5">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-white)] mb-5 leading-tight">
            Let's Build Something{' '}
            <span className="text-[var(--accent)]">Great Together</span>
          </h1>
          <p className="text-[var(--primary-light)]/70 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you have a project ready to go or just want to explore what's possible — drop us a message and we'll be back to you within 2 business hours.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 56L1440 56L1440 16C1200 56 900 0 720 14C540 28 240 50 0 16L0 56Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* ── Main two-column layout ───────────────────── */}
      <section className="section-py bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ── Left — info side ─────────────────── */}
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] mb-4">
                Contact Details
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] mb-4 leading-tight">
                We're Here to Help{' '}
                <span className="text-[var(--accent)]">You Grow</span>
              </h2>
              <p className="text-[var(--text-muted)] text-base leading-relaxed mb-8">
                Tell us about your business goals and the challenge you're trying to solve. We'll put together a clear, no-obligation proposal that shows exactly how DIGITECH can help.
              </p>

              {/* Contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.label}
                      className="flex items-start gap-3.5 p-4 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl hover:border-[var(--primary)] transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${card.bg}`}>
                        <Icon size={17} className={card.iconColor} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-[var(--text-muted)] font-semibold uppercase tracking-wide mb-0.5">
                          {card.label}
                        </p>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="text-sm font-bold text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors break-all"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="text-sm font-bold text-[var(--text-primary)]">{card.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Why DIGITECH */}
              <div className="bg-[var(--surface-warm)] border border-[var(--border-light)] rounded-2xl p-6">
                <h3 className="text-sm font-black text-[var(--text-primary)] mb-4">
                  Why Businesses Choose DIGITECH
                </h3>
                <ul className="space-y-3">
                  {whyChoose.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <FiCheckCircle size={15} className="text-[var(--primary)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right — form ─────────────────────── */}
            <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border-light)] shadow-sm p-7 sm:p-9">
              <h3 className="text-xl font-black text-[var(--text-primary)] mb-1">
                Get Your Project Quotation
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-7 flex items-center gap-1.5">
                <span className="text-[var(--gold)]">⚡</span>
                Response within 2 business hours · No obligation
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ──────────────────────────── */}
      <section className="bg-[var(--surface-soft)] pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border-light)] overflow-hidden">
            <div className="h-56 bg-gradient-to-br from-[var(--primary-light)] to-[var(--surface-warm)] flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)] flex items-center justify-center shadow-md">
                <FiMapPin size={22} className="text-white" />
              </div>
              <p className="text-sm font-bold text-[var(--text-primary)]">{footer.contact.address}</p>
              <p className="text-xs text-[var(--text-muted)]">Serving clients across India and worldwide</p>
              <a
                href="https://www.google.com/maps/search/Delhi+NCR+India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[var(--primary)] hover:underline underline-offset-2 transition-colors"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
