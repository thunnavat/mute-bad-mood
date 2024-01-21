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
        <main className="h-full w-full overflow-x-hidden">
          <div className="relative h-screen sm:grid sm:grid-cols-1 sm:items-center">
            <div className="absolute -right-28 -top-32 z-10 max-se:-right-36 ip:top-4 sm:relative sm:flex sm:justify-center sm:left-0 sm:top-0">
              <div className="relative">
                <Image
                  src="/Passsport-open.svg"
                  alt="Passsport-open"
                  width="0"
                  height="0"
                  sizes="100vw"
                  priority
                  className="h-auto w-[400px]"
                />
                <div className="absolute bottom-20 left-14">
                  <Title className="!font-sen !text-xl !font-extrabold uppercase !text-blue-980">
                    your name.
                  </Title>
                  <Input
                    placeholder="Enter your name"
                    bordered={false}
                    onChange={handleNameChange}
                    className="!mb-3 !p-0 !font-sen !text-base !font-semibold !tracking-wider"
                    value={name}
                  />
                  <Title className="!font-sen !text-xl !font-extrabold uppercase !text-blue-980">
                    date of birth.
                  </Title>
                  <DatePicker
                    className="overflow-auto !border-none !p-0 !font-sen !text-base !font-semibold !tracking-wider"
                    onChange={handleDateChange}
                    onFocus={(e) => (e.target.readOnly = true)}
                    value={dateOfBirth}
                  />
                </div>
              </div>
            </div>
            <div className="relative h-full sm:h-auto">
              <Image
                src="/Passsport-close.svg"
                alt="Passsport-close"
                width="0"
                height="0"
                sizes="100vw"
                priority
                className="absolute -left-24 top-12 h-auto w-[350px] max-se:top-28 ip:top-52 sm:hidden"
              />

              <ButtonLink
                href="/map"
                text="next"
                className={`${
                  name && dateOfBirth ? "absolute bottom-0 sm:static" : "hidden"
                }`}
              />
            </div>
          </div>
        </main>
      </SlideTransition>
    </>
  )
}

export default PassportPage
