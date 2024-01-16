import ButtonBack from "@/app/components/ButtonBack"
import Image from "next/image"
import { promises as fs } from "fs"

const GodDetail = async ({ params }: { params: { id: string } }) => {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8")
  const data = JSON.parse(file)
  let god_title: string = ""
  let img: string = ""
  if (params.id === "1") {
    god_title = data.god[0]
    img = "/god-1.png"
  } else if (params.id === "2") {
    god_title = data.god[1]
    img = "/god-2.png"
  } else if (params.id === "3") {
    god_title = data.god[2]
    img = "/god-3.png"
  }

  return (
    <main className="flex h-screen w-screen flex-col bg-[#99c2eb]">
      <ButtonBack href="/god" secondary={true}/>
      <div className="flex h-screen w-screen flex-col items-center">
        <div className="max-sm:my-5 sm:mb-5">
          <Image
            src={img}
            alt="god"
            width={120}
            height={120}
          />
        </div>
        <div className="flex items-center justify-center rounded-[50px] border-[7px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
          <h1 className="p-2 text-2xl font-semibold capitalize">{god_title}</h1>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center rounded-[50px] border-[7px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
          <h2 className="pt-5 text-2xl font-semibold">ประวัติ</h2>
          <p className="mx-5 mb-10 mt-5 text-justify tracking-wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            iusto odio autem, veniam facilis optio aperiam corporis accusamus
            porro explicabo sit impedit commodi qui repellendus, tenetur nobis
            voluptate sunt. Delectus?
          </p>
        </div>
      </div>
    </main>
  )
}

export default GodDetail
