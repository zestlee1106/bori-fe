import type { Config } from 'tailwindcss'

const HEADER_HEIGHT = '50px'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        screen: '430px',
      },
      height: {
        header: HEADER_HEIGHT,
      },
      padding: {
        header: HEADER_HEIGHT,
      },
      margin: {
        header: HEADER_HEIGHT,
      },
      colors: {
        primary: '#84A93D',
        primaryLight: 'rgba(132, 169, 61, 0.2)', // 20% 투명도 적용된 primary 색상
      },
      boxShadow: {
        't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config
