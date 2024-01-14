import Link from "next/link"
import React from "react"

interface IButtonLinkProps {
  text: string
  href: string
  className?: string
}

const ButtonLink = ({ text, href, className }: IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={` ${className}`}
    >
      <button className="w-full rounded-[48px] bg-gray-800">
        <p className="p-3 uppercase text-white">{text}</p>
      </button>
    </Link>
  )
}

export default ButtonLink
