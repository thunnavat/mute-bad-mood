import React from "react"

interface ITextparagraphProps {
  name: string
}

const Textparagraph = ({ name }: ITextparagraphProps) => {
  if (name === "location1") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="pt-3 font-anuphan text-2xl font-semibold">ประวัติ</h2>
        <p className="mx-5 mt-3 text-justify font-anuphan text-base font-extralight tracking-wide indent-6">
          “ศาลเจ้าเล่าปุนเถ้ากง” ศาลเจ้าที่มีประวัติความเป็นมากว่าศตวรรษ
          เป็นศูนย์รวมความศรัทธาของชาวจีนมาตั้งแต่ยุคต้นกรุงรัตนโกสินทร์
          ชาวจีนอพยพจึงได้ตั้งศาลเจ้าเพื่อเป็นที่เคารพบูชา
          และเป็นที่ยึดเหนี่ยวทางจิตใจ
          เพื่อขอให้อำนาจสิ่งศักดิ์สิทธิ์ปกป้องคุ้มครองในการดำเนินชีวิตประจำวัน
          และทำกิจการค้าขายโดยเฉพาะชาวจีนแต้จิ๋ว
        </p>
        <p className="mx-5 mb-8 mt-3 text-justify font-anuphan text-base font-extralight tracking-wide indent-6">
          นอกจากนี้ ในอดีตการเดินทางออกจากแผ่นดินจีนเป็นไปด้วยความยากลำบาก
          ต้องล่องเรือฝ่าคลื่นลมรอนแรมมาเป็นแรมเดือน ดังนั้นการนับถือเทพเจ้า
          เพราะเชื่อว่าเทพเจ้าจะช่วยคุ้มครอง และช่วยเหลือ
          เมื่อต้องเผชิญกับอุปสรรคหรือปัญหา
          รวมทั้งทำให้มีความปลอดภัยประสบความสำเร็จในการทำงาน
          ศาลเจ้าจึงสร้างขึ้นจากความศรัทธาของชาวจีนอพยพ โดย “ปุนเถ้ากง”
          ภาษาแต้จิ๋ว หมายถึง ชุมชนดั้งเดิม เล่าปุนเถ้ากง
          จึงสื่อถึงเทพเจ้าที่คุ้มครองรักษาชุมชนดั้งเดิม
          เปรียบเสมือนเทพผู้เป็นใหญ่ในท้องที่แห่งนั้น
        </p>
      </div>
    )
  } else if (name === "location2") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="pt-3 font-anuphan text-2xl font-semibold">ประวัติ</h2>
        <p className="mx-5 mt-3 text-justify indent-6 font-anuphan text-base font-extralight tracking-wide">
          ประวัติเล่าว่า ในสมัยก่อนเจ้าพ่อเป็นนักรบ
          ทำความดีไว้มากมายได้อัญเชิญมาจากประเทศจีนให้คนที่ทำธุรกิจการค้ามาไหว้ขอพรจะได้มีผลการค้าเจริญรุ่งเรืองเล่าขานกันต่อ
          ๆ มาว่าในช่วงสงครามโลกครั้งที่ 2
          ขณะที่เครื่องบินกำลังทิ้งระเบิดในบริเวณบ้านหม้อเจ้าพ่อได้ปัดระเบิดไปลงที่สะพานพุทธทำให้ผู้คนในบริเวณดังกล่าวต่างนับถือและกราบไหว้ตลอดมาจนถึงปัจจุบัน
        </p>
        <p className="mx-5 mb-8 mt-3 text-justify indent-6 font-anuphan text-base font-extralight tracking-wide">
          ศาลเจ้าบ้านหม้อ เดิมเป็นเพียงศาลพระภูมิเล็กๆ มีมานานกว่า 100 ปี แล้ว
          เป็นที่นับถือของชาวจีน เชื่อกันว่ามีความศักดิ์สิทธิ์ในทุก ๆ ด้าน ผู้ใด
          ให้ความเคารพนับถือกราบไหว้อธิษฐานประสงค์สิ่งใด ก็มักจะสมปรารถนา
          ค้าขายดี กิจการค้าเจริญรุ่งเรือง กล่าวขานกันสืบต่อมา
        </p>
      </div>
    )
  } else if (name === "location3") {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-[40px] border-[5px] border-solid border-black bg-white shadow-[5px_3px_0px_#000000] max-sm:w-10/12 max-sm:max-w-md sm:w-10/12 sm:max-w-xl">
        <h2 className="pt-3 font-anuphan text-2xl font-semibold">ประวัติ</h2>
        <p className="mx-5 mb-8 mt-3 text-justify indent-6 font-anuphan text-base font-extralight tracking-wide">
          ศาลเจ้าแม่ทับทิม ซึ่งชาวจีนเชื่อว่าเป็นเทพเจ้าแห่งท้องน้ำ
          ที่ชาวเรือจีนจากแดนไกลเคารพบูชามาตั้งแต่บรรพบุรุษ
          ด้วยเชื่อว่าจะเสริมความร่ำรวย รุ่งโรจน์สำหรับคนที่มาขอพรกับท่าน
          ผู้คนจึงนิยมมากราบสักการะขอพรในเรื่องการค้าขาย ทำมาหากินเจริญรุ่งเรือง
          ชาวจีนขนานนามเจ้าแม่ทับทิมว่า เจ้าแม่แห่งความเมตตา บ้างก็เรียกว่า
          “เจ้าแม่จุ้ยป่วยเนี้ยว” หรือ “เจ้าแม่ชายน้ำ” ศาลเจ้าแม่ทับทิม พาหุรัด
          สร้างขึ้นเมื่อประมาณ พ.ศ.2443 ในสัมยรัชกาลที่ 5
          อยู่ไม่ไกลจากโรงไฟฟ้าวัดเลียบ โดยมีชื่อเสียงในตอนสงครามโลกครั้งที่ 2
          ที่ฝ่ายพันธมิตรทำการทิ้งระเบิดลงที่โรงไฟฟ้าวัดเลียบ
          แรงระเบิดทำให้พื้นที่โดยรอบพัง เสียหาย
          ยกเว้นศาลเจ้าแม่ทับทิมที่ยังคงสภาพ
          ด้วยความศรัทธาจึงได้มีการร่วมระดมทุนกันสร้างศาลเจ้าหลังใหม่ เมื่อพ.ศ.
          2496 และมีการฉลองการสร้างเสร็จใน พ.ศ.2498
        </p>
      </div>
    )
  }
}

export default Textparagraph
