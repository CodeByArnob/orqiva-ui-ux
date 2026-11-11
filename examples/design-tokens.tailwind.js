/**
 * ORQIVA Design System - Tailwind CSS Configuration Example
 * Integrates directly with CSS custom properties from design-tokens.css.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-bg-canvas)',
        surface: {
          DEFAULT: 'var(--color-bg-surface)',
          raised: 'var(--color-bg-surface-raised)',
          subtle: 'var(--color-bg-surface-subtle)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          DEFAULT: 'var(--color-border-default)',
          strong: 'var(--color-border-strong)',
        },
        fg: {
          primary: 'var(--color-fg-primary)',
          secondary: 'var(--color-fg-secondary)',
          muted: 'var(--color-fg-muted)',
          inverse: 'var(--color-fg-inverse)',
        },
        accent: {
          DEFAULT: 'var(--color-accent-default)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
          contrast: 'var(--color-accent-contrast)',
        },
        status: {
          success: {
            fg: 'var(--color-success-fg)',
            bg: 'var(--color-success-bg)',
          },
          warning: {
            fg: 'var(--color-warning-fg)',
            bg: 'var(--color-warning-bg)',
          },
          danger: {
            fg: 'var(--color-danger-fg)',
            bg: 'var(--color-danger-bg)',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-family-sans)'],
        mono: ['var(--font-family-mono)'],
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
      boxShadow: {
        subtle: 'var(--shadow-sm)',
        card: 'var(--shadow-md)',
        floating: 'var(--shadow-lg)',
        modal: 'var(--shadow-xl)',
      },
    },
  },
  plugins: [],
};
