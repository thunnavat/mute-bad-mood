'use client'
import ButtonBack from "@/app/components/ButtonBack"
import ButtonLink from "@/app/components/ButtonLink"  
import Image from "next/image"
import SlideTransition from "@/app/components/SlideTransition"

const GodDetail = ({ params }: { params: { id: string } }) => {
  let god_title: string = ""
  let img: string = ""
  let url: string = ""
  if (params.id === "location1") {
    god_title = "เทพเจ้ากวนอู"
    img = "/god-1.png"
    url = "location1"
  } else if (params.id === "location2") {
    god_title = "ปีนเถ้ากง"
    img = "/god-2.png"
    url = "location2"
  } else if (params.id === "location3") {
    god_title = "เจ้าแม่ทับทิม"
    img = "/god-3.png"
    url = "location3"
  }

  return (
    <main className="flex max-h-auto min-h-screen h-screen w-screen flex-col bg-custom-200">
      <ButtonBack href={`/map/${url}`}/>
      <SlideTransition>
      <div className="w-screen h-full flex flex-col items-center justify-stretch">
      <div className="max-sm:my-5 sm:mb-5 px-5">
          <Image
            src={img}
            alt="god"
            width={250}
            height={0}
            className="h-auto"
          />
        </div>
        <div className="flex items-center justify-center rounded-[50px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
          <h1 className="font-chakrapetch p-2 text-3xl font-semibold capitalize tracking-tighter">{god_title}</h1>
        </div>
      </div>
      <ButtonLink
          text="Next"
          href={`/map/${url}/siamsie`}
          className="mb-10"
        />
      </SlideTransition>
    </main>
  )
}

export default GodDetail

{/* <SlideTransition>
      <div className="flex h-full w-screen flex-col items-center justify-start bg-green-300">
        <div className="max-sm:my-5 sm:mb-5">
          <Image
            src={img}
            alt="god"
            width={200}
            height={0}
            className="h-auto"
          />
        </div>
        <div className="flex items-center justify-center rounded-[50px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
          <h1 className="font-chakrapetch p-2 text-3xl font-semibold capitalize tracking-tighter">{god_title}</h1>
        </div>
        <ButtonLink
          text="Next"
          href={`/map/${url}/siamsie`}
          className=""
        />
      </div>
      </SlideTransition> */}