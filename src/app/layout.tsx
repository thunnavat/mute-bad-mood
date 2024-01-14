import type { Metadata } from "next"
import { Sen } from "next/font/google"
import "./globals.css"
import { AntdRegistry } from '@ant-design/nextjs-registry'

const sen = Sen({ subsets: ["latin"], weight: ["400"] })

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
      <body className={sen.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}
