'use client';

import { useState } from 'react';
import servicesData from '@/data/services.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const { developmentServices: ds } = servicesData;

export default function DevelopmentServices() {
  const [activeTab, setActiveTab] = useState(ds?.tabs?.[0]?.id ?? '');

  if (!ds?.enabled) return null;

  const activeData = ds.tabs.find((t) => t.id === activeTab) ?? ds.tabs[0];

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
          {/* Tab pills — desktop inline with heading */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {ds.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[var(--primary)] text-[var(--text-white)] shadow-sm'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border-light)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
                }`}
              >
                <Icon name={tab.icon} size={15} />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab pills — mobile (scrollable row) */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-3 mb-8 -mx-1 px-1 scrollbar-none">
          {ds.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[var(--primary)] text-[var(--text-white)] shadow-sm'
                  : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border-light)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
              }`}
            >
              <Icon name={tab.icon} size={15} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Service cards grid */}
        {activeData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeData.items.map((item, i) => (
              <div
                key={i}
                className="group bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-6 hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 card-lift"
              >
                {/* Icon circle */}
                <div className="w-11 h-11 rounded-xl bg-[var(--primary-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--primary)] transition-colors duration-200">
                  <Icon
                    name={item.icon}
                    size={18}
                    className="text-[var(--primary)] group-hover:text-white transition-colors duration-200"
                  />
                </div>

                <h3 className="text-[var(--text-primary)] font-bold text-[15px] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {item.name}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
