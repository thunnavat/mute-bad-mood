"use client"
import ButtonBack from "@/app/components/ButtonBack"
import ButtonLink from "@/app/components/ButtonLink"
import BoxStory from "@/app/components/BoxStory"
import Image from "next/image"
import SlideTransition from "@/app/components/SlideTransition"
import { useState } from "react"
import { Button, Modal } from "antd"

const Sanjao = ({ params }: { params: { sanjao: string } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  let location: string = ""
  let img: string = ""
  let url: string = ""
  let god: string = ""
  let size: number = 0
  let map: string = ""
  if (params.sanjao === "location1") {
    location = "ศาลเจ้าพ่อต้นไทร"
    god = "เทพเจ้ากวนอู"
    img = "/location-1.png"
    size = 230
    url = "/map/location1/siamsie"
    map =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5619481974336!2d100.4915151!3d13.7449504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2995af806ebf3%3A0x680cb2d324d7b343!2z4Lio4Liy4Lil4LmA4LiI4LmJ4Liy4Lib4Li24LiH4LmA4LiS4LmI4Liy4LiB4LiHICjguYDguIjguYnguLLguJ7guYjguK3guJXguYnguJnguYTguJfguKMp!5e0!3m2!1sen!2sth!4v1705915681246!5m2!1sen!2sth"
  } else if (params.sanjao === "location2") {
    location = "ศาลเจ้าเล่าปึงเถ่ากง"
    god = "เทพเจ้าเล่าปึงเถ่ากง"
    img = "/location-2.png"
    size = 230
    url = "/map/location2/siamsie"
    map =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5712283303!2d100.4973551!3d13.744389499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991b1f3459ab%3A0x684c23a5a2d54961!2z4Lio4Liy4Lil4LmA4LiI4LmJ4Liy4Lia4LmJ4Liy4LiZ4Lir4Lih4LmJ4Lit4LmA4Lil4LmI4Liy4Lib4Li24LiH4LmA4LiW4LmI4Liy4LiB4LiH!5e0!3m2!1sen!2sth!4v1705911964634!5m2!1sen!2sth"
  } else if (params.sanjao === "location3") {
    location = "ศาลเจ้าแม่ทับทิม"
    god = "เจ้าแม่ทับทิม"
    img = "/location-3.png"
    size = 230
    url = "/map/location3/siamsie"
    map =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.589688221241!2d100.5011936!3d13.7432737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991bdc5b1067%3A0x914c7e2618d67d1!2z4Lio4Liy4Lil4LmA4LiI4LmJ4Liy4LmB4Lih4LmI4LiX4Lix4Lia4LiX4Li04LihIOC4nuC4suC4q-C4uOC4o-C4seC4lCBDaGFvIE1hZSBUaGFwdGhpbSBTaHJpbmU!5e0!3m2!1sen!2sth!4v1705915731184!5m2!1sen!2sth"
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <main className="max-h-auto flex h-auto w-screen flex-col bg-custom-200">
      <ButtonBack href="/map" />
      <SlideTransition>
        <div className="max-h-auto flex h-auto w-screen flex-col items-center justify-start">
          <div className="sm:mb-5">
            <Image
              src={img}
              alt="san-jao"
              height={0}
              width={size}
              priority
            />
          </div>
          <div className="relative flex items-center justify-center rounded-[50px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
            <div>
              <h1 className="pt-2 text-center font-anuphan text-2xl font-semibold capitalize tracking-normal">
                {location}
              </h1>
              <h1 className="text-md pb-2 text-center font-anuphan font-semibold capitalize tracking-normal">
                {god}
              </h1>
            </div>
            <div className="max-ip:ml-1 ip:absolute right-3 ">
              <Image
                id="maps"
                src="/maps.svg"
                alt="maps"
                width="0"
                height="0"
                sizes="100vw"
                priority
                className="h-auto w-[45px]"
                onClick={showModal}
              />
              <Modal
                title={location}
                className="!font-anuphan"
                open={isModalOpen}
                onCancel={handleClose}
                footer={
                  <>
                    <Button
                      onClick={handleClose}
                      className="!bg-gray-800 !font-sen !text-white"
                    >
                      Close
                    </Button>
                  </>
                }
              >
                <iframe
                  src={map}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </Modal>
            </div>
          </div>
          <BoxStory name={params.sanjao} />
        </div>
        <div>
          <ButtonLink
            text="Next"
            href={url}
            className=""
          />
        </div>
      </SlideTransition>
    </main>
  )
}

export default Sanjao
