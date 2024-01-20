import ButtonLink from "@/app/components/ButtonLink"
import Image from "next/image"

const SiamSieDetail = ({
  params
}: {
  params: { sanjao: string; siamsiedetail: number }
}) => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-[#99c2eb]">
      <div className="flex h-screen w-screen max-w-[300px] flex-col items-center justify-center mx-5">
        <div className="group h-[500px] w-[300px] max-w-[300px]">
          <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 h-fit w-fit object-cover [backface-visibility:hidden]">
              <Image
                src={`/card/front/${params.siamsiedetail}.png`}
                alt="san-jao"
                width={300}
                height={0}
                className="h-auto"
              />
            </div>
            <div className="absolute inset-0 h-fit w-fit object-cover [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <Image
                src={`/card/back/${params.siamsiedetail}.png`}
                alt="san-jao"
                width={300}
                height={0}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <ButtonLink
        text="next"
        href="/god"
        className="bottom-0"
      />
    </main>
  )
}

export default SiamSieDetail

{
  /* <div className="flex h-screen w-screen flex-col items-center justify-center">
        <div className="group h-[550px] w-[330px]">
          <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 h-fit w-fit object-cover [backface-visibility:hidden]">
              <Image
                src="/card/B-1.png"
                alt="san-jao"
                width={330}
                height={0}
                className="h-auto"
              />
            </div>
            <div className="absolute inset-0 h-fit w-fit object-cover [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <Image
                src="/card/A-1.png"
                alt="san-jao"
                width={330}
                height={0}
                className="h-auto"
              />
            </div>
            {/* <div className="absolute inset-0 p-5 z-10 h-full w-full bg-white border-[4px] border-solid border-black [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-scroll">
              <CardDetail cardnumber={params.siamsiedetail}/>
              <CardDetail cardnumber={params.siamsiedetail}/>
              <CardDetail cardnumber={params.siamsiedetail}/>
            </div>
          </div>
        </div>
      </div> */
}
