function getInitials(name = '') {
  return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export default function TestimonialCard({ name, role, company, text, review, rating = 5 }) {
  const quote = text ?? review ?? '';

  return (
    <div className="bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-7 flex flex-col h-full hover:shadow-md hover:border-[var(--primary)] transition-all duration-200">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14"
            fill={i < rating ? 'var(--gold)' : 'var(--border)'} aria-hidden="true">
            <path d="M7 1l1.6 3.2L12 4.7l-2.5 2.5.6 3.5L7 9.2 3.9 10.7l.6-3.5L2 4.7l3.4-.5L7 1z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mb-5">
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic">"{quote}"</p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-light)]">
        <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center shrink-0 font-black text-sm text-[var(--primary)]">
          {getInitials(name)}
        </div>
        <div>
          <p className="text-[var(--text-primary)] font-bold text-sm leading-tight">{name}</p>
          <p className="text-[var(--text-muted)] text-xs mt-0.5">
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}
