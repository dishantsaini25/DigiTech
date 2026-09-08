'use client';

import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import testimonialsData from '@/data/testimonials.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Slider from '@/components/ui/Slider';

const { testimonials: td } = testimonialsData;

function getItems(items = [], limit) {
  const filtered = items.filter((item) => item.enabled !== false);

  return limit ? filtered.slice(0, limit) : filtered;
}

function StarRating({ rating }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < rating ? 'var(--gold)' : 'var(--border)'}
          aria-hidden="true"
        >
          <path d="M7 1l1.6 3.2L12 4.7l-2.5 2.5.6 3.5L7 9.2 3.9 10.7l.6-3.5L2 4.7l3.4-.5L7 1z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function TestimonialCard({ item, expanded, onToggle }) {
  return (
    <article
      className="
        h-full
        bg-[var(--surface)]
        border
        border-[var(--border-light)]
        rounded-2xl
        p-7
        flex
        flex-col
        gap-5
      "
    >
      {/* Stars */}
      <StarRating rating={item.rating} />

      {/* Quote */}
      <blockquote className="flex-1">
        <div>
          <p
            className={`
              text-[var(--text-secondary)]
              text-sm
              leading-relaxed
              italic
              ${expanded ? '' : 'line-clamp-4'}
            `}
          >
            "{item.review}"
          </p>

          {/* More / Less */}
          {item.review?.length > 180 && (
            <button
              type="button"
              onClick={onToggle}
              className="
                mt-2
                text-sm
                font-semibold
                text-[var(--primary)]
                hover:underline
                transition-all
              "
            >
              {expanded ? 'show less' : '... more'}
            </button>
          )}
        </div>
      </blockquote>

      {/* Author */}
      <div
        className="
          flex
          items-center
          gap-3
          pt-4
          border-t
          border-[var(--border-light)]
        "
      >
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-[var(--primary-light)]
            flex
            items-center
            justify-center
            shrink-0
            font-black
            text-sm
            text-[var(--primary)]
          "
        >
          {getInitials(item.name)}
        </div>

        <div>
          <p
            className="
              text-[var(--text-primary)]
              font-bold
              text-sm
              leading-tight
            "
          >
            {item.name}
          </p>

          <p
            className="
              text-[var(--text-muted)]
              text-xs
              mt-0.5
            "
          >
            {item.role}
            {item.company ? `, ${item.company}` : ''}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [expandedReviews, setExpandedReviews] = useState({});

  if (!td?.enabled) return null;

  const items = getItems(td.items, td.limit);

  if (!items.length) return null;

  const toggleReview = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="section-py section-bg-testimonials">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            sm:justify-between
            gap-6
            mb-12
          "
        >
          <SectionHeading
            badge={td.badge}
            heading={td.heading}
            headingAccent={td.headingAccent}
          />
        </div>

        {/* Testimonials Slider */}
   <Slider
  slidesPerView={1}
  spaceBetween={24}
  loop={true}
  autoplay={true}
  speed={5000}
  freeMode={true}
  navigation={false}
  pagination={false}
  breakpoints={{
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  }}
  className="testimonials-slider"
>
  {items.map((item, index) => (
    <SwiperSlide key={`${item.name}-${index}`}>
      <TestimonialCard
        item={item}
        expanded={expandedReviews[index]}
        onToggle={() => toggleReview(index)}
      />
    </SwiperSlide>
  ))}
</Slider>

      </div>
    </section>
  );
}