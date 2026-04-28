// ✅ All variants now use theme-defined class names
const variants = {
  h1: 'text-[5.7rem] text-primary font-bold',
  h2: 'text-[3rem] text-primary font-semibold',
  h3: 'text-[2.25rem] text-primary font-medium',

  highlight: 'text-[5.7rem] text-accent font-bold',

  bodyLg: 'text-[1.125rem] text-primary',
  bodyMd: 'text-[1rem] text-primary',

  label: 'text-[1rem] text-primary',
  link: 'text-[1rem] text-link underline cursor-pointer',
};

export default function Typography({
  as: Tag = 'p',
  variant = 'bodyLg',
  children,
  className = '',
}) {
  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
}
