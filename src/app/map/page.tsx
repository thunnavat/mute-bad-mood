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
    <main className="flex h-screen w-screen flex-col">
      <ButtonBack href="/passport"/>
      <div className="relative ml-5 mt-5 flex h-screen items-center justify-end sm:hidden">
        <div className="relative flex">
          <div>
            <Image
              src="\passport-map.svg"
              alt="passport"
              width={400}
              height={400}
              priority
            />
          </div>
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
                    />
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
                      />
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
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-5 mt-5 flex h-screen items-center justify-center max-sm:hidden">
        <div>
          <Image
            src="\passport-map-full.svg"
            alt="passport"
            width={700}
            height={700}
            priority
          />
        </div>
        <div className="absolute flex h-full max-h-[540px] w-full max-w-[700px] flex-auto items-center justify-center p-10">
          <div className="flex h-full max-h-[460px] w-full max-w-[620px] flex-col">
            <div className="flex h-full w-full items-start justify-center pt-3">
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
          className="bottom-10"
        />
      </div>
    </main>
  )
}

export default Map
