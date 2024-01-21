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
    <main className="flex max-h-auto min-h-screen h-auto w-screen flex-col bg-custom-200">
      <ButtonBack href={`/map/${url}`}/>
      <SlideTransition>
      <div className="flex max-h-auto h-auto w-screen flex-col items-center justify-start">
        <div className="max-sm:my-5 sm:mb-5">
          <Image
            src={img}
            alt="god"
            width={120}
            height={120}
          />
        </div>
        <div className="flex items-center justify-center rounded-[50px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
          <h1 className="font-chakrapetch p-2 text-3xl font-semibold capitalize tracking-tighter">{god_title}</h1>
        </div>
        <div className="my-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
          <h2 className="font-sriracha pt-3 text-2xl font-semibold">ประวัติ</h2>
          <p className="mx-5 mb-8 mt-3 text-justify font-anuphan text-base font-extralight tracking-wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            iusto odio autem, veniam facilis optio aperiam corporis accusamus
            porro explicabo sit impedit commodi qui repellendus, tenetur nobis
            voluptate sunt. Delectus?
          </p>
        </div>
        <ButtonLink
          text="Next"
          href={`/map/${url}/siamsie`}
          className=""
        />
      </div>
      </SlideTransition>
    </main>
  )
}

export default GodDetail
