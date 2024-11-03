/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
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
      padding: {
        '6px': '6px',
        '9px': '9px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
      },
      margin: {
        '2px': '2px',
        '5px': '5px',
        11: '11px',
        13: '13px',
        16: '16px',
        21: '21px',
        27: '27px',
        40: '40px',
        61: '61px',
      },
      width: {
        'max-content': 'max-content',
        15: '15rem',
      },
      minWidth: {
        28: '28rem',
        38: '38rem',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1260px',
        '2xl': '1300px',
        '3xl': '1404px',
      },
      boxShadow: {
        bot: '-4px 4px 60px 0px rgba(43, 42, 86, 0.31)',
        'notification-block': ' 0px 4px 20px 0px rgba(10, 28, 95, 0.10)',
      },
      colors: {
        main: 'rgba(2, 42, 191, 1)',
        'additional-first': 'rgba(128, 148, 223, 1)',
        'additional-second': 'rgba(220, 230, 255, 1)',
        h: 'rgba(19, 39, 113, 1)',
        txt: 'rgba(86, 97, 139, 1)',
        'text-gray': 'rgba(170, 177, 204, 1)',
        stroke: 'rgba(230, 234, 249, 1)',
        bg: 'rgba(240, 242, 250, 1)',
        danger: 'rgba(216, 47, 47, 1)',
        'nav-text': 'rgba(146, 160, 195, 1)',
        'table-first-name': 'rgba(16, 42, 139, 1)',
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
      backgroundColor: {
        main: 'rgba(2, 42, 191, 1)',
        'additional-first': 'rgba(128, 148, 223, 1)',
        'additional-second': 'rgba(220, 230, 255, 1)',
        h: 'rgba(19, 39, 113, 1)',
        txt: 'rgba(86, 97, 139, 1)',
        'text-gray': 'rgba(170, 177, 204, 1)',
        stroke: 'rgba(230, 234, 249, 1)',
        bg: 'rgba(240, 242, 250, 1)',
        'light-bg': 'rgba(240, 242, 250, 0.60)',
        'light-purple': 'rgba(233, 236, 248)',
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
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
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
