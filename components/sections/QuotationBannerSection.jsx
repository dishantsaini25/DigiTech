import Link from 'next/link';

// The "Project Quotation" banner shown on homepage
export default function QuotationBannerSection() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-purple-200 text-sm font-medium mb-1">Project Quotation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Your Project Quotation
            </h2>
            <p className="text-purple-300 text-sm mt-2">
              ⚡ Response within 2 business hours · Professional consultation
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3.5 bg-white text-purple-700 font-bold rounded-xl hover:bg-yellow-50 transition-colors shadow-lg text-center"
          >
            Get a Quote Now
          </Link>
        </div>
      </div>
    </section>
  );
}
