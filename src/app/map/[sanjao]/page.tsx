"use client"
import ButtonBack from "@/app/components/ButtonBack"
import ButtonLink from "@/app/components/ButtonLink"
import BoxStory from "@/app/components/BoxStory"
import Image from "next/image"
import SlideTransition from "@/app/components/SlideTransition"

const Sanjao = ({ params }: { params: { sanjao: string } }) => {
  let location: string = ""
  let img: string = ""
  let url: string = ""
  let god: string = ""
  let size: number = 0
  if (params.sanjao === "location1") {
    location = "ศาลเจ้าพ่อต้นไทร"
    god = "เทพเจ้ากวนอู"
    img = "/location-1.png"
    size = 230
    url = "/map/location1/siamsie"
  } else if (params.sanjao === "location2") {
    location = "ศาลเจ้าเล่าปึงเถ่ากง"
    god = "เทพเจ้าเล่าปึงเถ่ากง"
    img = "/location-2.png"
    size = 230
    url = "/map/location2/siamsie"
  } else if (params.sanjao === "location3") {
    location = "ศาลเจ้าแม่ทับทิม"
    god = "เจ้าแม่ทับทิม"
    img = "/location-3.png"
    size = 230
    url = "/map/location3/siamsie"
  }

  return (
    <main className="max-h-auto bg-custom-200 flex h-auto w-screen flex-col">
      <ButtonBack href="/map" />
      <SlideTransition>
        <div className="max-h-auto flex h-auto w-screen flex-col items-center justify-start">
          <div className="sm:mb-5">
            <Image
              src={img}
              alt="san-jao"
              height={0}
              width={size}
              priority
            />
          </div>
          <div className="flex items-center justify-center rounded-[50px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
            <div>
            <h1 className="pt-2 font-anuphan text-center text-2xl font-semibold capitalize tracking-normal">
              {location}
            </h1>
            <h1 className="pb-2 font-anuphan text-center text-md font-semibold capitalize tracking-normal">
              {god}
            </h1>
            </div>
          </div>
          <BoxStory name={params.sanjao} />
        </div>
        <div>
          <ButtonLink
            text="Next"
            href={url}
            className=""
          />
        </div>
      </SlideTransition>
    </main>
  )
}

export default Sanjao
