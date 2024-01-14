import ButtonBack from "../components/ButtonBack";
import ButtonGod from "../components/ButtonGod";

const God = () => {
    return (
        <main className="flex flex-col h-screen w-screen">
            <ButtonBack 
            href="/"/>
            <h1 className="text-4xl text-center font-bold text-[#09403f]">รายละเอียด</h1>
            <div className="sm:hidden flex flex-col justify-center items-center">
                <div className="mt-12">
                    <ButtonGod id={1} />
                </div>
                <div className="mt-10">
                    <ButtonGod id={2} />
                </div>
                <div className="mt-10">
                    <ButtonGod id={3} />
                </div>
            </div>

            <div className="max-sm:hidden mt-24 flex flex-row justify-center items-center">
                <div className="mx-6">
                    <ButtonGod id={1} />
                </div>
                <div className="mx-6">
                    <ButtonGod id={2} />
                </div>
                <div className="mx-6">
                    <ButtonGod id={3} />
                </div>
            </div>
        </main>
    );
}

export default God;