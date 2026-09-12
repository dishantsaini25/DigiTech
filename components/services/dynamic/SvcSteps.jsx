import SectionHeading from '@/components/ui/SectionHeading';

export default function SvcSteps({ data }) {
  if (!data) return null;

  const { heading, steps } = data;

  if (!steps?.length) return null;

  // For many steps, use 4 columns on desktop
  const manySteps = steps.length > 6;

  return (
    <section
      className="
        section-py
        bg-[#EAF4FC]
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        {heading && (
          <SectionHeading
            heading={heading}
            align="center"
            className="mb-12"
          />
        )}


        {/* =====================================================
            STEPS
        ===================================================== */}

        <div
          className={`
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            ${
              manySteps
                ? 'lg:grid-cols-4'
                : 'lg:grid-cols-3'
            }
          `}
        >

          {steps.map((step, i) => (
            <div
              key={i}
              className="
                group
                relative
                rounded-2xl
                border
                border-[#C5DFF5]
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--primary)]
                hover:shadow-lg
              "
            >

              {/* =================================================
                  STEP NUMBER
              ================================================= */}

              <div
                className="
                  mb-5
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--primary-light)]
                  text-sm
                  font-black
                  text-[var(--primary)]
                  transition-all
                  duration-300
                  group-hover:bg-[var(--primary)]
                  group-hover:text-white
                "
              >
                {step.number}
              </div>


              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                className="
                  mb-2
                  text-[15px]
                  font-bold
                  text-[var(--text-primary)]
                  transition-colors
                  duration-200
                  group-hover:text-[var(--primary)]
                "
              >
                {step.title}
              </h3>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              {step.text && (
                <p
                  className="
                    text-sm
                    leading-7
                    text-[var(--text-muted)]
                  "
                >
                  {step.text}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}