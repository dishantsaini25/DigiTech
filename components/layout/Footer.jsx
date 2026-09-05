import Link from 'next/link';
import Image from 'next/image';
import footerData from '@/data/footer.json';

import {
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';

const { footer } = footerData;

const socialIconMap = {
  instagram: FiInstagram,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  facebook: FiFacebook,
  youtube: FiYoutube,
};

/* Only render if footer.enabled */
export default function Footer() {
  if (!footer.enabled) return null;

  const enabledQuickLinks = footer.quickLinks.filter(
    (l) => l.enabled
  );

  const enabledServices = footer.services.filter(
    (l) => l.enabled
  );

  const enabledSocialLinks = footer.socialLinks.filter(
    (l) => l.enabled
  );

  return (
    <footer className="bg-[var(--accent-light)] text-[#0B100E]">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* =================================================
              BRAND
          ================================================== */}
          <div className="sm:col-span-2 lg:col-span-1">

            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center mb-5"
            >
              <Image
                src="/logo.png"
                alt="DigiTech"
                width={220}
                height={90}
                className="
                  w-[165px]
                  sm:w-[175px]
                  h-auto
                  object-contain
                "
              />
            </Link>

            {/* Description */}
            <p className="
              text-sm
              text-[var(--text-primary)]/70
              leading-relaxed
              mb-5
              max-w-xs
            ">
              {footer.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">

              {enabledSocialLinks.map((s) => {
                const Icon = socialIconMap[s.platform];

                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="
                      w-9
                      h-9
                      rounded-lg
                      bg-white/10
                      hover:bg-[var(--accent)]
                      flex
                      items-center
                      justify-center
                      text-[var(--text-primary)]
                      hover:text-[var(--primary-dark)]
                      transition-all
                      duration-200
                    "
                  >
                    {Icon && <Icon size={15} />}
                  </a>
                );
              })}

            </div>
          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>

            <h3 className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-[var(--text-primary)]
              mb-5
            ">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {enabledQuickLinks.map((link) => (
                <li key={link.href}>

                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--text-primary)]/70
                      hover:text-[var(--accent)]
                      transition-colors
                      duration-150
                    "
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>
          </div>


          {/* =================================================
              SERVICES
          ================================================== */}
          <div>

            <h3 className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-[var(--text-primary)]
              mb-5
            ">
              Services
            </h3>

            <ul className="space-y-3">

              {enabledServices.map((link) => (
                <li key={link.href}>

                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-[var(--text-primary)]/70
                      hover:text-[var(--accent)]
                      transition-colors
                      duration-150
                    "
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>
          </div>


          {/* =================================================
              CONTACT
          ================================================== */}
          <div>

            <h3 className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-[var(--text-primary)]
              mb-5
            ">
              Contact Us
            </h3>

            <ul className="space-y-4">

              {/* Email */}
              <li className="flex items-start gap-3">

                <FiMail
                  size={15}
                  className="
                    text-[var(--text-primary)]
                    mt-0.5
                    shrink-0
                  "
                />

                <a
                  href={`mailto:${footer.contact.email}`}
                  className="
                    text-sm
                    text-[var(--text-primary)]/70
                    hover:text-[var(--accent)]
                    transition-colors
                    break-all
                  "
                >
                  {footer.contact.email}
                </a>

              </li>


              {/* Phone */}
              <li className="flex items-start gap-3">

                <FiPhone
                  size={15}
                  className="
                    text-[var(--text-primary)]
                    mt-0.5
                    shrink-0
                  "
                />

                <a
                  href={`tel:${footer.contact.phone.replace(/\s/g, '')}`}
                  className="
                    text-sm
                    text-[var(--text-primary)]/70
                    hover:text-[var(--accent)]
                    transition-colors
                  "
                >
                  {footer.contact.phone}
                </a>

              </li>


              {/* Address */}
              <li className="flex items-start gap-3">

                <FiMapPin
                  size={15}
                  className="
                    text-[var(--text-primary)]
                    mt-0.5
                    shrink-0
                  "
                />

                <span className="
                  text-sm
                  text-[var(--text-primary)]/70
                ">
                  {footer.contact.address}
                </span>

              </li>

            </ul>
          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div className="h-px bg-black/10 mb-8" />


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-3
        ">

          {/* Copyright */}
          <p className="
            text-xs
            text-[var(--text-primary)]/50
          ">
            {footer.copyright}
          </p>


          {/* Legal Links */}
          <div className="flex items-center gap-5">

            <Link
              href="/privacy-policy"
              className="
                text-xs
                text-[var(--text-primary)]/50
                hover:text-[var(--accent)]
                transition-colors
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="
                text-xs
                text-[var(--text-primary)]/50
                hover:text-[var(--accent)]
                transition-colors
              "
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}