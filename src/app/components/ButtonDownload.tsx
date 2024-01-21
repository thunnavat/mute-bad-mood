"use client"
import React from "react"
import { saveAs } from "file-saver"
import Image from "next/image"

interface IButtonDownloadProps {
  cardNumber: number
  className?: string
  disabled?: boolean
}

const ButtonDownload = ({
  cardNumber,
  disabled,
  className
}: IButtonDownloadProps) => {
  const downloadImg = () => {
    saveAs(`/card/download/${cardNumber}.png`, `Mutemood_Card.png`)
  }
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative flex items-start justify-end">
        <span className="absolute flex h-[14px] w-[14px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D83A40] opacity-75"></span>
          <span className="relative inline-flex h-[14px] w-[14px] rounded-full bg-[#D83A40]"></span>
        </span>
        <button
          className="rounded-full bg-white shadow-md hover:bg-opacity-85 active:bg-gray-300 disabled:opacity-0"
          disabled={disabled}
          onClick={downloadImg}
        >
          <div className="flex flex-row p-4 ">
            <Image
              src="/download.svg"
              alt="download"
              width={20}
              height={20}
            />
            {/* <p className="p-1 font-sans text-sm font-bold capitalize text-white">
              Download
            </p> */}
          </div>
        </button>
      </div>
    </div>
  )
}

export default ButtonDownload
