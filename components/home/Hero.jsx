// import Link from 'next/link';
import Image from 'next/image';
import homeData from '@/data/home.json';
import Button from '@/components/ui/Button';

const { hero } = homeData;

export default function Hero() {
  if (!hero.enabled) return null;

  return (
    <section className="relative min-h-screen flex items-center section-bg-hero overflow-hidden">

      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[var(--primary-light)] opacity-50" />

        <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[var(--accent-light)] opacity-40" />

        <div className="absolute top-1/2 right-[5%] w-3 h-3 rounded-full bg-[var(--gold)]" />

        <div className="absolute top-[42%] right-[8%] w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />

        <div className="absolute top-[55%] right-[4%] w-2 h-2 rounded-full bg-[var(--primary-light)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--primary-light)] text-[var(--primary)] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] inline-block" />

              {hero.badge}
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.1] tracking-tight text-[var(--text-primary)] mb-2">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-10 max-w-lg">
              {hero.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">

              {hero.primaryButton && (
                <Button
                  href={hero.primaryButton.href}
                  size="lg"
                >
                  {hero.primaryButton.label}

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              )}

              {hero.secondaryButton && (
                <Button
                  href={hero.secondaryButton.href}
                  variant="secondary"
                  size="lg"
                >
                  {hero.secondaryButton.label}
                </Button>
              )}

            </div>

            {/* Highlights */}
            {hero.highlights?.length > 0 && (
              <div className="flex flex-wrap gap-8">

                {hero.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-col"
                  >
                    <span className="text-2xl sm:text-3xl font-black text-[var(--primary)] leading-none">
                      {h.value}
                    </span>

                    <span className="text-xs text-[var(--text-muted)] mt-1 font-medium">
                      {h.label}
                    </span>
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

            <div className="relative w-full max-w-xl">

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-light)] bg-[var(--surface)] shadow-2xl aspect-[4/3]">

                <Image
                  src={hero.image}
                  alt="DigiTech Digital Services"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover p-3"
                />

              </div>

              {/* Projects Card */}
              <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl shadow-lg px-5 py-3.5 flex items-center gap-3">

                <span className="w-9 h-9 rounded-xl bg-[var(--primary-light)] flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 14l3-3m0 0l5-5m-5 5l5-5m0 0l3-3"
                      stroke="var(--primary)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <div>
                  <p className="text-[var(--text-primary)] font-black text-lg leading-none">
                    150+
                  </p>

                  <p className="text-[var(--text-muted)] text-[11px] mt-0.5">
                    Projects Delivered
                  </p>
                </div>

              </div>

              {/* Satisfaction Card */}
              <div className="absolute -top-5 -right-5 sm:-right-8 bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl shadow-lg px-5 py-3.5 flex items-center gap-3">

                <span className="w-9 h-9 rounded-xl bg-[var(--gold-light)] flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1L2 5.3l4.2-.7L8 1z"
                      fill="var(--gold)"
                    />
                  </svg>
                </span>

                <div>
                  <p className="text-[var(--text-primary)] font-black text-lg leading-none">
                    98%
                  </p>

                  <p className="text-[var(--text-muted)] text-[11px] mt-0.5">
                    Satisfaction Rate
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}