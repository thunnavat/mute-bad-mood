import React from "react"

interface ITextparagraphProps {
  name: string
}

const Textparagraph = ({ name }: ITextparagraphProps) => {
  if (name === "location1") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="pt-3 font-sriracha text-2xl font-semibold">ประวัติ</h2>
        <p className="mx-5 mt-3 text-justify font-anuphan text-base font-extralight tracking-wide">
          ประวัติเล่าว่า ในสมัยก่อนเจ้าพ่อเป็นนักรบ
          ทำความดีไว้มากมายได้อัญเชิญมาจากประเทศจีนให้คนที่ทำธุรกิจการค้ามาไหว้ขอพรจะได้มีผลการค้าเจริญรุ่งเรืองเล่าขานกันต่อ
          ๆ มาว่าในช่วงสงครามโลกครั้งที่ 2
          ขณะที่เครื่องบินกำลังทิ้งระเบิดในบริเวณบ้านหม้อเจ้าพ่อได้ปัดระเบิดไปลงที่สะพานพุทธทำให้ผู้คนในบริเวณดังกล่าวต่างนับถือและกราบไหว้ตลอดมาจนถึงปัจจุบัน
        </p>
        <p className="mx-5 mb-8 mt-3 text-justify font-anuphan text-base font-extralight tracking-wide">
          ศาลเจ้าบ้านหม้อ เดิมเป็นเพียงศาลพระภูมิเล็กๆ มีมานานกว่า 100 ปี แล้ว
          เป็นที่นับถือของชาวจีน เชื่อกันว่ามีความศักดิ์สิทธิ์ในทุก ๆ ด้าน ผู้ใด
          ให้ความเคารพนับถือกราบไหว้อธิษฐานประสงค์สิ่งใด ก็มักจะสมปรารถนา
          ค้าขายดี กิจการค้าเจริญรุ่งเรือง กล่าวขานกันสืบต่อมา
        </p>
      </div>
    )
  } else if (name === "location2") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="pt-3 font-sriracha text-2xl font-semibold">ประวัติ</h2>
        <p className="mx-5 mt-3 text-justify font-sarabun text-base font-extralight tracking-wide">
          ประวัติเล่าว่า ในสมัยก่อนเจ้าพ่อเป็นนักรบ
          ทำความดีไว้มากมายได้อัญเชิญมาจากประเทศจีนให้คนที่ทำธุรกิจการค้ามาไหว้ขอพรจะได้มีผลการค้าเจริญรุ่งเรืองเล่าขานกันต่อ
          ๆ มาว่าในช่วงสงครามโลกครั้งที่ 2
          ขณะที่เครื่องบินกำลังทิ้งระเบิดในบริเวณบ้านหม้อเจ้าพ่อได้ปัดระเบิดไปลงที่สะพานพุทธทำให้ผู้คนในบริเวณดังกล่าวต่างนับถือและกราบไหว้ตลอดมาจนถึงปัจจุบัน
        </p>
        <p className="mx-5 mb-8 mt-3 text-justify font-sarabun text-base font-extralight tracking-wide"></p>
      </div>
    )
  } else if (name === "location3") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="pt-3 font-sriracha text-2xl font-semibold">ประวัติ</h2>
        <p className="mx-5 mt-3 text-justify font-sarabun text-base font-extralight tracking-wide">
          ประวัติเล่าว่า ในสมัยก่อนเจ้าพ่อเป็นนักรบ
          ทำความดีไว้มากมายได้อัญเชิญมาจากประเทศจีนให้คนที่ทำธุรกิจการค้ามาไหว้ขอพรจะได้มีผลการค้าเจริญรุ่งเรืองเล่าขานกันต่อ
          ๆ มาว่าในช่วงสงครามโลกครั้งที่ 2
          ขณะที่เครื่องบินกำลังทิ้งระเบิดในบริเวณบ้านหม้อเจ้าพ่อได้ปัดระเบิดไปลงที่สะพานพุทธทำให้ผู้คนในบริเวณดังกล่าวต่างนับถือและกราบไหว้ตลอดมาจนถึงปัจจุบัน
        </p>
        <p className="mx-5 mb-8 mt-3 text-justify font-sarabun text-base font-extralight tracking-wide">
          ศาลเจ้าบ้านหม้อ เดิมเป็นเพียงศาลพระภูมิเล็กๆ มีมานานกว่า 100 ปี แล้ว
          เป็นที่นับถือของชาวจีน เชื่อกันว่ามีความศักดิ์สิทธิ์ในทุก ๆ ด้าน ผู้ใด
          ให้ความเคารพนับถือกราบไหว้อธิษฐานประสงค์สิ่งใด ก็มักจะสมปรารถนา
          ค้าขายดี กิจการค้าเจริญรุ่งเรือง กล่าวขานกันสืบต่อมา ศาลเจ้าบ้านหม้อ
          เดิมเป็นเพียงศาลพระภูมิเล็กๆ มีมานานกว่า 100 ปี แล้ว
          เป็นที่นับถือของชาวจีน เชื่อกันว่ามีความศักดิ์สิทธิ์ในทุก ๆ ด้าน ผู้ใด
          ให้ความเคารพนับถือกราบไหว้อธิษฐานประสงค์สิ่งใด ก็มักจะสมปรารถนา
          ค้าขายดี กิจการค้าเจริญรุ่งเรือง กล่าวขานกันสืบต่อมา
        </p>
      </div>
    )
  }
}

export default Textparagraph
