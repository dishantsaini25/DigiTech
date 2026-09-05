'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

export default function NavDropdown({ link }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 rounded-lg hover:bg-purple-50 transition-colors duration-150"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {link.label}
        <FiChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Mega dropdown panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 transition-all duration-200 origin-top ${
          open
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="p-5 grid grid-cols-2 gap-6">
          {link.dropdown.map((group) => (
            <div key={group.group}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">
                {group.group}
              </p>
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-purple-50 group transition-colors duration-150"
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                      {item.label}
                    </span>
                    {item.desc && (
                      <span className="text-xs text-gray-400 mt-0.5 group-hover:text-purple-400 transition-colors">
                        {item.desc}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer bar */}
        <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Explore all our services
          </span>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="text-xs font-bold text-purple-600 hover:text-purple-800 transition-colors"
          >
            View all services →
          </Link>
        </div>
      </div>
    </div>
  );
}
