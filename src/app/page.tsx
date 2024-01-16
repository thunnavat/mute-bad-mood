"use client"
import Image from "next/image"
import ButtonLink from "./components/ButtonLink"

const Home = () => {
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      const frames = document.getElementById("animation")
        ?.children as HTMLCollectionOf<HTMLElement>
      const frameCount = frames?.length
      let f = 0
      setInterval(() => {
        if (frames && frameCount) {
          frames[f % frameCount].style.display = "none"
          frames[++f % frameCount].style.display = "block"
        }
      }, 100)
    })
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
          className="h-full w-[500px] max-w-[1536px]"
        />
      )
    }
    return lightImages
  }

  return (
    <main className="h-full w-full">
      <div className="flex min-h-screen items-center justify-center">
        <div
          id="animation"
          className="fixed top-6 hidden"
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
          className="fixed z-10 mb-32 h-auto w-[100px]"
        />
        <Image
          src="/Cloud.png"
          alt="Cloud1"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="cloud fixed left-0 top-32 hidden h-auto w-[120px] ip:w-[180px]"
        />
        <Image
          src="/Cloud.png"
          alt="Cloud2"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="cloud fixed bottom-32 left-8 hidden h-auto w-[120px] ip:w-[180px]"
        />
        <Image
          src="/Cloud.png"
          alt="Cloud3"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="cloud fixed -right-[70px] bottom-80 hidden h-auto w-[120px] scale-x-[-1] ip:w-[180px]"
        />
        <ButtonLink
          text="start"
          href="/passport"
          className="fixed bottom-10 w-full max-w-[400px]"
        />
      </div>
    </main>
  )
}

export default Home
