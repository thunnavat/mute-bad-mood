import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IButtonLinkProps {
  href: string
  secondary?: boolean
}

const ButtonBack = ({ href, secondary }: IButtonLinkProps) => {
  if (secondary == true) {
    return (
      <Link
        href={href}
        className="mx-5 my-5 flex items-center"
      >
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e4c8]">
          <Image
            src="/chevron-left-secondary.svg"
            alt="chevron_left"
            width={40}
            height={40}
            priority
          />
        </button>
      </Link>
    )
  } else {
    return (
      <Link
        href={href}
        className="mx-5 my-5 flex items-center"
      >
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#99c2eb]">
          <Image
            src="/chevron-left-primary.svg"
            alt="chevron_left"
            width={40}
            height={40}
            priority
          />
        </button>
      </Link>
    )
  }
}

export default ButtonBack
