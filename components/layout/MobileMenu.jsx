'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu({ isOpen, onClose, links = [], ctaButton }) {
  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[var(--text-primary)]/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[280px] max-w-[85vw] z-50 bg-[var(--surface)] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-[var(--border-light)] shrink-0">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image src="/logo.png" alt="DIGITECH" width={120} height={36} className="h-8 w-auto object-contain" />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--surface-soft)] transition-colors text-[var(--text-muted)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3 text-[var(--text-secondary)] font-medium text-sm rounded-xl hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {ctaButton && (
          <div className="px-6 pb-8 pt-4 border-t border-[var(--border-light)] shrink-0">
            <Link
              href={ctaButton.href}
              onClick={onClose}
              className="block w-full text-center py-3.5 rounded-xl btn-primary font-semibold text-sm shadow-sm"
            >
              {ctaButton.label}
            </Link>
            <p className="text-center text-[var(--text-muted)] text-xs mt-3">
              We respond within 2 business hours
            </p>
          </div>
        )}
      </div>
    </>
  );
}
