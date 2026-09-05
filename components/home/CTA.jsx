import homeData from '@/data/home.json';

const { cta } = homeData;

export default function CTA() {
  if (!cta?.enabled) return null;

  return (
    <section className="section-py section-bg-cta">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            px-7
            py-8
            sm:px-10
            sm:py-9
            lg:px-12
            lg:py-10
          "
          style={{
            background:
              'linear-gradient(105deg, #e9edf2 0%, #ffffff 48%, #5da5df 100%)',
          }}
        >
          {/* Subtle decorative gradient */}
          <div
            aria-hidden="true"
            className="
              absolute
              -right-24
              -top-32
              w-72
              h-72
              rounded-full
              bg-white/20
              blur-3xl
              pointer-events-none
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -left-20
              -bottom-32
              w-64
              h-64
              rounded-full
              bg-white/30
              blur-3xl
              pointer-events-none
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-7
              lg:gap-10
            "
          >
            {/* Left Content */}
            <div className="max-w-4xl">
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-[32px]
                  font-extrabold
                  leading-tight
                  text-[var(--foreground)]
                  mb-2
                "
              >
                {cta.title}
              </h2>

              {cta.description && (
                <p
                  className="
                    text-sm
                    sm:text-base
                    lg:text-[17px]
                    text-[var(--text-secondary)]
                    leading-relaxed
                  "
                >
                  {cta.description}
                </p>
              )}
            </div>

            {/* Chat Button */}
            {cta.chatButton?.enabled && (
              <a
                href={cta.chatButton.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative
                  shrink-0
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  min-w-[150px]
                  px-7
                  py-4
                  rounded-xl
                  bg-[#063567]
                  text-white
                  font-bold
                  text-base
                  shadow-md
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  group
                "
              >
                <span className="relative z-10">
                  {cta.chatButton.label}
                </span>

                {/* Blue hover shine */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -right-8
                    -bottom-8
                    w-20
                    h-20
                    rounded-full
                    bg-[#00b6ff]
                    blur-md
                    opacity-80
                    transition-transform
                    duration-500
                    group-hover:scale-150
                  "
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}