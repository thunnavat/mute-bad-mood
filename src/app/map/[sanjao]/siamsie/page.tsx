"use client"
import ButtonBack from "@/app/components/ButtonBack"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const SiamSie = () => {
  const [isOpened, setIsOpened] = React.useState(false)
  let interval: NodeJS.Timeout
  const router = useRouter()
  useEffect(() => {
    clearInterval(interval)
    siamsieAnimation()
    
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
          className="h-auto w-[300px] "
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
          className="h-auto w-[300px] "
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
        console.log(f % frameCloseCount)
      } else if (framesOpen && frameOpenCount && isOpened) {
        framesOpen[f % frameOpenCount].style.display = "none"
        framesOpen[++f % frameOpenCount].style.display = "block"
        console.log(f % frameOpenCount)
        setTimeout(() => {
          clearInterval(interval)
          console.log("clear")
          if (i === 0) {
            const number = getRandomInt(10)
            router.push(`/map/location1/${number}`)
            i++
          }
        }, 2900)
      }
    }, 100)
  }

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max - 1 + 1) + 1)
  }

  return (
    <main className="flex h-screen w-screen flex-col bg-[#99c2eb]">
      <ButtonBack
        href="/map"
        secondary={true}
      />
      <div
        id="animation1"
        className={`fixed -bottom-20 flex w-full justify-center ${isOpened ? "hidden" : ""}`}
        onClick={() => {
          setIsOpened(!isOpened)
          clearInterval(interval)
        }}
      >
        {renderSiamSie()}
      </div>
      <div
        id="animation2"
        className={`fixed -bottom-20 flex w-full justify-center ${isOpened ? "" : "hidden"}`}
      >
        {renderSiamSieOpen()}
      </div>
    </main>
  )
}

export default SiamSie
