import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '보리 - Bori',
  description: '보청기 판매점을 보여줘요',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center justify-center bg-black`}>
        <div className="max-w-screen min-w-screen min-h-screen bg-white">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
