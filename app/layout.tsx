import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { Geist, Geist_Mono, Geist as Font_Geist, Geist_Mono as Font_Geist_Mono, Source_Serif_4 as Font_Source_Serif_4 } from 'next/font/google'

const _geist = Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "HacksJoseMaria | Maintenance",
  description: "Our system is currently undergoing scheduled maintenance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
