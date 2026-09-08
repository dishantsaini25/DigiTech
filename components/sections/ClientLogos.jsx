'use client';

import Image from 'next/image';

import clientsData from '@/data/clients.json';
import SectionHeading from '@/components/ui/SectionHeading';

const { clients: cd } = clientsData;

function getItems(items = [], limit) {
  const filtered = items.filter((item) => item.enabled !== false);

  return limit ? filtered.slice(0, limit) : filtered;
}

function ClientCard({ item }) {
  return (
    <div className="group">
      <div
        className="
          flex items-center justify-center
          w-full
          h-24
          sm:h-28
          rounded-2xl
          bg-[var(--surface)]
          border border-[var(--border-light)]
          px-5
          transition-all duration-300
          hover:border-[var(--primary)]
          hover:shadow-md
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
              max-h-14
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
              text-lg
              font-bold
              text-center
              text-[var(--text-secondary)]
            "
          >
            {item.name}
          </span>
        )}
      </div>

      <p
        className="
          mt-3
          text-sm
          font-medium
          text-center
          text-[var(--text-secondary)]
          transition-colors duration-300
          group-hover:text-[var(--primary)]
        "
      >
        {item.name}
      </p>
    </div>
  );
}

export default function ClientLogos() {
  if (!cd?.enabled) return null;

  const items = getItems(cd.items, cd.limit);

  if (!items.length) return null;

  /*
    Maximum 3 rows.
    Items are divided equally between the 3 rows.
  */
  const rows = [
    items.filter((_, index) => index % 3 === 0),
    items.filter((_, index) => index % 3 === 1),
    items.filter((_, index) => index % 3 === 2),
  ];

  return (
    <section className="section-py section-bg-clients overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <SectionHeading
            badge={cd.badge}
            heading="Brands We've"
            headingAccent="Worked With"
            subheading={cd.subheading}
          />
        </div>

        {/* 3 Rows */}
        <div className="space-y-5 sm:space-y-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
                gap-4
                sm:gap-5
                lg:gap-6
              "
            >
              {row.map((item, index) => (
                <ClientCard
                  key={`${item.name}-${index}`}
                  item={item}
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}