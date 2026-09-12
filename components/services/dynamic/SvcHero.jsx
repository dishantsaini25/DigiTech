import Link from 'next/link';

export default function SvcHero({ data }) {
  if (!data) return null;

  const {
    heading,
    subheading,
    tags,
    primary,
    secondary,
  } = data;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#EAF4FC]
        pt-28
        pb-24
        sm:pt-32
        sm:pb-28
      "
    >

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Top Right Circle */}

        <div
          className="
            absolute
            -right-32
            -top-36
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#C9E5FA]
            opacity-70
          "
        />

        {/* Bottom Left Circle */}

        <div
          className="
            absolute
            -bottom-28
            -left-24
            h-80
            w-80
            rounded-full
            bg-white
            opacity-80
          "
        />

        {/* Soft Glow */}

        <div
          className="
            absolute
            right-[15%]
            top-[18%]
            h-52
            w-52
            rounded-full
            bg-white
            opacity-60
            blur-3xl
          "
        />

        {/* Accent Dots */}

        <div
          className="
            absolute
            right-[12%]
            top-20
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
            bottom-24
            right-[20%]
            h-2
            w-2
            rounded-full
            bg-[var(--primary)]
            opacity-30
          "
        />

        <div
          className="
            absolute
            left-[15%]
            top-[35%]
            h-2
            w-2
            rounded-full
            bg-[var(--accent)]
            opacity-40
          "
        />
      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-5xl
          px-5
          text-center
          sm:px-8
          lg:px-10
        "
      >

        {/* =================================================
            TAGS
        ================================================= */}

        {tags?.length > 0 && (
          <div className="mb-7 flex flex-wrap justify-center gap-2">

            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-[#C5DFF5]
                  bg-white/80
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-[var(--primary)]
                  shadow-sm
                "
              >
                {tag}
              </span>
            ))}

          </div>
        )}


        {/* =================================================
            HEADING
        ================================================= */}

        {heading && (
          <h1
            className="
              mx-auto
              max-w-4xl
              text-4xl
              font-black
              leading-[1.08]
              tracking-tight
              text-[var(--text-primary)]
              sm:text-5xl
              lg:text-6xl
            "
          >
            {heading}
          </h1>
        )}


        {/* =================================================
            SUBHEADING
        ================================================= */}

        {subheading && (
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-[var(--text-secondary)]
              sm:text-lg
            "
          >
            {subheading}
          </p>
        )}


        {/* =================================================
            BUTTONS
        ================================================= */}

        {(primary || secondary) && (
          <div
            className="
              mt-9
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >

            {/* PRIMARY BUTTON */}

            {primary && (
              <Link
                href="/contact"
                className="
                  w-full
                  rounded-xl
                  bg-[var(--primary)]
                  px-8
                  py-3.5
                  text-center
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--primary-dark)]
                  hover:shadow-lg
                  sm:w-auto
                "
              >
                {primary}

                <span className="ml-2">
                  →
                </span>
              </Link>
            )}


            {/* SECONDARY BUTTON */}

            {secondary && (
              <Link
                href="/contact"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#B8D5ED]
                  bg-white
                  px-8
                  py-3.5
                  text-center
                  text-sm
                  font-semibold
                  text-[var(--primary)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[var(--primary)]
                  hover:bg-[var(--primary-light)]
                  sm:w-auto
                "
              >
                {secondary}

                <span className="ml-2">
                  →
                </span>
              </Link>
            )}

          </div>
        )}


        {/* =================================================
            TRUST ITEMS
        ================================================= */}

        <div
          className="
            mx-auto
            mt-9
            flex
            max-w-xl
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-3
          "
        >

          <span
            className="
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-[var(--text-muted)]
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-white
                text-[var(--primary)]
                shadow-sm
              "
            >
              ✓
            </span>

            Custom Solutions
          </span>


          <span
            className="
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-[var(--text-muted)]
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-white
                text-[var(--primary)]
                shadow-sm
              "
            >
              ✓
            </span>

            Modern Technology
          </span>


          <span
            className="
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-[var(--text-muted)]
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-white
                text-[var(--primary)]
                shadow-sm
              "
            >
              ✓
            </span>

            Growth Focused
          </span>

        </div>

      </div>


      {/* =====================================================
          WAVE TRANSITION
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          leading-none
        "
      >
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          preserveAspectRatio="none"
          className="h-10 w-full sm:h-14"
        >
          <path
            d="
              M0 56
              L1440 56
              L1440 16
              C1200 56 900 0 720 14
              C540 28 240 50 0 16
              L0 56Z
            "
            fill="var(--background)"
          />
        </svg>
      </div>

    </section>
  );
}