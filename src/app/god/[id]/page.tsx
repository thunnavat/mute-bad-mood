import ButtonBack from '@/app/components/ButtonBack';
import Image from 'next/image';
import { promises as fs } from 'fs';

const GodDetail = async ({ params }: { params: { id: string } }) => {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    const data = JSON.parse(file);
    const god: string[] = data.god
    let god_title: string = ""
    let img: string = ""
    if (params.id === "1") {
        god_title = god[0]
        img = "/god-1.png"
    } else if (params.id === "2") {
        god_title = god[1]
        img = "/god-2.png"
    } else if (params.id === "3") {
        god_title = god[2]
        img = "/god-3.png"
    }

    return (
        <main className='flex flex-col h-screen w-screen'>
            <ButtonBack 
            href="/god"/>
            <div className="flex flex-col h-screen w-screen items-center">
                <div className='m-5'>
                    <Image
                    src={img}
                    alt="god"
                    width={120}
                    height={120}
                    />
                </div>
                <div className="flex justify-center items-center max-w-md w-10/12 bg-white rounded-[50px] border-[7px] border-solid border-black shadow-[5px_3px_0px_#000000]">
                    <h1 className="text-2xl font-semibold capitalize p-2">{ god_title }</h1>
                </div>
                <div className="flex flex-col justify-center items-center mt-10 w-10/12 max-w-md bg-white rounded-[50px] border-[7px] border-solid border-black shadow-[5px_3px_0px_#000000]">
                    <h2 className="text-2xl font-semibold pt-5">ประวัติ</h2>
                    <p className="text-justify mx-5 mt-5 mb-10 tracking-wide">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iusto odio autem, veniam facilis optio aperiam corporis accusamus porro explicabo sit impedit commodi qui repellendus, tenetur nobis voluptate sunt. Delectus?
                    </p>
                </div>
            </div>
        </main>
    );
}

export default GodDetail;