'use client';

import Image from 'next/image';

import clientsData from '@/data/clients.json';
import SectionHeading from '@/components/ui/SectionHeading';

const { clients: cd } = clientsData;

/* Filter enabled items + apply limit */
function getItems(items = [], limit) {
  const filtered = items.filter((item) => item.enabled !== false);

  return limit ? filtered.slice(0, limit) : filtered;
}

/* Single Client Card */
function ClientCard({ item }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        shrink-0
        w-[220px]
        sm:w-[240px]
        lg:w-[240px]
        mx-3
        group
      "
    >
      {/* Logo Box */}
      <div
        className="
          w-full
          h-[100px]
          sm:h-[110px]
          rounded-xl
          border
          border-[var(--border-light)]
          bg-[var(--surface)]
          flex
          items-center
          justify-center
          px-5
          py-4
          overflow-hidden
          transition-all
          duration-300
          group-hover:border-[var(--primary)]
          group-hover:bg-[var(--surface-soft)]
        "
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.name} logo`}
            width={220}
            height={100}
            className="
              max-w-full
              max-h-full
              w-auto
              h-auto
              object-contain
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        ) : (
          <span
            className="
              text-white
              font-bold
              text-lg
              text-center
            "
          >
            {item.name}
          </span>
        )}
      </div>

      {/* Client Name */}
      <p
        className="
          mt-3
          text-sm
          sm:text-base
          font-medium
          text-[var(--text-secondary)]
          text-center
          leading-snug
          transition-colors
          duration-300
          group-hover:text-[var(--primary)]
        "
      >
        {item.name}
      </p>
    </div>
  );
}

export default function Clients() {
  /* Section disabled from JSON */
  if (!cd?.enabled) return null;

  /* Enabled items + limit */
  const items = getItems(cd.items, cd.limit);

  /* Nothing to display */
  if (!items.length) return null;

  /* Duplicate for seamless marquee */
  const doubled = [...items, ...items];

  return (
    <section
      className="
        section-py
        section-bg-clients
        overflow-hidden
      "
    >
      {/* Section Heading */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          mb-10
          sm:mb-12
        "
      >
        <SectionHeading
          badge={cd.badge}
          heading={cd.heading}
          headingAccent={cd.headingAccent}
          subheading={cd.subheading}
          align="center"
        />
      </div>

      {/* Client Marquee */}
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
              'linear-gradient(to right, #eef4fb, transparent)',
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
              'linear-gradient(to left, #eef4fb, transparent)',
          }}
        />

        {/* Marquee Track */}
        <div
          className={`
            flex
            items-start
            w-max
            marquee-track
            ${
              cd.autoplay === false
                ? 'marquee-paused'
                : ''
            }
          `}
          style={{
            animationDuration: `${cd.speed ?? 45}s`,
          }}
          aria-label="Our clients"
        >
          {doubled.map((item, index) => (
            <ClientCard
              key={`${item.name}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}