const variants = {
  h1: 'text-h1 text-primary font-bold',
  h2: 'text-h2 text-primary font-semibold',
  h3: 'text-h3 text-primary font-medium',

  highlight: 'text-highlight text-accent font-bold',

  bodyLg: 'text-bodyLg text-primary',
  bodyMd: 'text-bodyMd text-primary',

  label: 'text-label text-primary font-inter',
  link: 'text-link text-link underline cursor-pointer',
};

export default function Typography({
  as: Tag = 'p', // 🔥 allows h1, h2, p etc
  variant = 'bodyLg',
  children,
  className = '',
}) {
  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
}
