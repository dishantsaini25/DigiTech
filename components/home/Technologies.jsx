'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import techData from '@/data/technologies.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Slider from '@/components/ui/Slider';

const { technologies: td } = techData;

function getItems(items = [], limit) {
  const filtered = items.filter((item) => item.enabled !== false);

  return limit ? filtered.slice(0, limit) : filtered;
}

function TechItem({ item }) {
  return (
    <div className="flex flex-col items-center justify-center group w-full">
      <div
        className="
          w-12 h-12
          sm:w-14 sm:h-14
          flex items-center justify-center
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
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-[var(--primary)] font-bold text-lg">
            {item.name.substring(0, 2).toUpperCase()}
          </span>
        )}
      </div>

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
  if (!td?.enabled) return null;

  const items = getItems(td.items, td.limit);

  if (!items.length) return null;

  return (
    <section className="section-py section-bg-technologies overflow-hidden">

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

      {/* Slider */}
      <div className="relative w-full">

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

        <Slider
          slidesPerView={2}
          spaceBetween={20}
          speed={5000}
          freeMode
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 36,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
          }}
          className="technologies-slider"
        >
          {items.map((item, index) => (
            <SwiperSlide key={`${item.name}-${index}`}>
              <TechItem item={item} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}