import Link from "next/link"
import React from "react"

interface IButtonLinkProps {
  text: string
  href: string
}

const ButtonLink = ({ text, href }: IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="flex mx-auto justify-center items-center"
    >
      <button className="bg-gray-800 w-full max-w-60 absolute bottom-10 rounded-[48px]">
        <p className="text-white p-3 uppercase">{text}</p>
      </button>
    </Link>
  )
}

export default ButtonLink
