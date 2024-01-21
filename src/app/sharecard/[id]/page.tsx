import ButtonLink from "@/app/components/ButtonLink"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://mute-bad-mood.vercel.app/'),
  openGraph: {
    title: "MUTE MOOD",
    description: "Website for making wishes",
    images: [
      {
        url: "card/sharecard/1.png",
        width: 1200,
        height: 630,
        alt: "MUTE MOOD"
      }
    ]
  }
}

const ShareCard = ({
  params
}: {
  params: { id: number }
}) => {
  const carddetail: string[] = [
    "ดวงของคุณช่วงนี้กำลังจะมา เป็นโอกาสที่ดีในการริเริ่มการงานใหม่ มีเงินไว้ใช้ไว้กินสบายๆ",
    "มีโชคเข้าหาจากบุคคลใกล้ตัว หากก่อนหน้าลงทุนอะไรไว้ ก็จะได้รับผลตอบแทน",
    "มีภาระด้านค่าใช้จ่ายที่มากขึ้น หากสามารถผ่านช่วงเวลานี้ไปได้ ผลลัพธ์ก็จะออกมาดี",
    "ยังคงประคองด้านการเงินไปได้ด้วยดี หากไม่ใช้เงินตามใจตัวเองมากไป อาจลองวิธีการทำรายรับ-รายจ่าย หรือแบ่งเงินเก็บไว้ใช้สำรองส่วนหนึ่ง",
    "มีความเครียดจากการงานที่เพิ่มขึ้น แต่ก็จะประสบผลสำเร็จตามเป้าหมาย ได้อย่างราบรื่นเหนือความคาดหวัง",
    "ภาระงานใหม่ๆที่เข้ามา แต่คุณก็ยังคงจัดการปัญหาได้ดีเสมอ หากจัดการเวลาเป็นระเบียบ",
    "มีอิสระในการทำสิ่งต่างๆ มากขึ้น หากต้องการทําอะไรควรลงมือทําเลย จะประสบความสำเร็จแน่นอน",
    "ทํางานได้ดี มีโอกาสในการทํางานใหม่ๆ ด้านการเรียนยังคงประคองด้านการเรียนได้อย่างดี มีเพื่อนช่วยเกื้อกูลและให้คำแนะนํา",
    "คนโสด มีบุคคลแอบชอบคุณอยู่ แต่ขอให้เปิดใจและเปิดโอกาส คนมีคู่ ยังคงประคองความสัมพันธ์ ไปได้ด้วยดี",
    "ช่วงนี้คุณจะได้รับความรัก ความเอ็นดูและความช่วยเหลือจากบุคคลอื่นๆ มากมายในสังคม และได้รับการยอมรับจากบุคคลในสังคมมากขึ้น",
    "คนโสด จะยังเป็นโสดอยู่ ควรรักตัวเองให้มากๆก่อนจะเปิดใจรับใครเข้ามา เป็นตัวของตัวเองไม่ต้องฝืนปรับเปลี่ยน อะไรเพื่อคนอื่นแล้วคู่ในอนาคตจะเข้ามาหาเอง",
    "คนโสดคุณมีคนแอบปลื้มแต่เขาไม่กล้า เข้าหาลองใส่ใจคนรอบตัวให้มากกว่านี้ คนนั้นอาจจะเป็นคนที่คุณสนิทมากกว่าที่คิด"
  ]

  return (
    <main className="max-w-screen flex h-auto min-h-screen flex-col items-center justify-center bg-[#99c2eb]">
      <div className="mx-5 mt-5 flex h-auto w-[300px] flex-col items-center justify-center rounded-3xl bg-white p-2 shadow-2xl">
        <div>
          <Image
            src={`/card/${params.id}.png`}
            alt="card"
            width={300}
            height={0}
            priority
            className="h-auto"
          />
        </div>
        <div className="mx-5 mb-2 flex text-center ">
          <p className="font-anuphan text-xs font-medium">
            {carddetail[params.id - 1]}
          </p>
        </div>
      </div>
      <ButtonLink
        text="play"
        href="/"
        className="mt-16 bottom-0"
      />
    </main>
  )
}

export default ShareCard
