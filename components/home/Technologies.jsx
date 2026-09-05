import Image from 'next/image';
import techData from '@/data/technologies.json';
import SectionHeading from '@/components/ui/SectionHeading';

const { technologies: td } = techData;

/* Apply enabled filter + limit */
function getItems(items = [], limit) {
  const filtered = items.filter((item) => item.enabled !== false);

  return limit ? filtered.slice(0, limit) : filtered;
}

/* Single Technology Item */
function TechItem({ item }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        shrink-0
        w-[105px]
        sm:w-[120px]
        mx-4
        sm:mx-6
        group
      "
    >
      {/* Logo */}
      <div
        className="
          w-12
          h-12
          sm:w-14
          sm:h-14
          flex
          items-center
          justify-center
          mb-3
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.name} logo`}
            width={56}
            height={56}
            className="
              w-full
              h-full
              object-contain
            "
          />
        ) : (
          <span
            className="
              text-[var(--primary)]
              font-bold
              text-lg
            "
          >
            {item.name.substring(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* Technology Name */}
      <span
        className="
          text-sm
          sm:text-base
          font-semibold
          text-[var(--text-secondary)]
          text-center
          whitespace-nowrap
          transition-colors
          duration-300
          group-hover:text-[var(--primary)]
        "
      >
        {item.name}
      </span>
    </div>
  );
}

export default function Technologies() {
  /* Section disabled from JSON */
  if (!td?.enabled) return null;

  /* Enabled items + limit */
  const items = getItems(td.items, td.limit);

  /* Nothing to display */
  if (!items.length) return null;

  /*
    Duplicate items for seamless marquee
  */
  const doubled = [...items, ...items];

  return (
    <section
      className="
        section-py
        section-bg-technologies
        overflow-hidden
      "
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          badge={td.badge}
          heading={td.heading}
          headingAccent={td.headingAccent}
          align="center"
          className="mb-12 sm:mb-14"
        />
      </div>

      {/* Technology Marquee */}
      <div className="relative w-full overflow-hidden">

        {/* Left Fade */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-0
            top-0
            bottom-0
            w-16
            sm:w-24
            lg:w-32
            z-10
            pointer-events-none
          "
          style={{
            background:
            'linear-gradient(to right, #f7fafd, transparent)',
          }}
        />

        {/* Right Fade */}
        <div
          aria-hidden="true"
          className="
            absolute
            right-0
            top-0
            bottom-0
            w-16
            sm:w-24
            lg:w-32
            z-10
            pointer-events-none
          "
          style={{
            background:
            'linear-gradient(to left, #f7fafd, transparent)',
          }}
        />

        {/* Marquee */}
        <div
          className={`
            flex
            items-start
            w-max
            marquee-track
            ${
              td.autoplay === false
                ? 'marquee-paused'
                : ''
            }
          `}
          style={{
            animationDuration: `${td.speed ?? 35}s`,
          }}
          aria-label="Technologies and platforms we build with"
        >
          {doubled.map((item, index) => (
            <TechItem
              key={`${item.name}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}