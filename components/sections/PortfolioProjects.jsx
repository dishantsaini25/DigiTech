'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import portfolioData from '@/data/portfolio.json';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

const { portfolio } = portfolioData;

function ProjectCard({ project }) {
  return (
    <article
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
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((category) => (
            <span
              key={category}
              className="
                px-2.5
                py-1
                rounded-full
                bg-[var(--primary)]/10
                text-[var(--primary)]
                text-xs
                font-semibold
              "
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="
            text-xl
            font-bold
            text-[var(--text-primary)]
            leading-snug
            mb-1
            transition-colors
            group-hover:text-[var(--primary)]
          "
        >
          {project.title}
        </h3>

        {/* Client */}
        <p
          className="
            text-sm
            font-medium
            text-[var(--primary)]
            mb-4
          "
        >
          {project.client}
        </p>

        {/* Description */}
        <p
          className="
            text-sm
            leading-relaxed
            text-[var(--text-secondary)]
            mb-5
          "
        >
          {project.description}
        </p>

        {/* Results */}
        <div className="space-y-2.5 mb-6">
          {project.results.map((result) => (
            <div
              key={result}
              className="
                flex
                items-start
                gap-2.5
                px-3
                py-2.5
                rounded-xl
                bg-[var(--surface-soft)]
              "
            >
              <span
                className="
                  mt-0.5
                  shrink-0
                  text-[var(--primary)]
                "
              >
                ✓
              </span>

              <span
                className="
                  text-xs
                  sm:text-sm
                  leading-relaxed
                  text-[var(--text-secondary)]
                "
              >
                {result}
              </span>
            </div>
          ))}
        </div>

        {/* Live Work */}
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              w-full
              px-5
              py-3
              rounded-xl
              bg-[var(--primary)]
              text-[var(--text-white)]
              text-sm
              font-semibold
              transition-all duration-300
              hover:opacity-90
            "
          >
            View Live Work
            <Icon
              name="external-link"
              size={15}
            />
          </Link>
        )}
      </div>
    </article>
  );
}

export default function PortfolioProjects() {
  const [activeFilter, setActiveFilter] = useState(
    portfolio?.filters?.[0] || 'All'
  );

  const projects = useMemo(() => {
    if (activeFilter === 'All') {
      return portfolio.projects;
    }

    return portfolio.projects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  if (!portfolio?.enabled) return null;

  return (
    <section className="section-py section-bg-services">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-10">
          <SectionHeading
            badge="Our Work"
            heading="Projects We've"
            headingAccent="Built"
            subheading="Explore some of the digital solutions we've created for businesses across different industries."
          />
        </div>

        {/* Filters */}
        <div
          className="
            flex
            items-center
            gap-2
            overflow-x-auto
            pb-3
            mb-10
            scrollbar-none
          "
        >
          {portfolio.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`
                shrink-0
                px-4
                py-2.5
                rounded-xl
                text-sm
                font-semibold
                transition-all duration-200
                ${
                  activeFilter === filter
                    ? 'bg-[var(--primary)] text-[var(--text-white)] shadow-sm'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border-light)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects */}
        {projects.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-5
              lg:gap-6
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              py-16
              text-center
              rounded-2xl
              border border-[var(--border-light)]
              bg-[var(--surface)]
            "
          >
            <p className="text-[var(--text-secondary)]">
              No projects found in this category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}