import Link from 'next/link';

// "Project Quotation" banner — shown on homepage between hero and technologies
export default function QuotationBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
          <div className="relative">
            <p className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-1">
              Project Quotation
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get Your Project Quotation
            </h2>
            <p className="text-purple-300 text-sm mt-2 flex items-center gap-2">
              <span className="text-yellow-300">⚡</span>
              Response within 2 business hours · Professional consultation
            </p>
          </div>
          <Link
            href="/contact"
            className="relative shrink-0 px-8 py-3.5 bg-white text-purple-700 font-bold rounded-xl hover:bg-yellow-50 transition-colors shadow-lg text-sm whitespace-nowrap"
          >
            Get a Quote Now
          </Link>
        </div>
      </div>
    </section>
  );
}
