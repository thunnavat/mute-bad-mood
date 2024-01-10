import Image from "next/image"
import ButtonLink from "./components/ButtonLink"

const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="flex justify-center ">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={500}
          height={500}
          priority
        />
      </div>
      <ButtonLink
        text="start"
        href="/passport"
      />
    </main>
  )
}

export default Home
