import type { Metadata } from "next"
import { Sen, Sriracha, Sarabun, Chakra_Petch, Niramit, Anuphan } from "next/font/google"
import "./globals.css"
import { AntdRegistry } from "@ant-design/nextjs-registry"

export const sen = Sen({ subsets: ["latin"], weight: ["700"] })
export const sriracha = Sriracha({ subsets: ["thai"], weight: ["400"] })
export const chakraPetch = Chakra_Petch({ subsets: ["thai"], weight: ["600"] })
export const sarabun = Sarabun({ subsets: ["thai"], weight: ["200"] })
export const niramit = Niramit({ subsets: ["thai"], weight: ["400", "500", "600", "700"] })
export const anuphan = Anuphan({ subsets: ["thai"], weight: ["400", "500", "600", "700"] })

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
