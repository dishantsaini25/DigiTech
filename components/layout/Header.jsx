'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navData from '@/data/navigation.json';
import MobileMenu from './MobileMenu';

const { nav } = navData;
const enabledLinks = nav.links.filter((l) => l.enabled);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? 'bg-[var(--surface)] shadow-sm border-b border-[var(--border-light)]'
              : 'bg-[var(--background)]/90 backdrop-blur-sm'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex items-center justify-between h-[76px]">

            {/* =================================================
                LOGO
            ================================================== */}
            <Link
              href="/"
              className="
                flex items-center
                shrink-0
                leading-none
              "
            >
              <Image
                src="/logo.png"
                alt="DigiTech"
                width={220}
                height={90}
                className="
                  w-[180px]
                  sm:w-[190px]
                  lg:w-[200px]
                  h-auto
                  object-contain
                "
                priority
              />
            </Link>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {enabledLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-[var(--text-secondary)]
                    hover:text-[var(--primary)]
                    hover:bg-[var(--primary-light)]
                    rounded-lg
                    transition-all
                    duration-150
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>


            {/* =================================================
                CTA + MOBILE MENU BUTTON
            ================================================== */}
            <div className="flex items-center gap-3">

              {/* Start a Project */}
              {nav.ctaButton && (
                <Link
                  href={nav.ctaButton.href}
                  className="
                    hidden
                    sm:inline-flex
                    items-center
                    justify-center
                    px-5
                    py-2.5
                    rounded-lg
                    btn-primary
                    text-sm
                    font-semibold
                    shadow-sm
                    hover:shadow-md
                    transition-all
                    duration-200
                  "
                >
                  {nav.ctaButton.label}
                </Link>
              )}


              {/* =================================================
                  MOBILE HAMBURGER
              ================================================== */}
              <button
                type="button"
                className="
                  lg:hidden
                  flex
                  flex-col
                  justify-center
                  items-center
                  w-10
                  h-10
                  rounded-lg
                  hover:bg-[var(--surface-soft)]
                  transition-colors
                "
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={
                  mobileOpen
                    ? 'Close menu'
                    : 'Open menu'
                }
                aria-expanded={mobileOpen}
              >

                {/* Top line */}
                <span
                  className={`
                    block
                    w-5
                    h-0.5
                    bg-[var(--text-primary)]
                    rounded
                    transition-all
                    duration-250
                    ${
                      mobileOpen
                        ? 'rotate-45 translate-y-[7px]'
                        : ''
                    }
                  `}
                />

                {/* Middle line */}
                <span
                  className={`
                    block
                    w-5
                    h-0.5
                    bg-[var(--text-primary)]
                    rounded
                    my-1.5
                    transition-all
                    duration-250
                    ${
                      mobileOpen
                        ? 'opacity-0'
                        : ''
                    }
                  `}
                />

                {/* Bottom line */}
                <span
                  className={`
                    block
                    w-5
                    h-0.5
                    bg-[var(--text-primary)]
                    rounded
                    transition-all
                    duration-250
                    ${
                      mobileOpen
                        ? '-rotate-45 -translate-y-[7px]'
                        : ''
                    }
                  `}
                />

              </button>

            </div>

          </div>
        </div>
      </header>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={enabledLinks}
        ctaButton={nav.ctaButton}
      />
    </>
  );
}