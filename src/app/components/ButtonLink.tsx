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
      className="mx-auto flex items-center justify-center"
    >
      <button className="absolute bottom-10 w-full max-w-60 rounded-[48px] bg-gray-800">
        <p className="p-3 uppercase text-white">{text}</p>
      </button>
    </Link>
  )
}

export default ButtonLink
