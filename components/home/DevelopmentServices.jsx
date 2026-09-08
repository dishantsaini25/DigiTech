'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import servicesData from '@/data/services.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const { developmentServices: ds } = servicesData;

export default function DevelopmentServices() {
  const [activeTab, setActiveTab] = useState(ds?.tabs?.[0]?.id ?? '');

  if (!ds?.enabled) return null;

  const activeData =
    ds.tabs.find((tab) => tab.id === activeTab) ?? ds.tabs[0];

  return (
    <section className="section-py section-bg-services">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            badge={ds.badge}
            heading={ds.heading}
            headingAccent={ds.headingAccent}
            subheading={ds.subheading}
          />

          {/* Desktop Tabs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {ds.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2
                  px-4 py-2.5
                  rounded-xl
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? 'bg-[var(--primary)] text-[var(--text-white)] shadow-sm'
                      : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border-light)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
                  }
                `}
              >
                <Icon name={tab.icon} size={15} />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-3 mb-8 -mx-1 px-1 scrollbar-none">
          {ds.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                text-sm font-semibold
                whitespace-nowrap
                shrink-0
                transition-all duration-200
                ${
                  activeTab === tab.id
                    ? 'bg-[var(--primary)] text-[var(--text-white)] shadow-sm'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border-light)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
                }
              `}
            >
              <Icon name={tab.icon} size={15} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        {activeData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeData.items.map((item) => (
              <article
                key={item.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-[var(--surface)]
                  border border-[var(--border-light)]
                  transition-all duration-300
                  hover:border-[var(--primary)]
                  hover:shadow-lg
                  card-lift
                "
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="
                      text-[var(--text-primary)]
                      font-bold
                      text-xl
                      mb-3
                      transition-colors
                      group-hover:text-[var(--primary)]
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      text-[var(--text-muted)]
                      text-sm
                      leading-relaxed
                      min-h-[68px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* Know More */}
                  <Link
                    href={`/services/${item.id}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-5
                      text-sm
                      font-semibold
                      text-[var(--primary)]
                      transition-all duration-200
                      group-hover:gap-3
                    "
                  >
                    Know More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}