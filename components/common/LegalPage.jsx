export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <div className="bg-[var(--primary-dark)] pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-white)] mb-3">{title}</h1>
          {lastUpdated && (
            <p className="text-[var(--primary-light)]/60 text-sm">Last Updated: {lastUpdated}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border-light)] shadow-sm p-8 sm:p-10 prose prose-sm max-w-none
          prose-headings:text-[var(--text-primary)] prose-headings:font-bold
          prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed
          prose-li:text-[var(--text-secondary)]
          prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[var(--text-primary)]">
          {children}
        </div>
      </div>
    </div>
  );
}
