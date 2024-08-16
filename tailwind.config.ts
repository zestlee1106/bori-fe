import type { Config } from 'tailwindcss'

const HEADER_HEIGHT = '59px'

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
        primaryLight: 'rgba(132, 169, 61, 0.2)', // 20% 투명도 적용된 primary 색상
        GREEN_800: '#2D5500',
        GREEN_500: '#84A93D',
        GREY_700: '#555557',
        GREEN_300: '#A7C584',
        GREEN_400: '#B5DC69',
        BLACK_900: '#111111',
        WHITE_1000: '#FFFFFF',
        GREY_400: '#939CA9',
        WHITE_900: '#F5F5F7',
        BLACK_1000: '#000000',
        BEIGE_200: '#EAE3C0',
        BEIGE_400: '#EEC695',
        BLUE_200: '#CAE3E2',
      },
      boxShadow: {
        't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      fontWeight: {
        regular: '400',
      },
    },
  },
  plugins: [],
}
export default config
