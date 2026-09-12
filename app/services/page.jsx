import Link from "next/link";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiTrendingUp,
  FiGlobe,
  FiTarget,
  FiZap,
} from "react-icons/fi";

import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/common/CTASection";

import schema from "@/data/services-dynamic-schema.json";

export const metadata = {
  title: "Our Services — Web, App, E-Commerce & Digital Marketing",
  description:
    "Explore DIGITECH services including website development, mobile apps, SEO, e-commerce and digital marketing solutions.",
};

const pages = schema?.pages ?? {};

/* =========================================================
   SERVICES
========================================================= */

const serviceIcons = [
  FiCode,
  FiSmartphone,
  FiTrendingUp,
  FiGlobe,
  FiLayers,
  FiTarget,
  FiZap,
];

const serviceList = Object.values(pages)
  .filter((page) => page?.meta?.slug && page?.meta?.title)
  .map((page, index) => {
    const heroSection = page.sections?.find(
      (section) => section.type === "hero" && section.active !== false,
    );

    const cardGridSection = page.sections?.find(
      (section) => section.type === "cardGrid" && section.active !== false,
    );

    return {
      slug: page.meta.slug,
      title: page.meta.title,
      description:
        heroSection?.data?.subheading ||
        "Custom digital solutions designed around your business goals.",
      bullets:
        cardGridSection?.data?.items
          ?.slice(0, 3)
          ?.map((item) => item?.title)
          ?.filter(Boolean) || [],
      href: `/services/${page.meta.slug}`,
      Icon: serviceIcons[index % serviceIcons.length],
      number: String(index + 1).padStart(2, "0"),
    };
  });

/* =========================================================
   PACKAGES
========================================================= */

const packages = [
  {
    name: "Starter",
    description:
      "For startups and small businesses building their first professional digital presence.",
    features: [
      "Responsive business website",
      "Up to 5 core pages",
      "Basic SEO configuration",
      "Mobile optimisation",
      "Contact form integration",
      "30-day launch support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description:
      "For growing businesses looking for stronger visibility, performance and conversions.",
    features: [
      "Custom business website",
      "Up to 15 pages",
      "CMS integration",
      "Technical & on-page SEO",
      "Speed optimisation",
      "Analytics integration",
      "90-day support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description:
      "Advanced solutions for organisations that need custom technology and long-term scalability.",
    features: [
      "Custom web application",
      "Mobile application",
      "API integrations",
      "CRM / dashboard development",
      "Advanced optimisation",
      "Dedicated project support",
      "Ongoing maintenance",
    ],
    highlighted: false,
  },
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your business, goals, audience and current challenges.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create the right strategy, architecture and execution roadmap for your project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our team converts the strategy into intuitive and conversion-focused experiences.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop, optimise and test your digital solution across devices and platforms.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "After launch, we help improve performance and support continued digital growth.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[var(--surface-soft)]
          pt-28
          pb-20
          sm:pt-32
          sm:pb-24
          lg:pt-36
          lg:pb-28
        "
      >
        {/* background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="
              absolute
              -right-36
              -top-36
              h-[420px]
              w-[420px]
              rounded-full
              bg-[var(--accent)]
              opacity-[0.08]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-40
              left-[15%]
              h-[360px]
              w-[360px]
              rounded-full
              bg-[var(--primary)]
              opacity-[0.05]
              blur-3xl
            "
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-20
            "
          >
            {/* LEFT */}

            <div>
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[var(--border-light)]
                  bg-[var(--surface)]
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[var(--primary)]
                "
              >
                Our Services
              </span>

              <h1
                className="
                  mt-6
                  max-w-3xl
                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-[var(--text-primary)]
                  sm:text-5xl
                  lg:text-[58px]
                "
              >
                Services built to{" "}
                <span className="text-[var(--primary)]">
                  grow your business.
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-[var(--text-secondary)]
                  sm:text-lg
                "
              >
                From strategy and design to development and digital marketing,
                DIGITECH provides end-to-end solutions built around measurable
                business outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[var(--primary)]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-[var(--primary-dark)]
                  "
                >
                  Explore Services
                  <FiArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-[var(--text-primary)]
                    transition
                    hover:border-[var(--primary)]
                    hover:text-[var(--primary)]
                  "
                >
                  Discuss a Project
                  <FiArrowUpRight size={16} />
                </Link>
              </div>

              {/* small stats */}

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-x-10
                  gap-y-5
                  border-t
                  border-[var(--border-light)]
                  pt-7
                "
              >
                <div>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    {serviceList.length}+
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Digital Services
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    360°
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Digital Solutions
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    End-to-End
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Project Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[var(--border-light)]
                  bg-[var(--surface)]
                  p-5
                  shadow-[0_30px_80px_rgba(0,35,75,0.08)]
                  sm:p-7
                "
              >
                {/* top header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      DIGITECH
                    </p>

                    <p className="mt-1 text-lg font-bold text-[var(--text-primary)]">
                      Digital Capabilities
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                    <FiLayers size={19} />
                  </div>
                </div>

                {/* cards */}

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {serviceList.slice(0, 6).map((service, index) => {
                    const Icon = service.Icon;

                    return (
                      <div
                        key={service.slug}
                        className={`
                          rounded-2xl
                          border
                          border-[var(--border-light)]
                          p-4
                          transition
                          ${
                            index === 0
                              ? "bg-[var(--primary)] text-white"
                              : "bg-[var(--surface-soft)]"
                          }
                        `}
                      >
                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-xl
                            ${
                              index === 0
                                ? "bg-white/15 text-white"
                                : "bg-[var(--primary-light)] text-[var(--primary)]"
                            }
                          `}
                        >
                          <Icon size={17} />
                        </div>

                        <p
                          className={`
                            mt-5
                            text-sm
                            font-semibold
                            leading-5
                            ${
                              index === 0
                                ? "text-white"
                                : "text-[var(--text-primary)]"
                            }
                          `}
                        >
                          {service.title}
                        </p>

                        <p
                          className={`
                            mt-1
                            text-[10px]
                            ${
                              index === 0
                                ? "text-white/60"
                                : "text-[var(--text-muted)]"
                            }
                          `}
                        >
                          {service.number}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* floating card */}

              <div
                className="
                  absolute
                  -bottom-6
                  -left-6
                  hidden
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[var(--border-light)]
                  bg-white
                  px-5
                  py-4
                  shadow-xl
                  sm:flex
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--primary-light)]
                    text-[var(--primary)]
                  "
                >
                  <FiTrendingUp size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Growth Focused
                  </p>

                  <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                    Strategy + Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="section-py bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >
            {/* left */}

            <div>
              <span className="text-sm font-semibold text-[var(--primary)]">
                Complete Digital Solutions
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-[var(--text-primary)]
                  sm:text-4xl
                "
              >
                Everything your business needs to succeed online.
              </h2>
            </div>

            {/* right */}

            <div>
              <p className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                We bring design, technology and marketing together to create
                digital experiences that solve real business problems. Instead
                of treating every service separately, our team looks at your
                complete digital ecosystem.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                Whether you need a new website, a scalable application, better
                search visibility or a complete digital growth strategy, we
                build solutions around your goals rather than forcing your
                business into a fixed template.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom solutions",
                  "Business-focused strategy",
                  "Modern technologies",
                  "Long-term scalability",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[var(--border-light)]
                      bg-[var(--surface)]
                      px-4
                      py-3.5
                    "
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--primary-light)]
                        text-[var(--primary)]
                      "
                    >
                      <FiCheck size={12} />
                    </span>

                    <span className="text-sm font-medium text-[var(--text-secondary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="section-py scroll-mt-24 section-bg-services"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-3xl">
            <SectionHeading
              badge="What We Do"
              heading="Explore Our"
              headingAccent="Services"
              subheading="Specialised digital services designed to help your business launch, improve and scale."
            />
          </div>

          {/* 4 CARDS FLEX */}

          <div className="flex flex-wrap gap-5">
            {serviceList.map((service) => {
              const Icon = service.Icon;

              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="
              group
              flex
              min-h-[330px]
              flex-1
              basis-[calc(25%-15px)]
              flex-col
              rounded-2xl
              border
              border-[var(--border-light)]
              bg-[var(--surface)]
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[var(--primary)]
              hover:shadow-xl
            "
                >
                  {/* TOP */}

                  <div className="flex items-start justify-between">
                    <div
                      className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--primary-light)]
                  text-[var(--primary)]
                  transition-all
                  duration-300
                  group-hover:bg-[var(--primary)]
                  group-hover:text-white
                "
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border-light)]
                  text-[var(--primary)]
                  transition-all
                  duration-300
                  group-hover:bg-[var(--primary)]
                  group-hover:text-white
                "
                    >
                      <FiArrowUpRight size={16} />
                    </span>
                  </div>

                  {/* NUMBER */}

                  <span
                    className="
                mt-6
                text-xs
                font-semibold
                tracking-wider
                text-[var(--text-muted)]
              "
                  >
                    {service.number}
                  </span>

                  {/* TITLE */}

                  <h3
                    className="
                mt-3
                text-xl
                font-bold
                leading-tight
                text-[var(--text-primary)]
                transition-colors
                duration-200
                group-hover:text-[var(--primary)]
              "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                mt-3
                text-sm
                leading-6
                text-[var(--text-muted)]
              "
                  >
                    {service.description}
                  </p>

                  {/* TAGS */}

                  {service.bullets.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="
                      rounded-full
                      bg-[var(--surface-soft)]
                      px-3
                      py-1.5
                      text-[10px]
                      font-medium
                      text-[var(--text-secondary)]
                    "
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* BOTTOM */}

                  <div
                    className="
                mt-auto
                flex
                items-center
                gap-2
                pt-6
                text-sm
                font-semibold
                text-[var(--primary)]
              "
                  >
                    Explore Service
                    <FiArrowRight
                      size={15}
                      className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* =====================================================
          WHY DIGITECH
      ===================================================== */}

      <section className="section-py bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-20
            "
          >
            <div>
              <SectionHeading
                badge="Why DIGITECH"
                heading="One team."
                headingAccent="One digital partner."
                subheading="We combine technical expertise, creative thinking and business strategy to create solutions designed for long-term growth."
              />

              <Link
                href="/about"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[var(--primary)]
                  transition
                  hover:gap-3
                "
              >
                Learn More About Us
                <FiArrowRight size={15} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: FiTarget,
                  title: "Strategy First",
                  text: "Every project starts with your business goals, audience and priorities.",
                },
                {
                  icon: FiCode,
                  title: "Modern Technology",
                  text: "We use scalable technologies and modern development practices.",
                },
                {
                  icon: FiZap,
                  title: "Built for Performance",
                  text: "Speed, usability, responsiveness and optimisation are considered from day one.",
                },
                {
                  icon: FiTrendingUp,
                  title: "Growth Focused",
                  text: "Our solutions are designed to support conversions and sustainable growth.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      rounded-2xl
                      border
                      border-[var(--border-light)]
                      bg-[var(--surface)]
                      p-6
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-[var(--primary-light)]
                        text-[var(--primary)]
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

  {/* =====================================================
    PACKAGES
===================================================== */}

<section
  id="packages"
  className="section-py bg-[var(--surface-soft)]"
>
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* SECTION HEADING */}

    <div className="mx-auto max-w-3xl text-center">
      <SectionHeading
        badge="Flexible Solutions"
        heading="Choose a"
        headingAccent="Starting Point"
        subheading="Every business is different. These packages give you a starting point and can be customised around your exact requirements."
        align="center"
      />
    </div>

    {/* PACKAGE CARDS */}

    <div className="mt-14 grid gap-6 lg:grid-cols-3">

      {packages.map((pkg) => (
        <div
          key={pkg.name}
          className={`
            relative
            flex
            flex-col
            rounded-3xl
            border
            p-7
            transition-all
            duration-300
            sm:p-8
            ${
              pkg.highlighted
                ? `
                  border-[#C5DFF5]
                  bg-[#EAF4FC]
                  shadow-lg
                  lg:-translate-y-3
                `
                : `
                  border-[var(--border-light)]
                  bg-[var(--surface)]
                  hover:-translate-y-1
                  hover:shadow-lg
                `
            }
          `}
        >

          {/* =================================================
              MOST POPULAR
          ================================================= */}

          {pkg.highlighted && (
            <span
              className="
                absolute
                -top-3.5
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-[var(--primary)]
                px-4
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-white
                shadow-md
              "
            >
              Most Popular
            </span>
          )}

          {/* =================================================
              PACKAGE TITLE
          ================================================= */}

          <h3
            className="
              text-2xl
              font-bold
              text-[var(--text-primary)]
            "
          >
            {pkg.name}
          </h3>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-3
              min-h-[72px]
              text-sm
              leading-6
              text-[var(--text-secondary)]
            "
          >
            {pkg.description}
          </p>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div
            className="
              my-7
              h-px
              bg-[var(--border-light)]
            "
          />

          {/* =================================================
              FEATURES
          ================================================= */}

          <ul className="flex-1 space-y-4">

            {pkg.features.map((feature) => (
              <li
                key={feature}
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-[var(--text-secondary)]
                "
              >
                <FiCheck
                  size={16}
                  className="
                    mt-0.5
                    shrink-0
                    text-[var(--primary)]
                  "
                />

                <span>
                  {feature}
                </span>
              </li>
            ))}

          </ul>

          {/* =================================================
              GET STARTED BUTTON
          ================================================= */}

          <Link
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[var(--primary)]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-[var(--primary-dark)]
              hover:shadow-md
            "
          >
            Get Started

            <FiArrowRight
              size={15}
              className="transition-transform duration-200"
            />
          </Link>

        </div>
      ))}

    </div>

    {/* =================================================
        CUSTOM PROPOSAL
    ================================================= */}

    <p
      className="
        mt-9
        text-center
        text-sm
        text-[var(--text-muted)]
      "
    >
      Need something more specific?{' '}

      <Link
        href="/contact"
        className="
          font-semibold
          text-[var(--primary)]
          hover:underline
        "
      >
        Get a custom proposal →
      </Link>
    </p>

  </div>
</section>
      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="section-py bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              badge="Our Process"
              heading="From idea to"
              headingAccent="impact."
              subheading="A clear and collaborative process that keeps your project moving in the right direction."
              align="center"
            />
          </div>

          <div className="relative mt-16">
            {/* desktop line */}

            <div
              className="
                absolute
                left-[10%]
                right-[10%]
                top-7
                hidden
                h-px
                bg-[var(--border)]
                lg:block
              "
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <div key={step.number} className="relative text-center">
                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-[var(--background)]
                      bg-[var(--primary)]
                      text-sm
                      font-bold
                      text-white
                      shadow-sm
                    "
                  >
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[220px] text-sm leading-7 text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection
        title="Have a Project in"
        highlight="Mind?"
        subtitle="Tell us what you want to build and we'll help you choose the right strategy, technology and approach."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="About DIGITECH"
        secondaryHref="/about"
      />
    </main>
  );
}
