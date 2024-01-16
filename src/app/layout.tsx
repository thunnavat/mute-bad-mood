import type { Metadata } from "next"
import { Sen, Sriracha, Sarabun, Chakra_Petch, Niramit } from "next/font/google"
import "./globals.css"
import { AntdRegistry } from "@ant-design/nextjs-registry"

const sen = Sen({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })
const sriracha = Sriracha({ subsets: ["thai"], weight: ["400"] })
const chakraPetch = Chakra_Petch({ subsets: ["thai"], weight: ["600"] })
const sarabun = Sarabun({ subsets: ["thai"], weight: ["200"] })
const niramit = Niramit({ subsets: ["thai"], weight: ["400", "500", "600", "700"] })

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
