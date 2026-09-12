import SectionHeading from '@/components/ui/SectionHeading';

export default function SvcTable({ data }) {
  if (!data) return null;
  const { heading, headers, rows } = data;
  if (!headers?.length || !rows?.length) return null;

  return (
    <section className="section-py bg-[var(--surface-soft)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {heading && (
          <SectionHeading heading={heading} align="center" className="mb-10" />
        )}

        {/* Horizontally scrollable on mobile */}
        <div className="overflow-x-auto rounded-2xl border border-[var(--border-light)] shadow-sm">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-[var(--primary)]">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="px-5 py-4 text-left text-[var(--text-white)] font-bold text-xs uppercase tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-light)] bg-[var(--surface)]">
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="hover:bg-[var(--primary-light)]/30 transition-colors duration-150"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-5 py-4 text-[var(--text-secondary)] leading-relaxed align-top ${
                        ci === 0 ? 'font-semibold text-[var(--text-primary)]' : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
