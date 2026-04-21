// ✅ All variants now use theme-defined class names
const variants = {
  h1: 'text-92px text-primary font-bold',
  h2: 'text-48px text-primary font-semibold',
  h3: 'text-36px text-primary font-medium',

  highlight: 'text-92px text-accent font-bold',

  bodyLg: 'text-18px text-primary',
  bodyMd: 'text-16px text-primary',

  label: 'text-16px text-primary',
  link: 'text-16px text-link underline cursor-pointer',
};

export default function Typography({
  as: Tag = 'p',
  variant = 'bodyLg',
  children,
  className = '',
}) {
  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
}
