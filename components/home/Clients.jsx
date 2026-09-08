'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import clientsData from '@/data/clients.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Slider from '@/components/ui/Slider';

const { clients: cd } = clientsData;

function getItems(items = [], limit) {
  const filtered = items.filter((item) => item.enabled !== false);

  return limit ? filtered.slice(0, limit) : filtered;
}

function ClientCard({ item }) {
  return (
    <div className="group w-full">
      <div
        className="
          flex items-center justify-center
          w-full
          h-[90px]
          sm:h-[100px]
          px-5
          rounded-2xl
          bg-[var(--surface)]
          border border-[var(--border-light)]
          transition-all duration-300
          group-hover:border-[var(--primary)]
          group-hover:shadow-md
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
              max-h-[55px]
              w-auto
              h-auto
              object-contain
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        ) : (
          <span
            className="
              text-[var(--text-secondary)]
              font-bold
              text-lg
              text-center
            "
          >
            {item.name}
          </span>
        )}
      </div>
    </div>
  );
}

function ClientRow({ items, reverse = false }) {
  if (!items.length) return null;

  return (
    <Slider
      slidesPerView={1.5}
      spaceBetween={16}
      speed={5000}
      freeMode
      autoplay={cd.autoplay !== false}
      loop
      reverseDirection={reverse}
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 36,
        },
      }}
      className="clients-slider"
    >
      {items.map((item, index) => (
        <SwiperSlide key={`${item.name}-${index}`}>
          <ClientCard item={item} />
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export default function ClientLogos() {
  if (!cd?.enabled) return null;

  const items = getItems(cd.items, cd.limit);

  if (!items.length) return null;

  /*
    Divide clients into 3 rows.
    10 items per row gives a good continuous flow
    for the current client list.
  */
  const row1 = items.slice(0, 10);
  const row2 = items.slice(10, 20);
  const row3 = items.slice(20, 30);

  return (
    <section
      className="
        section-py
        section-bg-clients
        overflow-hidden
      "
    >
      {/* Heading */}
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
          heading="Brands We've"
          headingAccent="Worked With"
          subheading={cd.subheading}
        />
      </div>

      {/* Sliders */}
      <div className="relative w-full space-y-5 sm:space-y-6">

        {/* Left Fade */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-0
            top-0
            bottom-0
            w-12
            sm:w-20
            lg:w-32
            z-10
            pointer-events-none
          "
          style={{
            background:
              'linear-gradient(to right, var(--surface-soft), transparent)',
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
            w-12
            sm:w-20
            lg:w-32
            z-10
            pointer-events-none
          "
          style={{
            background:
              'linear-gradient(to left, var(--surface-soft), transparent)',
          }}
        />

        {/* Row 1 → */}
        <ClientRow items={row1} />

        {/* Row 2 ← */}
        <ClientRow
          items={row2}
          reverse
        />

        {/* Row 3 → */}
        <ClientRow items={row3} />

      </div>
    </section>
  );
}