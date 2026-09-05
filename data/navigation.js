// Navigation structure — matches actual Promfly website navigation
export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      // Development
      {
        group: 'Development',
        items: [
          { label: 'Website Development', href: '/services/website-development', desc: 'Custom, responsive & e-commerce websites' },
          { label: 'App Development', href: '/services/mobile-app-development', desc: 'iOS, Android & cross-platform apps' },
          { label: 'CRM Development', href: '/services/crm-development', desc: 'Custom CRM systems & automation' },
          { label: 'CMS Development', href: '/services/cms-development', desc: 'Flexible content management systems' },
          { label: 'Shopify Development', href: '/services/shopify-development', desc: 'Premium Shopify stores & themes' },
          { label: 'Theme Development', href: '/services/theme-development', desc: 'WordPress, Shopify & Magento themes' },
        ],
      },
      // Marketing
      {
        group: 'Marketing',
        items: [
          { label: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Full-funnel digital campaigns' },
          { label: 'SEO Services', href: '/services/seo', desc: 'Rank higher, drive organic traffic' },
          { label: 'Social Media Marketing', href: '/services/social-media-marketing', desc: 'Grow your brand on all platforms' },
          { label: 'Graphic Design', href: '/services/graphic-design', desc: 'Logos, branding & visual identity' },
          { label: 'Content Writing', href: '/services/content-writing', desc: 'SEO content that ranks & converts' },
        ],
      },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const footerServiceLinks = [
  { label: 'Digital Marketing & Web Development Agency', href: '/services' },
  { label: 'Search Engine Optimization (SEO) Services', href: '/services/seo' },
  { label: 'Digital Marketing Agency in Delhi NCR', href: '/services/digital-marketing' },
  { label: 'Website Development Services', href: '/services/website-development' },
  { label: 'Mobile App Development Services', href: '/services/mobile-app-development' },
  { label: 'CRM Development Solutions', href: '/services/crm-development' },
  { label: 'Shopify Store Development', href: '/services/shopify-development' },
  { label: 'CMS Development Solutions', href: '/services/cms-development' },
  { label: 'Graphic Design & Branding Services', href: '/services/graphic-design' },
  { label: 'Social Media Marketing Services', href: '/services/social-media-marketing' },
  { label: 'Responsive Theme Development Services', href: '/services/theme-development' },
  { label: 'Full Stack Website Development', href: '/services/website-development' },
];

export const footerCompanyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
];

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Pricing Policy', href: '/pricing-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/promfly/', icon: 'instagram' },
  { label: 'Facebook',  href: 'https://www.facebook.com/promfly/',  icon: 'facebook'  },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/promfly/', icon: 'linkedin' },
  { label: 'Twitter',   href: 'https://twitter.com/promfly',         icon: 'twitter'  },
  { label: 'YouTube',   href: 'https://www.youtube.com/@promfly',    icon: 'youtube'  },
];
