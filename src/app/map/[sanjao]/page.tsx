import ButtonBack from "@/app/components/ButtonBack"
import ButtonLink from "@/app/components/ButtonLink"
import BoxStory from "@/app/components/BoxStory"
import Image from "next/image"
import { promises as fs } from "fs"
import SlideTransition from "@/app/components/SlideTransition"

const Sanjao = async ({ params }: { params: { sanjao: string } }) => {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8")
  const data = JSON.parse(file)
  let location: string = ""
  let img: string = ""
  let url: string = ""
  if (params.sanjao === "location1") {
    location = data.location[0]
    img = "/san-jao-1.png"
    url = "/god/location1"
  } else if (params.sanjao === "location2") {
    location = data.location[1]
    img = "/san-jao-2.png"
    url = "/god/location2"
  } else if (params.sanjao === "location3") {
    location = data.location[2]
    img = "/san-jao-3.png"
    url = "/god/location3"
  }

  return (
    <main className="max-h-auto flex h-auto w-screen flex-col">
      <ButtonBack href="/map" />
      <SlideTransition>
        <div className="max-h-auto flex h-auto w-screen flex-col items-center justify-start">
          <div className="max-sm:my-5 sm:mb-5">
            <Image
              src={img}
              alt="san-jao"
              height={160}
              width={160}
            />
          </div>
          <div className="flex items-center justify-center rounded-[50px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
            <h1 className="p-2 font-chakrapetch text-3xl font-semibold capitalize tracking-tighter">
              {location}
            </h1>
          </div>
          <BoxStory name={params.sanjao} />
        </div>
      </SlideTransition>
      <div>
        <ButtonLink
          text="Next"
          href={url}
          className=""
        />
      </div>
    </main>
  )
}

export default Sanjao
