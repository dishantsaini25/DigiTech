'use client';

import industriesData from '@/data/industries.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Slider from '@/components/ui/Slider';
import { SwiperSlide } from 'swiper/react';

const { industries: id } = industriesData;

export default function Industries() {
  if (!id?.enabled) return null;

  const items = id.items.filter((item) => item.enabled !== false);

  const middle = Math.ceil(items.length / 2);

  const firstRow = items.slice(0, middle);
  const secondRow = items.slice(middle);

  const renderCard = (industry, i) => (
    <SwiperSlide key={`${industry.name}-${i}`}>
      <div
        className="
          group
          overflow-hidden
          bg-[var(--surface)]
          border border-[var(--border-light)]
          rounded-2xl
          text-center
          hover:border-[var(--primary)]
          hover:shadow-md
          transition-all duration-200
          card-lift
        "
      >
        <div className="flex justify-center pt-5">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-xl">
            <img
              src={industry.image}
              alt={industry.name}
              className="
                w-full
                h-full
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-4">
          <span
            className="
              text-[12px]
              font-semibold
              text-[var(--text-secondary)]
              leading-snug
              group-hover:text-[var(--primary)]
              transition-colors
            "
          >
            {industry.name}
          </span>
        </div>
      </div>
    </SwiperSlide>
  );

  return (
    <section className="section-py section-bg-industries">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            badge={id.badge}
            heading={id.heading}
            headingAccent={id.headingAccent}
            subheading={id.subheading}
          />

          <p className="text-sm text-[var(--text-muted)] shrink-0 hidden lg:block">
            Serving{' '}
            <span className="font-bold text-[var(--text-primary)]">
              {items.length}+
            </span>{' '}
            industries
          </p>
        </div>

        <div className="space-y-4 overflow-hidden">

          {/* Top Row - Left to Right */}
          <Slider
            slidesPerView={2}
            spaceBetween={16}
            loop
            autoplay
            speed={5000}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {firstRow.map(renderCard)}
          </Slider>

          {/* Bottom Row - Right to Left */}
          <Slider
            slidesPerView={2}
            spaceBetween={16}
            loop
            autoplay
            speed={5000}
            reverseDirection
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {secondRow.map(renderCard)}
          </Slider>

        </div>
      </div>
    </section>
  );
}