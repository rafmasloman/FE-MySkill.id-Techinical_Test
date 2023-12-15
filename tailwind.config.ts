import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white-primary': '#FAFAFA',
        'black-primary': '#212B36',
        'gray-primary': '#878787',
        'light-blue': '#10A4B0',
        'disable-color': '#919EAB',
        'dropzone-gray-text': '#6B6B6B',
      },
      fontFamily: {
        poppins: 'Poppins',
        inter: 'Inter',
      },
    },
  },
  plugins: [],
};
export default config;
