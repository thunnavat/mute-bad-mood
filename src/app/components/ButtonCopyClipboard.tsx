"use client"
import React from "react"
import Image from "next/image"
import { message } from "antd"

interface IButtonDownloadProps {
  cardNumber: number
  className?: string
  disabled?: boolean
}

const ButtonCopyClipboard = ({
  cardNumber,
  disabled,
  className
}: IButtonDownloadProps) => {
  const baseURL: string = "https://mute-bad-mood.vercel.app/"
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${baseURL}/sharecard/${cardNumber}`
    )
    message.success("Copied Link.")
  }
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative flex items-start justify-end">
        {/* <span className="absolute flex h-[14px] w-[14px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D83A40] opacity-75"></span>
          <span className="relative inline-flex h-[14px] w-[14px] rounded-full bg-[#D83A40]"></span>
        </span> */}
        <button
          className="rounded-full bg-white shadow-md hover:bg-opacity-85 active:bg-gray-300 disabled:opacity-0"
          disabled={disabled}
          onClick={handleCopy}
        >
          <div className="flex flex-row p-4 ">
            <Image
              src="/copy.svg"
              alt="copy"
              width={20}
              height={20}
            />
            {/* <p className="p-1 font-sans text-sm font-bold capitalize text-white">
              Download bg-[#D83A40]
            </p> */}
          </div>
        </button>
      </div>
    </div>
  )
}

export default ButtonCopyClipboard
