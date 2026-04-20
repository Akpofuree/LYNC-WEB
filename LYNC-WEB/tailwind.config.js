/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: {
      primary: '#221e57',
      accent: '#f5a210',
      link: '#4139bd',
      muted: '#8c8c8c',
      bgSoft: '#f5f5fa',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['SF Pro', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      '18px': '1.125rem',
      '16px': '1rem',
      '92px': '5.743125rem',
      '24px': '1.5rem',
      '16-15px': '1.009375rem',
      '36px': '2.25rem',
      '40px': '2.5rem',
      '19-8px': '1.2375rem',
      '48px': '3rem',
      '32px': '2rem',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2.5rem',
      xl: '5rem',
      '2xl': '7.5rem',
    },
    borderRadius: {
      lg: '1rem',
      xl: '1.5rem',
      DEFAULT: '0.25rem',
    },
    maxWidth: {
      container: '1200px',
    },
  },
};
