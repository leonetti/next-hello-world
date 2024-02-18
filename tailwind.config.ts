import type { Config } from 'tailwindcss';
// import colors from 'tailwindcss/colors';
const { nextui } = require('@nextui-org/react');

// const withAlphaValue = (varName: string) =>
//   `hsl(var(--${varName}) / <alpha-value>)`;

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   primary: colors.purple,
    //   secondary: colors.emerald,
    //   copy: {
    //     base: withAlphaValue('copy-base-color'),
    //     muted: withAlphaValue('copy-muted-color'),
    //     inverted: withAlphaValue('copy-inverted-color'),
    //   },
    //   surface: {
    //     1: withAlphaValue('surface-1-color'),
    //     2: withAlphaValue('surface-2-color'),
    //     3: withAlphaValue('surface-3-color'),
    //     inverted: withAlphaValue('surface-inverted-color'),
    //   },
    //   emphasis: {
    //     DEFAULT: withAlphaValue('emphasis-color'),
    //     hover: withAlphaValue('emphasis-hover-color'),
    //   },
    //   gray: colors.stone,
    //   white: colors.white,
    //   transparent: 'transparent',
    //   current: 'currentColor',
    // },
    // boxShadow: {
    //   low: 'var(--shadow-elevation-low)',
    //   mid: 'var(--shadow-elevation-medium)',
    //   high: 'var(--shadow-elevation-high)',
    // },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '475px',
      },
      // colors: {
      //   primary: {
      //     DEFAULT: '#2196F3',
      //     100: '#BBDEFB',
      //     500: '#2196F3',
      //     900: '#0D47A1',
      //   },
      //   secondary: {
      //     DEFAULT: '#FF7043',
      //     100: '#FBE9E7',
      //     500: '#FF7043',
      //     900: '#BF360C',
      //   },
      //   neutral: {
      //     DEFAULT: '#9E9E9E',
      //     100: '#F5F5F5',
      //     500: '#9E9E9E',
      //     900: '#212121',
      //   },
      //   accent: {
      //     DEFAULT: '#FFEB3B',
      //     100: '#FFF9C4',
      //     500: '#FFEB3B',
      //     900: '#F57F17',
      //   },
      // },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [nextui()],
};
export default config;
