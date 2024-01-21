"use client"
import React, { useState } from "react"
import Image from "next/image"
import ButtonLink from "../components/ButtonLink"
import { Input, Typography, DatePicker } from "antd"
import SlideTransition from "../components/SlideTransition"
import { Dayjs } from "dayjs"

const PassportPage = () => {
  const { Title } = Typography
  const [name, setName] = useState<string>()
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>()

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleDateChange = (date: Dayjs | null) => {
    setDateOfBirth(date)
  }

  return (
    <>
      <SlideTransition>
        <div className="flex min-h-screen w-full justify-center bg-custom-200">
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
              <Title className="!mb-0 !pl-[11px] !font-sen !text-xl !font-extrabold uppercase !text-blue-980">
                your name.
              </Title>
              <Input
                placeholder="Enter your name"
                bordered={false}
                onChange={handleNameChange}
                className="!mb-3 !font-sen !text-base !font-semibold !tracking-wider"
                
                value={name}
              />
              <Title className="!mb-0 !pl-[11px] !font-sen !text-xl !font-extrabold uppercase !text-blue-980">
                date of birth.
              </Title>
              <DatePicker
                className="!border-none !font-sen !text-base !font-semibold !tracking-wider"
                onChange={handleDateChange}
                onFocus={(e) => e.target.readOnly = true}
                value={dateOfBirth}
              />
            </div>
          </div>
          <ButtonLink
            href="/map"
            text="next"
            className={`${
              name && dateOfBirth ? "fixed bottom-4 w-full max-w-[400px]" : "hidden"
            }`}
          />
        </div>
      </SlideTransition>
    </>
  )
}

export default PassportPage
