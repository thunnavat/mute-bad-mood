"use client"
import ButtonLink from "@/app/components/ButtonLink"
import ButtonDownload from "@/app/components/ButtonDownload"
import ButtonCopyClipboard from "@/app/components/ButtonCopyClipboard"
import Image from "next/image"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "next-share"
import ButtonIGDownload from "@/app/components/ButtonIGDownloaad"

const SiamSieDetail = ({
  params
}: {
  params: { sanjao: string; siamsiedetail: number }
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
  const iconsize: number = 48
  const baseURL: string = "https://mute-bad-mood.vercel.app/"

  return (
    <main className="max-w-screen flex h-auto min-h-screen flex-col items-center justify-center bg-custom-400">
      <div className="mx-5 mt-5 flex h-auto w-[300px] flex-col items-center justify-center rounded-3xl bg-white p-2 shadow-2xl">
        <div>
          <Image
            src={`/card/${params.siamsiedetail}.png`}
            alt="card"
            width={300}
            height={0}
            priority
            className="h-auto"
          />
        </div>
        <div className="mx-5 mb-2 block text-center ">
          <p className="font-anuphan text-xs font-medium">
            {carddetail[params.siamsiedetail - 1]}
          </p>
          {/* <p className="font-anuphan text-xs font-semibold mt-2">
            #BangkokDesignWeek2024 <br /> #PhranakornSpritUp
          </p> */}
        </div>
      </div>
      <h2 className="mt-5 font-anuphan text-sm font-semibold text-center text-gray-900">#BangkokDesignWeek2024 <br /> #PhranakornSpritUp</h2>
      <div className="mt-3 flex flex-row space-x-2">
        <FacebookShareButton
          url={`${baseURL}/sharecard/${params.siamsiedetail}`} 
          quote={"MUTE MOOD Website for making wishes"}
          hashtag={"#mutemood"}
        >
          <FacebookIcon
            size={iconsize}
            round
          />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${baseURL}/sharecard/${params.siamsiedetail}`}
          title={"MUTE MOOD Website for making wishes"}
        >
          <TwitterIcon
            size={iconsize}
            round
          />
        </TwitterShareButton>
        <LineShareButton
          url={`${baseURL}/sharecard/${params.siamsiedetail}`}
          title={"MUTE MOOD Website for making wishes"}
        >
          <LineIcon
            size={iconsize}
            round
          />
        </LineShareButton>
        <WhatsappShareButton
          url={`${baseURL}/sharecard/${params.siamsiedetail}`}
          title={"MUTE MOOD Website for making wishes"}
        >
          <WhatsappIcon
            size={iconsize}
            round
          />
        </WhatsappShareButton>
      </div>
      <div className=" mt-5 flex flew-row space-x-4">
        <ButtonCopyClipboard
          cardNumber={params.siamsiedetail}
          className=""
        />
        <ButtonDownload
          cardNumber={params.siamsiedetail}
          className=""
        />
        <ButtonIGDownload
          cardNumber={params.siamsiedetail}
          className=""
        />
      </div>
      <ButtonLink
        text="play again"
        href="/map"
        className="bottom-0"
      />
    </main>
  )
}

export default SiamSieDetail
