import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/basic/Header'
import Nav from './components/basic/Nav'
import Background from './components/basic/Background'
import localFont from 'next/font/local'
import ToastList from '@/app/components/container/ToastList'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '보리 - Bori',
  description: '보청기 판매점을 보여줘요',
}

const pretendard = localFont({
  src: [
    {
      path: '../public/font/Pretendard-Regular.woff',
      weight: '400',
    },
    {
      path: '../public/font/Pretendard-SemiBold.woff',
      weight: '600',
    },
    {
      path: '../public/font/Pretendard-Bold.woff',
      weight: '700',
    },
    {
      path: '../public/font/Pretendard-ExtraBold.woff',
      weight: '800',
    },
  ],
  variable: '--font-pretendard',
})

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} ${inter.className} flex items-center justify-center bg-black text-black font-pretendard`}
      >
        <Header />
        <div className="max-w-screen min-w-screen min-h-screen bg-white w-full flex flex-col">
          <Background>
            <div className="px-[24px]">{children}</div>
          </Background>
        </div>
        <Nav />
        <ToastList />
        <div className="fixed bottom-10" id="toast-root" />
      </body>
    </html>
  )
}

export default RootLayout
