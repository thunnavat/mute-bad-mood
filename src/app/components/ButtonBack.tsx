import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IButtonLinkProps {
  href: string
  className?: string
  secondary?: boolean
}

const ButtonBack = ({ href, className, secondary }: IButtonLinkProps) => {
  if (secondary == true) {
    return (
      <Link
        href={href}
        className={`mx-5 my-5 flex items-center ${className}`}
      >
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6E6C8]">
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
        className={`mx-5 my-5 flex items-center ${className}`}
      >
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6AB3B6]">
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
