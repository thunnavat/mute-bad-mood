"use client"
import Link from "next/link"
import React from "react"

interface IButtonLinkProps {
  text: string
  href: string
  className?: string
  disabled?: boolean
}

const ButtonLink = ({ text, href, disabled, className }: IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center w-screen ${className}`}
    >
      <button
        className="my-5 w-10/12 max-w-[400px] rounded-[48px] bg-gray-800 disabled:opacity-0"
        disabled={disabled}
      >
        <p className="p-4 text-xl font-bold uppercase text-white">{text}</p>
      </button>
    </Link>
  )
}

export default ButtonLink
