"use client"
import ButtonBack from "@/app/components/ButtonBack"
import { Typography } from "antd"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const SiamSie = ({ params }: { params: { sanjao: string } }) => {
  const [isOpened, setIsOpened] = React.useState(false)
  const { Title } = Typography
  let interval: NodeJS.Timeout
  const router = useRouter()
  useEffect(() => {
    clearInterval(interval)
    siamsieAnimation()
    cloudAnimation()
    // textAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened])

  const renderSiamSie = () => {
    const siamsies = []
    for (let i = 0; i <= 15; i++) {
      siamsies.push(
        <Image
          key={i}
          src={`/siamsie/siamsie${i}.svg`}
          alt={`siam-sie${i}`}
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="h-auto w-[180px] ip:w-[220px]"
        />
      )
    }
    return siamsies
  }

  const renderSiamSieOpen = () => {
    const siamsiesOpen = []
    for (let i = 16; i <= 46; i++) {
      siamsiesOpen.push(
        <Image
          key={i}
          src={`/siamsie/siamsie${i}.svg`}
          alt={`siam-sie${i}`}
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="h-auto w-[180px] ip:w-[220px]"
        />
      )
    }
    return siamsiesOpen
  }

  let i = 0
  const siamsieAnimation = () => {
    const framesClose = document.getElementById("animation1")
      ?.children as HTMLCollectionOf<HTMLElement>
    const framesOpen = document.getElementById("animation2")
      ?.children as HTMLCollectionOf<HTMLElement>
    const frameCloseCount = 16
    const frameOpenCount = 31
    let f = 0
    interval = setInterval(() => {
      if (framesClose && frameCloseCount && !isOpened) {
        framesClose[f % frameCloseCount].style.display = "none"
        framesClose[++f % frameCloseCount].style.display = "block"
      } else if (framesOpen && frameOpenCount && isOpened) {
        framesOpen[f % frameOpenCount].style.display = "none"
        framesOpen[++f % frameOpenCount].style.display = "block"
        setTimeout(() => {
          clearInterval(interval)
          if (i === 0) {
            const number = getRandomInt(12)
            router.push(`/map/${params.sanjao}/${number}`)
            i++
          }
        }, 2900)
      }
    }, 100)
  }

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max - 1 + 1) + 1)
  }

  const cloudAnimation = () => {
    const cloud1 = document.getElementById("cloud1") as HTMLElement
    const cloud2 = document.getElementById("cloud2") as HTMLElement

    cloud1.style.animation = "upToDown 2s infinite"
    cloud2.style.animation = "upToDown 2s infinite"
  }

  return (
    <main className="flex h-screen w-screen flex-col bg-custom-400 overflow-y-hidden">
      <ButtonBack
        href={`/map/${params.sanjao}`}
        secondary={true}
      />
      <div className="relative h-screen">
        <div className="grid grid-cols-1">
          <Image
            id="cloud1"
            src="/Cloud.png"
            alt="Cloud1"
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="-mb-7 h-auto w-[120px] ip:w-[180px] sm:hidden"
          />
          <Title
            id="wish"
            className="!mb-0 flex justify-center !font-anuphan !text-xl !font-normal"
          >
            โปรดตั้งจิตอธิษฐาน
          </Title>
          <Image
            id="cloud2"
            src="/Cloud2.png"
            alt="Cloud2"
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="-mt-7 h-auto w-[120px] justify-self-end ip:w-[180px] sm:hidden"
          />
        </div>
        <div
          id="animation1"
          className={`absolute -bottom-20 flex w-full justify-center ${
            isOpened ? "hidden" : ""
          }`}
          onClick={() => {
            setIsOpened(!isOpened)
            clearInterval(interval)
          }}
        >
          {renderSiamSie()}
        </div>
        <div
          id="animation2"
          className={`absolute -bottom-20 flex w-full justify-center ${
            isOpened ? "" : "hidden"
          }`}
        >
          {renderSiamSieOpen()}
        </div>
      </div>
    </main>
  )
}

export default SiamSie
