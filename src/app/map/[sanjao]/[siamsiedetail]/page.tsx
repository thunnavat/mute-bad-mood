import ButtonLink from "@/app/components/ButtonLink"
import { promises as fs } from 'fs';

const SiamSieDetail = async ({ params }: { params: { sanjao: string, siamsiedetail: number } }) => {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    const data = JSON.parse(file);
    const Location: string[] = data.location
    let location: string = ""
    if (params.sanjao === "location1") {
        location = Location[0]
    } else if (params.sanjao === "location2") {
        location = Location[1]
    } else if (params.sanjao === "location3") {
        location = Location[2]
    }
    return (
        <main className="w-screen h-screen flex flex-col">
            <p>{params.sanjao}-{params.siamsiedetail}</p>
            <p>{location}</p>
            <div className="flex flex-col h-screen w-screen items-center justify-center">
                <div className="flex flex-col justify-center items-center mt-10 w-10/12 max-w-md min-h-80 bg-[#d83a40] rounded-s-sm border-[7px] border-solid border-[#a91319]">
                    <h1 className="text-2xl font-semibold tracking-wide text-white">ใบที่ {params.siamsiedetail}</h1>
                    <p className="text-center m-5 tracking-wide text-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iusto odio autem, veniam facilis optio aperiam corporis accusamus porro explicabo sit impedit commodi qui repellendus, tenetur nobis voluptate sunt. Delectus?
                    </p>
                </div>
            </div>
            <div className="mb-10">
                <ButtonLink
                    text="next"
                    href=""/>
            </div>
        </main>
    )
}

export default SiamSieDetail