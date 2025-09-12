import type { Metadata } from "next"
import { Inter, Noto_Sans_Devanagari } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const notoSansDevanagari = Noto_Sans_Devanagari({ 
  subsets: ["devanagari"], 
  variable: "--font-devanagari" 
})

export const metadata: Metadata = {
  title: "Pandit Pradeep Mishra Ji - Recognition & Honors Strategic Plan",
  description: "Professional presentation showcasing the strategic plan for recognition and honors for Pandit Pradeep Mishra Ji",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} ${notoSansDevanagari.variable} bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}