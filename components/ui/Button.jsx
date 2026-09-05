import Link from 'next/link';

/**
 * Reusable Button / Link button component.
 *
 * Props:
 *  variant  – 'primary' | 'secondary' | 'ghost'   (default: 'primary')
 *  size     – 'sm' | 'md' | 'lg'                  (default: 'md')
 *  href     – if provided renders a Next <Link>, else a <button>
 *  external – opens href in new tab (only relevant when href is set)
 *  children – label / content
 *  className– extra Tailwind classes
 *  ...rest  – forwarded to the underlying element
 */
export default function Button({
  variant   = 'primary',
  size      = 'md',
  href,
  external  = false,
  children,
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 select-none whitespace-nowrap';

  const variants = {
    primary:
      'btn-primary shadow-sm active:scale-[0.98]',
    secondary:
      'bg-transparent text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary-light)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--primary)] active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const cls = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`;

  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <Link href={href} className={cls} {...linkProps} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
