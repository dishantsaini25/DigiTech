export default function SvcTextBlock({ data }) {
  if (!data) return null;
  const { heading, text } = data;
  if (!heading && !text) return null;

  return (
    <section className="section-py bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-8 sm:p-10">
          {heading && (
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-5 leading-tight">
              {heading}
            </h2>
          )}
          {text && (
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              {text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
