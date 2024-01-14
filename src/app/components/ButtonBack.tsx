import Image from "next/image";
import Link from "next/link"
import React from "react"

interface IButtonLinkProps {
  href: string
}

const ButtonBack = ({ href }: IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center mx-5 my-5"
    >
      <button className="h-12 w-12 rounded-full bg-[#99c2eb] flex items-center justify-center">
      <Image
        src="\chevron-left.svg"
        alt="chevron_left"
        width={40}
        height={40}
        priority
      />
      </button>
    </Link>
  )
}

export default ButtonBack
