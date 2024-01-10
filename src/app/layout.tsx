import type { Metadata } from "next"
import { Kanit } from "next/font/google"
import "./globals.css"

const kanit = Kanit({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "MUTE MOOD",
  description: "Website for making wishes"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
