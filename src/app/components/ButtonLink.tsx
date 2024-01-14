'use client'
import Link from "next/link"
import React from "react"

interface IButtonLinkProps {
  text: string
  href: string
  disabled?: boolean
}

const ButtonLink = ({ text, href, disabled }: IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center"
    >
      <button className="my-5 w-10/12 max-w-md rounded-[48px] bg-gray-800 disabled:opacity-0" disabled={disabled}>
        <p className="p-4 uppercase text-white font-bold text-xl">{text}</p>
      </button>
    </Link>
  )
}

export default ButtonLink
