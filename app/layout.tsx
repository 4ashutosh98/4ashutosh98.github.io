import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ashutosh Choudhari - Data Science & AI Portfolio",
  description:
    "Portfolio of Ashutosh Choudhari, a Master's student specializing in Data Science, Machine Learning, and Artificial Intelligence.",
    //generator: 'v0.dev',
}

// Export viewport separately as required by Next.js
export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'