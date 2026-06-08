/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      colors: {
        base:    'var(--bg-base)',
        surface: 'var(--bg-surface)',
        subtle:  'var(--bg-subtle)',
        border:  'var(--border)',
        primary: 'var(--text-primary)',
        muted:   'var(--text-muted)',
        accent:  'var(--accent)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1100px',
      },
    },
  },
  plugins: [],
};
