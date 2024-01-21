import ButtonLink from "@/app/components/ButtonLink"
import ButtonDownload from "@/app/components/ButtonDownload"
import Image from "next/image"
import { promises as fs } from "fs"

const SiamSieDetail = async ({
  params
}: {
  params: { sanjao: string; siamsiedetail: number }
}) => {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8")
  const data = JSON.parse(file)
  return (
    <main className="max-w-screen flex h-auto min-h-screen flex-col items-center justify-center bg-[#99c2eb]">
      <div className="mx-5 flex h-auto w-[300px] flex-col items-center justify-center rounded-3xl p-2 bg-white shadow-2xl">
        <div>
          <Image
            src={`/card/${params.siamsiedetail}.png`}
            alt="card"
            width={300}
            height={0}
            loading="lazy"
            className="h-auto"
          />
        </div>
        <div className="mx-5 mb-2 flex text-center ">
          <p className="font-anuphan text-xs font-medium">
            {data.carddetail[params.siamsiedetail - 1]}
          </p>
        </div>
      </div>
      <ButtonDownload 
        cardNumber={params.siamsiedetail} 
        className="mt-5"
      />
      <ButtonLink
        text="play again"
        href="/map"
        className="bottom-0"
      />
    </main>
  )
}

export default SiamSieDetail
