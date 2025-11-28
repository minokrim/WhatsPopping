import Image from "next/image"
import StepsCard from "./stepsCard"
export default function CreatorSection(){
    async function handleButtonClick(){
        await fetch(http://localhost:3000/api/stripesession)
    }
    return <div className="bg-[#329a8b]" style={{backgroundImage:"url('./bgConfetti.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <section className="flex w-full justify-around p-5 items-center">
            <div className="flex flex-col gap-3">
            <h2 className='text-[#ffe33c] text-8xl font-extrabold w-[4em] drop-shadow-[4px_4px_0px_#000]'>Become a Creator</h2>
            <p className="text-white font-extrabold text-xl">Host events, share experiences, and get discovered on whatsPoppin</p>
            <button className='bg-black text-[#ffe33c] w-[8em] h-[full] z-6 text-2xl p-2 rounded-lg' onClick={handleButtonClick}>Become a Creator</button>

            </div>
            <Image src="/ev3.jpg" width={500} height={500} alt="placeholder image" className="rounded-2xl"/>
        </section>
        <section>
            <StepsCard id={1} step="help" desc="Lorem ipsum dolor sit amet"/>
        </section>
    </div>
}