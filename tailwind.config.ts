/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        sx: '290px',
      },
      fontSize: {
        'fluid-xs':
          'calc(14px + (27 - 16) * ((100vw - 320px) / (1920 - 320)))',
        'fluid-sm':
          'calc(14px + (29 - 16) * ((100vw - 320px) / (1920 - 320)))',
        'fluid-md':
          'calc(23px + (40 - 16) * ((100vw - 320px) / (1920 - 320)))',
        'fluid-1':
          'calc(25px + (45 - 16) * ((100vw - 320px) / (1920 - 320)))',
        'fluid-2':
          'calc(40px + (45 - 16) * ((100vw - 320px) / (1920 - 320)))',
        display: '4rem',
        'heading-1': '3rem',
        'heading-2': '2.188rem',
        'heading-3': '1.563rem',
        'heading-4': '1.375rem',
        'heading-5': '1.25rem',
        'heading-6': '1.125rem',
      },
      width: {
        '9xl': '96rem',
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
          1: '#CDA274',
          2: '#292F36',
          3: '#F4F0EC',
          4: '#4D5053',
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
        light_brow: '#B8967B',
        custom_gold: '#ffc925',
        custom_gold_2: '#ffc925',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        scale: {
          form: { transform: 'scale(1)' },
          to: { transform: 'scale(1.1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scale-up': 'scale 8s ease-in-out infinite alternate',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
