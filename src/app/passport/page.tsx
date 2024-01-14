"use client"
import React, { useState } from "react"
import Image from "next/image"
import ButtonLink from "../components/ButtonLink"
import { Input, Typography } from "antd"

const PassportPage = () => {
  const { Title } = Typography
  const [name, setName] = useState<string>()

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <>
      <div className="flex min-h-screen w-full justify-center">
        <div className="fixed -left-[100px] top-16 flex justify-center ip:top-64 sm:hidden sm:w-full">
          <Image
            src="/Passsport-close.svg"
            alt="Passsport-close"
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="h-auto w-[350px]"
          />
        </div>
        <div className="relative -top-32 mr-40 justify-center ip:top-10 sm:-top-[430px] sm:mr-0 sm:flex sm:w-full sm:self-center">
          <div className="fixed min-w-[400px]">
            <Image
              src="/Passsport-open.svg"
              alt="Passsport-open"
              width="0"
              height="0"
              sizes="100vw"
              priority
              className="h-auto w-[400px]"
            />
          </div>
          <div className="fixed ml-11 mt-[308px] w-[200px] sm:-ml-28">
            <Title className="!mb-5 !pl-[11px] !font-sen !text-xl !font-extrabold uppercase !text-blue-980">
              <p className="!mb-0">Enter</p>
              <p className="!mb-0">your name.</p>
            </Title>
            <Input
              placeholder="Enter your name"
              bordered={false}
              onChange={handleNameChange}
              className="!font-sen !text-base !font-semibold !tracking-wider"
            />
          </div>
        </div>
        <ButtonLink
          href="/map"
          text="next"
          className={`${
            name ? "fixed bottom-4 w-full max-w-[400px]" : "hidden"
          }`}
        />
      </div>
    </>
  )
}

export default PassportPage
