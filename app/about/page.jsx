import Link from 'next/link';
import aboutData from '@/data/about.json';
import servicesData from '@/data/services.json';


import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import CTA from '@/components/home/CTA';

const { about } = aboutData;
const { developmentServices } = servicesData;


function getAllServices() {
  return developmentServices?.tabs?.flatMap((tab) => tab.items || []) || [];
}

function getCoreServices() {
  const allServices = getAllServices();

  if (!about.coreServices?.serviceIds?.length) {
    return allServices.slice(0, 6);
  }

  return about.coreServices.serviceIds
    .map((id) => allServices.find((service) => service.id === id))
    .filter(Boolean);
}

export default function AboutPage() {
  if (!about?.enabled) return null;

  const coreServices = getCoreServices();

  return (
    <main>
      {/* =========================
          HERO
      ========================== */}
      {about.hero?.enabled && (
        <section className="relative overflow-hidden bg-[var(--surface-soft)] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Content */}
              <div>
                {about.hero.badge && (
                  <span className="mb-5 inline-flex items-center rounded-full border border-[var(--border-light)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
                    {about.hero.badge}
                  </span>
                )}

                <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  {about.hero.heading}{' '}
                  <span className="text-[var(--primary)]">
                    {about.hero.headingAccent}
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                  {about.hero.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Let's Work Together
                    <Icon name="arrow-right" className="ml-2 h-4 w-4" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-[var(--border-light)] bg-[var(--surface)] shadow-sm">
                  <img
                    src={about.hero.image}
                    alt="About DIGITECH"
                    className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[500px]"
                  />
                </div>

                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[var(--border-light)] bg-[var(--surface)] px-5 py-4 shadow-lg sm:block">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Digital Solutions
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Built for real business growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================
          INTRO / WHO WE ARE
      ========================== */}
      {about.intro?.enabled && (
        <section className="section-py bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              {/* Left */}
              <div>
                <SectionHeading
                  badge={about.intro.badge}
                  heading={about.intro.heading}
                  headingAccent={about.intro.headingAccent}
                  subheading={about.intro.description}
                />

                {about.intro.highlights?.length > 0 && (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {about.intro.highlights.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-xl border border-[var(--border-light)] bg-[var(--surface)] p-4"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary)]">
                          <Icon name="check" className="h-3 w-3" />
                        </span>

                        <span className="text-sm leading-6 text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {about.intro.button?.enabled && (
                  <Link
                    href={about.intro.button.href}
                    className="mt-8 inline-flex items-center rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {about.intro.button.label}
                    <Icon name="arrow-right" className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>

              {/* Right */}
              <div className="space-y-5">
                {about.intro.content?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="mt-8 rounded-3xl border border-[var(--border-light)] bg-[var(--surface-soft)] p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-light)] text-[var(--primary)]">
                      <Icon name="layers" className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        From Idea to Deployment
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        We combine strategy, design, development and deployment
                        to create digital products that are built to perform in
                        the real world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

 {/* =========================
    CORE SERVICES
========================== */}
{about.coreServices?.enabled && (
  <section className="section-py section-bg-services">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

      {/* Heading */}
      <div className="mb-12">
        <SectionHeading
          badge={about.coreServices.badge}
          heading={about.coreServices.heading}
          headingAccent={about.coreServices.headingAccent}
          subheading={about.coreServices.description}
        />
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {coreServices.map((item) => (
          <article
            key={item.id}
            className="
              group
              overflow-hidden
              rounded-2xl
              bg-[var(--surface)]
              border border-[var(--border-light)]
              transition-all duration-300
              hover:border-[var(--primary)]
              hover:shadow-lg
              card-lift
            "
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3
                className="
                  text-[var(--text-primary)]
                  font-bold
                  text-xl
                  mb-3
                  transition-colors
                  group-hover:text-[var(--primary)]
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  text-[var(--text-muted)]
                  text-sm
                  leading-relaxed
                  min-h-[68px]
                "
              >
                {item.description}
              </p>

              {/* Know More */}
              <Link
                href={`/services/${item.id}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-5
                  text-sm
                  font-semibold
                  text-[var(--primary)]
                  transition-all duration-200
                  group-hover:gap-3
                "
              >
                Know More
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* View All Services */}
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-[var(--primary)]
            px-6
            py-3
            text-sm
            font-semibold
            text-[var(--text-white)]
            transition-all duration-200
            hover:opacity-90
          "
        >
          View All Services
          <span aria-hidden="true">→</span>
        </Link>
      </div>

    </div>
  </section>
)}

      {/* =========================
          MISSION & VISION
      ========================== */}
      {about.missionVision?.enabled && (
        <section className="section-py bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <SectionHeading
              badge={about.missionVision.badge}
              heading={about.missionVision.heading}
              headingAccent={about.missionVision.headingAccent}
              subheading={about.missionVision.description}
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* Mission */}
              {about.missionVision.mission && (
                <div className="group rounded-3xl border border-[var(--border-light)] bg-[var(--surface)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-light)] text-[var(--primary)]">
                      <Icon
                        name={about.missionVision.mission.icon}
                        className="h-6 w-6"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[var(--primary)]">
                        Our Purpose
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                        {about.missionVision.mission.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-7 text-base leading-8 text-[var(--text-secondary)]">
                    {about.missionVision.mission.description}
                  </p>
                </div>
              )}

              {/* Vision */}
              {about.missionVision.vision && (
                <div className="group rounded-3xl border border-[var(--border-light)] bg-[var(--surface)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-light)] text-[var(--primary)]">
                      <Icon
                        name={about.missionVision.vision.icon}
                        className="h-6 w-6"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[var(--primary)]">
                        Where We're Going
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                        {about.missionVision.vision.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-7 text-base leading-8 text-[var(--text-secondary)]">
                    {about.missionVision.vision.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================
          OUR APPROACH
      ========================== */}
      {about.approach?.enabled && (
        <section className="section-py bg-[var(--surface-soft)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <SectionHeading
              badge={about.approach.badge}
              heading={about.approach.heading}
              headingAccent={about.approach.headingAccent}
              subheading={about.approach.description}
            />

            <div className="relative mt-14">
              {/* Desktop connector */}
              <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[var(--border-light)] lg:block" />

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {about.approach.steps?.map((step) => (
                  <div
                    key={step.number}
                    className="relative text-center"
                  >
                    <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[var(--surface-soft)] bg-[var(--primary)] text-sm font-bold text-white shadow-sm">
                      {step.number}
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================
          EXISTING HOME CTA
      ========================== */}
       <CTA />
    </main>
  );
}