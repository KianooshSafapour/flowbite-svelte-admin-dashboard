import type { Config } from 'tailwindcss';
// import flowbitePlugin from 'flowbite/plugin'

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts,md}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['IRAN Sans', 'IRYekan'],
    },
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      },
      // fontFamily: {
      //   sans: ['IRAN Sans', 'IRYekan'],
      // },
      // fontSize: {
      //   xs: '0.75rem',
      //   sm: '0.875rem',
      //   base: '1rem',
      //   lg: '1.125rem',
      //   xl: '1.25rem',
      //   '2xl': '1.5rem',
      //   '3xl': '1.875rem',
      //   '4xl': '2.25rem',
      //   '5xl': '3rem',
      //   '6xl': '4rem'
      // },
    }
  },
  // plugins: [flowbitePlugin]
} as Config;
