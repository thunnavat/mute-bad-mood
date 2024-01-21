"use client"
import Image from "next/image"
import ButtonLink from "../components/ButtonLink"
import ButtonBack from "../components/ButtonBack"
import { useState } from "react"

const Map = () => {
  const [location, setLocation] = useState("")
  const url: string = "/map/" + location
  let next_btn: boolean = false
  if (location === "") {
    next_btn = true
  }
  return (
    <main className="bg-custom-200 flex h-screen w-screen flex-col">
      <ButtonBack href="/passport" className="sm:absolute" />
      <h1 className="flex justify-center pt-1 pb-2 font-anuphan sm:mt-10 sm:text-2xl max-sm:text-xl font-medium tracking-tighter underline text-balance text-center">
        โปรดเลือกสาลเจ้าที่คุณต้องการ
      </h1>
      <div className="relative ml-5 flex h-full items-center justify-end sm:hidden">
        <div className="relative flex">
          <Image
            src="\passport-map.svg"
            alt="passport"
            width={400}
            height={0}
            priority
            className="h-auto"
          />
          <div className="absolute flex h-full w-full flex-row items-center px-8 py-10">
            <div className="flex h-full w-full items-center">
              <label className="cursor-pointer">
                <div className=" bg-white p-2">
                  <input
                    type="radio"
                    className="peer sr-only"
                    name="map"
                    value="location1"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <div className="-rotate-3 opacity-50 peer-checked:opacity-100">
                    <Image
                      src="/san-jao-1.png"
                      alt="san-jao-1"
                      width={140}
                      height={140}
                      priority
                    />
                    <h1 className="flex justify-center pt-1 text-center font-chakrapetch font-semibold tracking-tighter">
                      ศาลเจ้าพ่อต้นไทร
                    </h1>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex h-full w-full flex-col">
              <div className="flex h-full w-full items-start justify-end">
                <label className="cursor-pointer">
                  <div className=" bg-white p-2">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="map"
                      value="location2"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <div className="rotate-6 opacity-50 peer-checked:opacity-100">
                      <Image
                        src="/san-jao-2.png"
                        alt="san-jao-2"
                        width={150}
                        height={150}
                        priority
                      />
                      <h1 className="flex justify-center pt-1 text-center font-chakrapetch font-semibold tracking-tighter">
                        ศาลเจ้าเล่าปึงเถ่ากง
                      </h1>
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex h-full w-full items-end justify-end">
                <label className="cursor-pointer">
                  <div className=" bg-white p-2">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="map"
                      value="location3"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <div className="rotate-6 opacity-50 peer-checked:opacity-100">
                      <Image
                        src="/san-jao-3.png"
                        alt="san-jao-3"
                        width={150}
                        height={150}
                        priority
                      />
                      <h1 className="flex justify-center pt-1 text-center font-chakrapetch font-semibold tracking-tighter">
                        ศาลเจ้าแม่ทับทิม
                      </h1>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-5 flex h-auto items-center justify-center max-sm:hidden">
        <Image
          src="\passport-map-full.svg"
          alt="passport"
          width={700}
          height={700}
          priority
        />
        <div className="absolute flex h-full max-h-[540px] w-full max-w-[700px] flex-auto items-center justify-center p-10">
          <div className="flex h-full max-h-[460px] w-full max-w-[620px] flex-col">
            <div className="flex h-full w-full items-start justify-center">
              <label className="cursor-pointer">
                <div className=" bg-white p-2">
                  <input
                    type="radio"
                    className="peer sr-only"
                    name="map"
                    value="location2"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <div className="rotate-6 opacity-50 peer-checked:opacity-100">
                    <Image
                      src="/san-jao-2.png"
                      alt="san-jao-2"
                      width={180}
                      height={180}
                    />
                    <h1 className="flex justify-center pt-1 text-center font-chakrapetch font-semibold tracking-tighter">
                      ศาลเจ้าเล่าปึงเถ่ากง
                    </h1>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex h-full w-full flex-row justify-between">
              <div className="flex h-full w-full items-end justify-start">
                <label className="cursor-pointer">
                  <div className=" bg-white p-2">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="map"
                      value="location1"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <div className="-rotate-3 opacity-50 peer-checked:opacity-100">
                      <Image
                        src="/san-jao-1.png"
                        alt="san-jao-1"
                        width={150}
                        height={150}
                      />
                      <h1 className="flex justify-center pt-1 text-center font-chakrapetch font-semibold tracking-tighter">
                        ศาลเจ้าพ่อต้นไทร
                      </h1>
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex h-full w-full items-end justify-end">
                <label className="cursor-pointer">
                  <div className=" bg-white p-2">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="map"
                      value="location3"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <div className="rotate-6 opacity-50 peer-checked:opacity-100">
                      <Image
                        src="/san-jao-3.png"
                        alt="san-jao-3"
                        width={180}
                        height={180}
                      />
                      <h1 className="flex justify-center pt-1 text-center font-chakrapetch font-semibold tracking-tighter">
                        ศาลเจ้าแม่ทับทิม
                      </h1>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10">
        <ButtonLink
          text="Next"
          href={url}
          disabled={next_btn}
          className="bottom-0"
        />
      </div>
    </main>
  )
}

export default Map
