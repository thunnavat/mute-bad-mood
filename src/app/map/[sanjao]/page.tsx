import ButtonBack from "@/app/components/ButtonBack";
import ButtonLink from "@/app/components/ButtonLink";
import Image from "next/image";
import { promises as fs } from 'fs';

const Sanjao = async ({ params }: { params: { sanjao: string } }) => {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    const data = JSON.parse(file);
    const Location: string[] = data.location
    const LocationDetail: string[] = data.locationdetail
    let location: string = ""
    let location_detail: string = ""
    let img: string = ""
    let url: string = ""
    if (params.sanjao === "location1") {
        location = Location[0]
        location_detail = LocationDetail[0]
        img = "/san-jao-1.png"
        url = "/map/location1/siamsie";
    } else if (params.sanjao === "location2") {
        location = Location[1]
        location_detail = LocationDetail[1]
        img = "/san-jao-2.png"
        url = "/map/location2/siamsie";
    } else if (params.sanjao === "location3") {
        location = Location[2]
        location_detail = LocationDetail[2]
        img = "/san-jao-3.png"
        url = "/map/location3/siamsie";
    }
    return (
        <main className="h-screen w-screen flex flex-col">
            <ButtonBack 
            href="/map"/>
            <div className="flex flex-col h-screen w-screen items-center justify-start">
                <div className="sm:mb-5 max-sm:my-5 ">
                    <Image
                    src={img}
                    alt="san-jao"
                    height={160}
                    width={160}
                    />
                </div>
                <div className="flex justify-center items-center max-sm:max-w-md max-sm:w-10/12 sm:max-w-xl sm:w-10/12 bg-white rounded-[50px] border-[7px] border-solid border-black shadow-[5px_3px_0px_#000000]">
                    <h1 className="text-2xl font-semibold capitalize p-2">{location}</h1>
                </div>
                <div className="flex flex-col justify-center items-center mt-8 max-sm:max-w-md max-sm:w-10/12 sm:max-w-xl sm:w-10/12 bg-white rounded-[50px] border-[7px] border-solid border-black shadow-[5px_3px_0px_#000000]">
                    <h2 className="text-2xl font-semibold pt-5">ประวัติ</h2>
                    <p className="text-justify mx-5 mt-5 mb-10 tracking-wide">{location_detail}</p>
                </div>
            </div>
            <div className="flex justify-center w-screen">
                <ButtonLink
                    text="next"
                    href={url}
                    className="fixed bottom-10 w-full max-w-[400px]"/>
            </div>
        </main>
    )
}

export default Sanjao;