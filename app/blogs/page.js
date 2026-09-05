import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/common/CTASection';

export const metadata = {
  title: 'Blog — Web, App & Digital Insights from DIGITECH',
  description:
    'Practical guides, technical deep-dives and industry perspectives from the DIGITECH team — covering web development, mobile apps, e-commerce, UI/UX and digital strategy.',
};

/* Static blog data — in production connect to a headless CMS (Sanity, Contentful, etc.) */
const blogPosts = [
  {
    slug: 'nextjs-performance-tips-2026',
    category: 'Web Development',
    date: 'August 18, 2026',
    readTime: '7 min read',
    title: 'Next.js Performance in 2026: The Techniques That Actually Move the Needle',
    excerpt:
      'From React Server Components and Partial Prerendering to edge caching and image optimisation — a practical breakdown of every technique worth using today.',
    accentColor: 'var(--primary)',
    bgColor: 'var(--primary-light)',
  },
  {
    slug: 'react-native-vs-flutter-2026',
    category: 'App Development',
    date: 'August 8, 2026',
    readTime: '8 min read',
    title: 'React Native vs Flutter in 2026: An Honest Comparison for Decision Makers',
    excerpt:
      'Performance benchmarks, developer experience, ecosystem maturity and real-world project considerations — everything you need to pick the right framework for your next app.',
    accentColor: '#C26840',
    bgColor: 'var(--accent-light)',
  },
  {
    slug: 'shopify-custom-theme-guide',
    category: 'E-Commerce',
    date: 'July 28, 2026',
    readTime: '10 min read',
    title: 'The Complete Guide to Building a Custom Shopify Theme in 2026',
    excerpt:
      'From Liquid templating and sections architecture to performance optimisation and Online Store 2.0 — a step-by-step walkthrough for building production-ready Shopify themes.',
    accentColor: '#9A7A2E',
    bgColor: 'var(--gold-light)',
  },
  {
    slug: 'ux-mistakes-that-kill-conversions',
    category: 'UI/UX Design',
    date: 'July 14, 2026',
    readTime: '6 min read',
    title: '8 UX Mistakes That Are Silently Killing Your Conversion Rate',
    excerpt:
      'Unclear CTAs, form friction, mobile navigation failures, slow loading — an evidence-backed breakdown of the design decisions that send potential customers away.',
    accentColor: 'var(--primary)',
    bgColor: 'var(--primary-light)',
  },
  {
    slug: 'technical-seo-checklist',
    category: 'SEO',
    date: 'July 3, 2026',
    readTime: '9 min read',
    title: 'Technical SEO in 2026: A Comprehensive Audit Checklist for Developers',
    excerpt:
      'Core Web Vitals, crawl budget, structured data, JavaScript rendering, mobile-first indexing and more — the definitive technical SEO checklist every developer needs.',
    accentColor: '#3A5040',
    bgColor: 'var(--surface-soft)',
  },
  {
    slug: 'crm-build-vs-buy',
    category: 'CRM Development',
    date: 'June 20, 2026',
    readTime: '8 min read',
    title: 'Custom CRM vs Off-the-Shelf: How to Make the Right Call for Your Business',
    excerpt:
      'Salesforce, HubSpot and Zoho cover a lot of ground — but when do they stop working for you? A framework for deciding when to build, customise or switch.',
    accentColor: '#C26840',
    bgColor: 'var(--accent-light)',
  },
];

const categories = ['All', 'Web Development', 'App Development', 'E-Commerce', 'UI/UX Design', 'SEO', 'CRM Development'];

export default function BlogsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 bg-[var(--primary-dark)] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-25" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--accent)] opacity-10" />
          <div className="absolute top-14 right-[12%] w-3 h-3 rounded-full bg-[var(--gold)] opacity-70" />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/10 text-[var(--primary-light)]/80 border border-white/15 mb-5">
            DIGITECH Journal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-white)] mb-5 leading-tight">
            Web, App &{' '}
            <span className="text-[var(--accent)]">Digital Insights</span>
          </h1>
          <p className="text-[var(--primary-light)]/70 text-lg max-w-xl mx-auto leading-relaxed">
            Practical guides, technical deep-dives and honest perspectives on building digital products — written by the team at DIGITECH.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 56L1440 56L1440 16C1200 56 900 0 720 14C540 28 240 50 0 16L0 56Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* ── Category filter bar ───────────────────────── */}
      <section className="sticky top-[68px] z-30 bg-[var(--surface)] border-b border-[var(--border-light)] py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-0.5">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 shrink-0 ${
                  i === 0
                    ? 'bg-[var(--primary)] text-[var(--text-white)] shadow-sm'
                    : 'bg-[var(--surface-soft)] text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] border border-[var(--border-light)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog grid ─────────────────────────────────── */}
      <section className="section-py bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl overflow-hidden hover:border-[var(--primary)] hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                {/* Thumbnail */}
                <div
                  className="h-44 flex items-center justify-center relative"
                  style={{ backgroundColor: post.bgColor }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-[var(--text-white)] font-black text-xl shadow-md"
                    style={{ backgroundColor: post.accentColor }}
                  >
                    {post.category.charAt(0)}
                  </div>
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-[var(--text-white)] text-[10px] font-bold rounded-full shadow-sm"
                    style={{ backgroundColor: post.accentColor }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
                    <span className="text-[var(--border)]" aria-hidden="true">·</span>
                    <span className="text-xs text-[var(--text-muted)]">{post.readTime}</span>
                  </div>

                  <h2 className="text-[15px] font-black text-[var(--text-primary)] mb-3 leading-snug group-hover:text-[var(--primary)] transition-colors flex-1">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold mt-auto transition-all duration-150"
                    style={{ color: post.accentColor }}
                  >
                    Read Article
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-14 text-center">
            <button className="px-8 py-3.5 border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold rounded-xl hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] transition-all text-sm">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA strip ──────────────────────── */}
      <section className="bg-[var(--surface-warm)] py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] mb-4">
            Stay in the Loop
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-3 leading-tight">
            New articles every fortnight —{' '}
            <span className="text-[var(--accent)]">no fluff, just signal.</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm mb-7 leading-relaxed max-w-md mx-auto">
            Practical guides, technical deep-dives and honest takes on building digital products — straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 text-sm border border-[var(--border-light)] rounded-xl bg-[var(--surface)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
            />
            <button className="px-6 py-3 bg-[var(--primary)] text-[var(--text-white)] font-bold text-sm rounded-xl hover:bg-[var(--primary-dark)] transition-colors shrink-0 shadow-sm">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <CTASection
        badge="Work With Us"
        title="Turn Insights Into"
        highlight="Action"
        subtitle="Ready to build something? Our team is on hand to help you design, develop and launch your next digital project."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
