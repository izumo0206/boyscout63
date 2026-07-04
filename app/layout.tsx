import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '日本ボーイスカウト大阪第63団 | 大阪市生野区・平野区で活動',
  description: '日本ボーイスカウト大阪第63団は、大阪市生野区・平野区を中心に活動するボーイスカウト団です。ビーバースカウト隊の体験入隊を受け付けています。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/scout-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/scout-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
