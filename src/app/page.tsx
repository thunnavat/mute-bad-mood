import Image from "next/image"
import ButtonLink from "./components/ButtonLink"

const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="flex min-h-screen items-center justify-center">
        <Image
          src="/Logo.png"
          alt="Logo"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="fixed z-10 h-auto w-[200px]"
        />
        <Image
          src="/Cloud.png"
          alt="Cloud1"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="fixed left-0 top-32 h-auto w-[150px]"
        />
        <Image
          src="/Cloud.png"
          alt="Cloud2"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="fixed bottom-32 left-8 h-auto w-[150px]"
        />
        <Image
          src="/Cloud.png"
          alt="Cloud3"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="fixed -right-14 bottom-80 scale-x-[-1] h-auto w-[150px]"
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
