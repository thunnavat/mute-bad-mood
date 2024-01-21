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
    <div className={`flex w-screen items-center justify-center ${className}`}>
      <Link
        href={href}
        className="flex my-5 w-10/12 max-w-[400px]"
      >
        <button
          className="w-full rounded-[48px] bg-gray-800 disabled:opacity-0"
          disabled={disabled}
        >
          <p className="p-4 text-xl font-bold uppercase text-white">{text}</p>
        </button>
      </Link>
    </div>
  )
}

export default ButtonLink
