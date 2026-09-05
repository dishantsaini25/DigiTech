# Implementation Notes

Project: Promfly Frontend Clone
Date: August 2026
Build Status: ✅ PASSED (25 routes, 0 errors, 0 warnings)

---

## Routes Not Implemented (404 on Live Site)

| Route | Reason |
|-------|--------|
| `/faqs` | Returns HTTP 404 on live Promfly website |
| `/services/local-seo` | Returns HTTP 404 on live Promfly website |
| `/services/ui-ux-design` | Returns HTTP 404 on live Promfly website |
| `/services/google-ads` | Redirects to `/services` on live site — covered by /services page |

These were verified via direct fetch. None were implemented to avoid fake routes.

---

## Deviations From Original (With Justification)

| Item | Original | Clone | Reason |
|------|----------|-------|--------|
| `/services/mobile-app-development` | 404 on live site | ✅ Implemented | The homepage prominently features App Development (hero, Mobility Solutions section, core services grid). A 404 would break all internal links. Implemented as a full service page consistent with the site's content. |
| Blog posts | Shows 3rd-party redirect content on live site | ✅ Implemented as static blog listing | The `/blogs` route exists and is linked from footer. Implemented with representative blog cards. In production, these would connect to a CMS. |
| Client logos | Original uses actual client logo images | Gradient initial badges | Client logo images are not publicly available for reproduction. Initial badges maintain the visual pattern. |
| Accreditation badges | Original uses badge images | Colour-coded letter badges | Accreditation badge images not publicly available. Colour-coded abbreviation badges preserve the visual layout. |
| Google Maps embed | Original has embedded map | Styled placeholder div | Cannot embed Google Maps without an API key in a frontend-only project. |
| Social profile links | Full profile URLs | Root domain URLs | Actual profile URLs not publicly confirmed; root domain links used as safe defaults. |

---

## Technical Decisions

### Next.js Version
- Next.js 16.3.2 (latest at time of build)
- App Router used throughout
- `await params` pattern used in dynamic routes per new Next.js 16 docs
- All interactive components marked `'use client'`
- Server Components used for all static/layout components

### Tailwind CSS Version
- Tailwind CSS v4 via `@import "tailwindcss"` (not legacy `@tailwind` directives)
- Custom design tokens defined in `globals.css` as CSS variables
- Utility classes: `.hero-bg`, `.gradient-text`, `.cta-bg`, `.card-hover`, `.dot-grid`, `.wave-bottom`

### Component Architecture
```
components/
├── layout/          Header, NavDropdown, MobileMenu, Footer
├── common/          SectionHeading, ServiceCard, CTASection, FAQ,
│                    TestimonialCard, StatsSection, ContactForm,
│                    JobApplicationForm, LegalPage
├── sections/        HeroSection, CoreServicesSection, QuotationBanner,
│                    TechnologiesSection, ClientsSection, IndustriesSection,
│                    HowWeHelpSection, AccreditationsSection,
│                    TestimonialsSection, FAQSection, MobilitySolutionsSection
└── services/        ServiceHero, ServiceFeatures, ServiceWhyUs,
                     ServiceTechStack, ServiceProcess, ServiceStats
```

### Data Architecture
```
data/
├── navigation.js    navLinks, footerServiceLinks, footerCompanyLinks,
│                    footerLegalLinks, socialLinks
├── services.js      allServices (11 full service objects), homeServices (6)
├── testimonials.js  15 testimonials (all from live site)
├── clients.js       29 clients, 14 technologies, 21 industries
└── faqs.js          homeFaqs (6), careerFaqs (3)
```

### Forms
- All forms are frontend-only (no backend)
- Client-side validation with field-level error messages
- Success state shown on submit (no API call)
- ContactForm: name, email, phone, company, service, budget, message
- JobApplicationForm: name, email, phone, position, experience, portfolio, message

### Real Contact Information
- Phone: +91 7303881503 (from live privacy/terms pages)
- Email: info@promfly.com (from live privacy/terms pages)
- Location: Delhi NCR, India

---

## Known Limitations

1. **No actual images** — The original site uses real client photos, hero illustrations, and team images. This clone uses CSS gradients and placeholder visuals. To add images, place them in `/public/images/` and update components.

2. **Blog posts are static** — The blog listing shows 6 representative posts. In production, connect to a CMS (Sanity, Contentful, or Strapi).

3. **No form submission backend** — Forms show a success state on submit but do not send emails. Add an API route or service (Resend, EmailJS) to wire up actual submission.

4. **No analytics** — No Google Analytics, Meta Pixel, or MS Clarity integration. Add these to `app/layout.js` as needed.

---

## Build Output Summary

```
Route (app)                          Size    Type
/                                    Static
/_not-found                          Static
/about                               Static
/blogs                               Static
/cancellation-policy                 Static
/careers                             Static
/contact                             Static
/pricing-policy                      Static
/privacy-policy                      Static
/refund-policy                       Static
/services                            Static
/services/[slug]
  /services/website-development      SSG
  /services/mobile-app-development   SSG
  /services/crm-development          SSG
  /services/cms-development          SSG
  /services/shopify-development      SSG
  /services/theme-development        SSG
  /services/digital-marketing        SSG
  /services/seo                      SSG
  /services/social-media-marketing   SSG
  /services/graphic-design           SSG
  /services/content-writing          SSG
/terms-and-conditions                Static

Total: 25 routes | Build: PASSED | Errors: 0
```
