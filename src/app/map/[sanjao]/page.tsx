import ButtonBack from "@/app/components/ButtonBack"
import ButtonLink from "@/app/components/ButtonLink"
import BoxStory from "@/app/components/BoxStory"
import Image from "next/image"
import Link from "next/link"
import { promises as fs } from "fs"

const Sanjao = async ({ params }: { params: { sanjao: string } }) => {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8")
  const data = JSON.parse(file)
  let location: string = ""
  let location_detail: string = ""
  let img: string = ""
  let url: string = ""
  if (params.sanjao === "location1") {
    location = data.location[0]
    location_detail = data.locationdetail[0]
    img = "/san-jao-1.png"
    url = "/map/location1/siamsie"
  } else if (params.sanjao === "location2") {
    location = data.location[1]
    location_detail = data.locationdetail[1]
    img = "/san-jao-2.png"
    url = "/map/location2/siamsie"
  } else if (params.sanjao === "location3") {
    location = data.location[2]
    location_detail = data.locationdetail[2]
    img = "/san-jao-3.png"
    url = "/map/location3/siamsie"
  }

  return (
    <main className="flex max-h-auto h-screen w-screen flex-col">
      <ButtonBack href="/map"/>
      <div className="flex max-h-auto h-screen w-screen flex-col items-center justify-start">
        <div className="max-sm:my-5 sm:mb-5">
          <Image
            src={img}
            alt="san-jao"
            height={160}
            width={160}
          />
        </div>
        <div className="flex items-center justify-center rounded-[50px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
          <h1 className="font-chakrapetch p-2 text-3xl font-semibold capitalize tracking-tighter">
            {location}
          </h1>
        </div>
        <BoxStory location={params.sanjao} />
      </div>
      <div className="">
        <ButtonLink
          text="Next"
          href={url}
          className="bottom-0"
        />
      </div>
    </main>
  )
}

export default Sanjao
