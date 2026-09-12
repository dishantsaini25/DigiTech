import Link from 'next/link';

export default function CTASection({
  badge = 'Ready to Start?',
  title = 'Transform Your Online Presence',
  highlight = 'with DIGITECH',
  subtitle = "Let's build a digital experience that helps your business stand out, connect with customers and grow.",
  primaryLabel = 'Start Your Project',
  primaryHref = '/contact',
  secondaryLabel = 'View Our Work',
  secondaryHref = '/work',
}) {
  return (
    <section className="section-py bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* CTA CARD */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#C5DFF5]
            bg-[#EAF4FC]
            px-7
            py-14
            shadow-[0_20px_60px_rgba(0,35,75,0.06)]
            sm:px-12
            sm:py-16
            lg:px-20
            lg:py-20
          "
        >

          {/* =================================================
              BACKGROUND DECORATIONS
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
            "
          >

            {/* large blue circle */}

            <div
              className="
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-[#C9E5FA]
                opacity-70
              "
            />

            {/* bottom circle */}

            <div
              className="
                absolute
                -bottom-32
                -left-20
                h-64
                w-64
                rounded-full
                bg-white
                opacity-70
              "
            />

            {/* accent circle */}

            <div
              className="
                absolute
                right-[20%]
                top-[25%]
                h-3
                w-3
                rounded-full
                bg-[var(--accent)]
                opacity-70
              "
            />

            <div
              className="
                absolute
                bottom-[22%]
                right-[30%]
                h-2
                w-2
                rounded-full
                bg-[var(--primary)]
                opacity-30
              "
            />

            {/* soft glow */}

            <div
              className="
                absolute
                right-[8%]
                top-[15%]
                h-48
                w-48
                rounded-full
                bg-white
                opacity-50
                blur-3xl
              "
            />

          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative max-w-3xl">

            {/* BADGE */}

            {badge && (
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#C5DFF5]
                  bg-white/80
                  px-4
                  py-2
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--primary)]
                  shadow-sm
                "
              >
                {badge}
              </span>
            )}

            {/* HEADING */}

            <h2
              className="
                mt-6
                max-w-3xl
                text-3xl
                font-black
                leading-[1.08]
                tracking-tight
                text-[var(--text-primary)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              {title}{' '}

              <span className="text-[var(--primary)]">
                {highlight}
              </span>
            </h2>

            {/* SUBTITLE */}

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-[var(--text-secondary)]
                sm:text-lg
              "
            >
              {subtitle}
            </p>

            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-4">

              {/* PRIMARY */}

              <Link
                href={primaryHref}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--primary)]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:bg-[var(--primary-dark)]
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                {primaryLabel}

                <span className="ml-2 text-base">
                  →
                </span>
              </Link>

              {/* SECONDARY */}

              <Link
                href={secondaryHref}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#B8D5ED]
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-[var(--primary)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[var(--primary)]
                  hover:bg-[var(--primary-light)]
                "
              >
                {secondaryLabel}

                <span className="ml-2 text-base">
                  →
                </span>
              </Link>

            </div>

            {/* TRUST LINE */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                border-t
                border-[#C5DFF5]
                pt-6
              "
            >

              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[var(--primary)]
                  "
                >
                  ✓
                </span>

                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Custom Solutions
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[var(--primary)]
                  "
                >
                  ✓
                </span>

                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Modern Technology
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[var(--primary)]
                  "
                >
                  ✓
                </span>

                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Growth Focused
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}