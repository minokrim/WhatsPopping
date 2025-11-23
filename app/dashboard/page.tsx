import { url } from "inspector";
import Image from "next/image";
export default function Dashboard(){
    return <body className="bg-[#329a8b]" style={{backgroundImage:"url('./bgConfetti.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <section className="w-full flex items-center justify-center">
            <Image width={500} height={100} src="/ev3.jpg" alt="event image 1" className="w-[90%] h-[40em] rounded-3xl"/>
        </section>
    </body>
}