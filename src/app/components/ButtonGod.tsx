import Link from "next/link"
import Image from 'next/image';

interface ButtonGodProps {
    id:number
}

const ButtonGod = ({ id }: ButtonGodProps) => {
    if (id == 1) {
        return (
            <Link href="/god/1" className="flex items-center justify-center">
                <div className="flex items-center w-40 h-40 bg-[#f3e4c8] rounded-[20px] border-[5px] border-solid border-black shadow-[5px_3px_0px_#000000]">
                    <div className="flex h-full w-full mb-6 justify-center items-center">
                        <Image
                            src="/god-1.png"
                            alt="god"
                            width={105}
                            height={105}
                        />
                    </div>
                </div>
            </Link>
        )
    } else if (id == 2) {
        return (
            <Link href="/god/2" className="flex items-center justify-center">
                <div className="flex items-center w-40 h-40 bg-[#f3e4c8] rounded-[20px] border-[5px] border-solid border-black shadow-[5px_3px_0px_#000000]">
                    <div className="flex h-full w-full mb-5 justify-center items-center">
                        <Image
                            src="/god-2.png"
                            alt="god"
                            width={105}
                            height={105}
                        />
                    </div>
                </div>
            </Link>
        )
    } else if (id == 3) {
        return (
            <Link href="/god/3" className="flex items-center justify-center">
                <div className="flex items-center w-40 h-40 bg-[#f3e4c8] rounded-[20px] border-[5px] border-solid border-black shadow-[5px_3px_0px_#000000]">
                    <div className="flex h-full w-full mb-4 justify-center items-center">
                        <Image
                            src="/god-3.png"
                            alt="god"
                            width={105}
                            height={105}
                        />
                    </div>
                </div>
            </Link>
        )
    }
}

export default ButtonGod