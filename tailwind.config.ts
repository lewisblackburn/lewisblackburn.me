import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Partial<Config> = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'linear-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'size-70': '70px 70px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': "theme('colors.foreground / 90%')",
            '--tw-prose-headings': "theme('colors.foreground')",
            '--tw-prose-lead': "theme('colors.foreground')",
            '--tw-prose-links': "theme('colors.foreground')",
            '--tw-prose-bold': "theme('colors.foreground')",
            '--tw-prose-counters': "theme('colors.muted.foreground')",
            '--tw-prose-bullets': "theme('colors.muted.foreground')",
            '--tw-prose-hr': "theme('colors.border')",
            '--tw-prose-quotes': "theme('colors.foreground')",
            '--tw-prose-quote-borders': "theme('colors.border')",
            '--tw-prose-captions': "theme('colors.foreground')",
            '--tw-prose-th-borders': "theme('colors.border')",
            '--tw-prose-td-borders': "theme('colors.border')",
            '--tw-prose-code': "theme('colors.foreground')",
            '--tw-prose-kbd': "theme('colors.foreground')",
            '--tw-prose-kbd-shadows': "theme('colors.primary.DEFAULT / 50%')",
            '--tw-prose-pre-bg': false,
            '--tw-prose-pre-code': false,

            'maxWidth': 'none',

            'img': {
              margin: '0 auto',
            },

            'kbd': {
              boxShadow: '0 0 0 1px var(--tw-prose-kbd-shadows),0 3px 0 var(--tw-prose-kbd-shadows)',
            },

            'code': {
              padding: '2px 4px',
              fontSize: '13px',
              borderRadius: '6px',
              background: "theme('colors.secondary.DEFAULT / 50%')",
              border: '1px solid hsl(var(--border))',
            },

            'ul': {
              listStylePosition: 'inside',
              paddingLeft: '0',
            },

            'pre code': false,
            'pre code::after': false,
            'pre code::before': false,
            'code::after': false,
            'code::before': false,
          },
        },
      },
    },
  },
  plugins: [typography, animate],
}

export default config
