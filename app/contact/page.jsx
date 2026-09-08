import ContactForm from '@/components/common/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';

import contactData from '@/data/contact.json';
import footerData from '@/data/footer.json';

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
} from 'react-icons/fi';

const { contact } = contactData;
const { footer } = footerData;

export const metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
};

const iconMap = {
  phone: FiPhone,
  email: FiMail,
  location: FiMapPin,
  hours: FiClock,
};

function getCardValue(card) {
  if (card.type === 'phone') {
    return footer.contact.phone;
  }

  if (card.type === 'email') {
    return footer.contact.email;
  }

  if (card.type === 'location') {
    return footer.contact.address;
  }

  if (card.type === 'hours') {
    return card.value;
  }

  return '';
}

function getCardHref(card) {
  if (card.type === 'phone') {
    return `tel:${footer.contact.phone.replace(/\s/g, '')}`;
  }

  if (card.type === 'email') {
    return `mailto:${footer.contact.email}`;
  }

  return null;
}

export default function ContactPage() {
  if (!contact?.enabled) {
    return null;
  }

  return (
    <>
      {/* Hero */}
      {contact.hero?.enabled !== false && (
        <section className="relative section-py section-bg-hero overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-[var(--primary)] opacity-[0.08]" />

            <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-[var(--accent)] opacity-[0.06]" />

            <div className="absolute top-24 left-[15%] w-2 h-2 rounded-full bg-[var(--primary)] opacity-40" />

            <div className="absolute bottom-24 right-[18%] w-3 h-3 rounded-full bg-[var(--accent)] opacity-40" />
          </div>

          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--border-light)]">
              {contact.hero.badge}
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[var(--text-primary)]">
              {contact.hero.heading}{' '}
              <span className="text-[var(--accent)]">
                {contact.hero.headingAccent}
              </span>
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
              {contact.hero.description}
            </p>
          </div>
        </section>
      )}

      {/* Contact Intro */}
      {contact.intro?.enabled !== false && (
        <section className="section-py bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <SectionHeading
                badge={contact.intro.badge}
                heading={contact.intro.heading}
                headingAccent={contact.intro.headingAccent}
                subheading={contact.intro.description}
              />
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contact.contactCards?.map((card) => {
                const Icon = iconMap[card.type];
                const value = getCardValue(card);
                const href = getCardHref(card);

                if (!Icon) {
                  return null;
                }

                const content = (
                  <>
                    <div className="w-11 h-11 rounded-xl bg-[var(--primary-light)] flex items-center justify-center shrink-0">
                      <Icon
                        size={18}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                        {card.label}
                      </p>

                      <p className="text-sm font-bold text-[var(--text-primary)] leading-relaxed break-words">
                        {value}
                      </p>
                    </div>
                  </>
                );

                if (href) {
                  return (
                    <a
                      key={card.type}
                      href={href}
                      className="
                        group
                        flex
                        items-start
                        gap-3.5
                        p-5
                        bg-[var(--surface)]
                        border
                        border-[var(--border-light)]
                        rounded-2xl
                        hover:border-[var(--primary)]
                        hover:shadow-md
                        transition-all
                        duration-200
                      "
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={card.type}
                    className="
                      group
                      flex
                      items-start
                      gap-3.5
                      p-5
                      bg-[var(--surface)]
                      border
                      border-[var(--border-light)]
                      rounded-2xl
                      hover:border-[var(--primary)]
                      hover:shadow-md
                      transition-all
                      duration-200
                    "
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose + Contact Form */}
      <section className="section-py bg-[var(--surface-soft)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* Why Choose */}
            {contact.whyContact?.enabled !== false && (
              <div className="lg:col-span-2">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--border-light)]">
                  Why Choose Us
                </span>

                <h2 className="mt-5 text-3xl sm:text-4xl font-black leading-tight text-[var(--text-primary)]">
                  {contact.whyContact.heading}
                </h2>

                <div className="mt-7 space-y-4">
                  {contact.whyContact.items?.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-full bg-[var(--primary-light)] flex items-center justify-center shrink-0">
                        <FiCheckCircle
                          size={15}
                          className="text-[var(--primary)]"
                        />
                      </div>

                      <p className="text-sm leading-relaxed text-[var(--text-secondary)] pt-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--surface)] border border-[var(--border-light)] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm">
                <h2 className="text-2xl font-black text-[var(--text-primary)]">
                  {contact.form.heading}
                </h2>

                <p className="mt-2 mb-7 text-sm text-[var(--text-muted)]">
                  {contact.form.description}
                </p>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

  {/* Location / Google Map */}
{contact.map?.enabled !== false && (
  <section className="section-py bg-[var(--background)]">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

      <div className="mb-8">
        <SectionHeading
          badge="Our Location"
          heading={contact.map.heading}
          subheading={contact.map.description}
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-[var(--border-light)] bg-[var(--surface)] shadow-sm">

        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px]">
          <iframe
            src={contact.map.embedUrl}
            title="DIGITECH Location"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] flex items-center justify-center shrink-0">
              <FiMapPin
                size={18}
                className="text-[var(--primary)]"
              />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Our Location
              </p>

              <p className="text-sm font-bold text-[var(--text-primary)]">
                {footer.contact.address}
              </p>
            </div>
          </div>

          <a
            href={contact.map.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-2.5
              rounded-xl
              bg-[var(--primary)]
              text-white
              text-sm
              font-bold
              hover:opacity-90
              transition-opacity
            "
          >
            {contact.map.buttonText}
            <FiArrowRight size={15} />
          </a>
        </div>

      </div>
    </div>
  </section>
)}
    </>
  );
}