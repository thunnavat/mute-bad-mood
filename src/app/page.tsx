"use client"
import Image from "next/image"
import ButtonLink from "./components/ButtonLink"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    lightAnimation()
    cloudAnimation()
    logoAnimation()
  }, [])

  const lightAnimation = () => {
    const frames = document.getElementById("animation1")
      ?.children as HTMLCollectionOf<HTMLElement>
    const frameCount = frames?.length
    let f = 0
    setInterval(() => {
      if (frames && frameCount) {
        frames[f % frameCount].style.display = "none"
        frames[++f % frameCount].style.display = "block"
      }
    }, 100)
  }

  const logoAnimation = () => {
    const logo = document.getElementById("logo") as HTMLElement
    let width = 0
    const maxWidth = setInterval(() => {
      logo.style.width = (width += 10) + "px"
      if (screen.width <= 375) {
        if (width === 130) clearInterval(maxWidth)
      } else if (width === 200) {
        clearInterval(maxWidth)
      }
    }, 20)
  }

  const cloudAnimation = () => {
    const cloud1 = document.getElementById("cloud1") as HTMLElement
    const cloud2 = document.getElementById("cloud2") as HTMLElement
    const cloud3 = document.getElementById("cloud3") as HTMLElement
    const start = Date.now()

    const timer = setInterval(() => {
      const timePassed = Date.now() - start

      cloud1.style.left = -(timePassed / 5) + 500 + "px"
      cloud2.style.left = timePassed / 4.9 + -190 + "px"
      cloud3.style.left = -(timePassed / 6) + 450 + "px"

      if (timePassed > 2500) {
        clearInterval(timer)
        cloud1.style.animation = "upToDown 2s infinite"
        cloud2.style.animation = "upToDown 2s infinite"
        cloud3.style.animation = "DownToUp 2s infinite"
      }
    }, 20)
  }

  const renderLightImage = () => {
    const lightImages = []
    for (let i = 0; i <= 15; i++) {
      lightImages.push(
        <Image
          key={i}
          src={`/light/light${i}.svg`}
          alt="light"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="h-full w-[500px] max-w-[1536px] max-ip:w-[450px]"
        />
      )
    }
    return lightImages
  }

  return (
    <main className="h-full w-full bg-gradient-to-t from-[#f3e4c8] from-50% to-white">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div
          id="animation1"
          className="fixed top-6 sm:hidden"
        >
          {renderLightImage()}
        </div>
        <Image
          id="logo"
          src="/Logo.png"
          alt="Logo"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="z-10 h-auto w-[0px]"
        />
        <Image
          id="cloud1"
          src="/Cloud.png"
          alt="Cloud1"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="fixed left-[500px] top-32 h-auto w-[120px] ip:w-[180px] sm:hidden"
        />
        <Image
          id="cloud2"
          src="/Cloud2.png"
          alt="Cloud2"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="fixed -left-[180px]  bottom-80 h-auto w-[120px] ip:w-[180px] sm:hidden"
        />
        <Image
          id="cloud3"
          src="/Cloud.png"
          alt="Cloud3"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="fixed bottom-32 left-[450px] h-auto w-[120px] ip:w-[180px] sm:hidden"
        />
        <ButtonLink
          text="start"
          href="/passport"
          className="absolute bottom-0 sm:static"
        />
      </div>
    </main>
  )
}

export default Home
