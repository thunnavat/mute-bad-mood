import type { Metadata } from "next"
import { Sen, Sriracha, Sarabun, Chakra_Petch, Niramit, Anuphan } from "next/font/google"
import "./globals.css"
import { AntdRegistry } from "@ant-design/nextjs-registry"

const sen = Sen({ subsets: ["latin"], weight: ["700"], variable: '--font-sen'})
const sriracha = Sriracha({ subsets: ["thai"], weight: ["400"], variable: '--font-sriracha' })
const chakraPetch = Chakra_Petch({ subsets: ["thai"], weight: ["600"], variable: '--font-chakrapetch' })
const sarabun = Sarabun({ subsets: ["thai"], weight: ["200"], variable: '--font-sarabun' })
const niramit = Niramit({ subsets: ["thai"], weight: ["400", "500", "600", "700"], variable: '--font-niramit' })
const anuphan = Anuphan({ subsets: ["thai"], weight: ["500"], variable: '--font-anuphan' })

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
      <body className={`${sen.variable} ${sriracha.variable} ${chakraPetch.variable} ${sarabun.variable} ${niramit.variable} ${anuphan.variable}`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}
