import { promises as fs } from "fs"
import React from "react"

interface ITextparagraphProps {
  name: string
}

const Textparagraph = async ({ name }: ITextparagraphProps) => {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8")
  const data = JSON.parse(file)
  if (name === "location1") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="font-sriracha pt-3 text-2xl font-semibold">ประวัติ</h2>
        <p className="font-sarabun mx-5 mt-3 text-justify text-base font-extralight tracking-wide">
          {data.locationdetail.location_1[0]}
        </p>
        <p className="font-sarabun mx-5 mb-8 mt-3 text-justify text-base font-extralight tracking-wide">
          {data.locationdetail.location_1[1]}
        </p>
      </div>
    )
  } else if (name === "location2") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="font-sriracha pt-3 text-2xl font-semibold">ประวัติ</h2>
        <p className="font-sarabun mx-5 mt-3 text-justify text-base font-extralight tracking-wide">
          {data.locationdetail.location_2[0]}
        </p>
        <p className="font-sarabun mx-5 mb-8 mt-3 text-justify text-base font-extralight tracking-wide">
          {data.locationdetail.location_2[1]}
        </p>
      </div>
    )
  } else if (name === "location3") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="font-sriracha pt-3 text-2xl font-semibold">ประวัติ</h2>
        <p className="font-sarabun mx-5 mt-3 text-justify text-base font-extralight tracking-wide">
          {data.locationdetail.location_3[0]}
        </p>
        <p className="font-sarabun mx-5 mb-8 mt-3 text-justify text-base font-extralight tracking-wide">
          {data.locationdetail.location_3[1]}
        </p>
      </div>
    )
  }
}

export default Textparagraph
