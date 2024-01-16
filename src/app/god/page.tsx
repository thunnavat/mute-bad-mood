import ButtonBack from "../components/ButtonBack"
import ButtonGod from "../components/ButtonGod"

const God = () => {
  return (
    <main className="flex h-screen w-screen flex-col bg-[#99c2eb]">
      <ButtonBack href="/" secondary={true}/>
      <h1 className="text-center text-4xl font-semibold font-chakrapetch text-[#296892]">
        รายละเอียด
      </h1>
      <div className="flex flex-col items-center justify-center sm:hidden">
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

      <div className="mt-24 flex flex-row items-center justify-center max-sm:hidden">
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
  )
}

export default God
