"use client"

import { useEffect,useState } from 'react';
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Yellowsquare from '@/components/yellowSquare'
import { PixelImage } from '@/components/ui/shadcn-io/pixel-image';
import clsx from 'clsx';
import Link from 'next/link';

export default function LandingPage(){  
    type EventItem = {
  title: string;
  position: number;
  link: string;
  thumbnail?: string;
  address?: string[];
  duration:string;
  description:string;
};
 
    const [events,setEvents]=useState<EventItem[]>([]);
    const [btnIndex,setBtnIndex]=useState<number>();

    async function getEvents(){
        const response=await fetch("/api/googleApi");
        const data=await response.json();
        setEvents(data.events);
        console.log(events)
    }

    useEffect(()=>{
        getEvents();
    },[])


    return <div className='bg-[#329a8b]'>
        <section className='flex justify-around'>
            <h2 className='text-[#ffe33c] text-8xl font-extrabold w-[4em] drop-shadow-[4px_4px_0px_#000]'>WHAT'S POPPIN!</h2>
            <Image src="/radio.png" loading='eager' alt='radio element' width={700} height={500} className='relative z-6 ml-[-20em] w-auto h-auto'/>
            <section className='flex relative ml-[-10em]'>
            <div className='bg-[#ffe33c] w-[20em] h-[30em] border-2 border-solid border-black'></div>
            <div className='flex flex-col h-100 items-center justify-end z-4 relative ml-[-28em]'>
                <h2 className='text-white text-7xl font-extrabold w-[8em] text-center drop-shadow-[4px_4px_0px_#000]'>Find Poppin! events near you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, in!</p>
            </div>
            </section>
        </section>

        <section className='w-full flex pl-25 justify-around z-2 mt-[-2em]'>
            <Yellowsquare/>
            <button className='bg-black text-[#ffe33c] w-[8em] h-[2em] z-6 text-2xl'>Sign Up</button>
        </section>

        <section className='pt-10 bg-black mt-10'>
            <div className='flex w-[80%] justify-around'>
            <h2 className='w-2 text-8xl font-extrabold drop-shadow-[4px_4px_0px_#000] text-[#ffe33c]'>Upcoming Events</h2>
            <Image src="/radio.png" alt='' height={500} width={400} />
            </div>

            <div className='grid grid-cols-3 grid-rows-2 p-20 place-content-center place-items-center w-full bg-black'>
                {events.map((event)=><div className='grid-cols-3' key={event.position}>
                    <section className={clsx(" flex flex-col w-full p-5 h-[22em] gap-2 border-2 border-white border-solid",event.position%2===0?"bg-[#ffe33c]":"bg-[#329a8b]")}>
                        <h2 className='text-3xl w-[70%] line-clamp-2 font-extrabold'>{event.title}</h2>
                        <p className='text-xl'>{event.duration}</p>
                        <p className='w-[70%] line-clamp-3'>{event.description}</p>
                        <Link onMouseOver={()=>setBtnIndex(event.position)} onMouseLeave={()=>setBtnIndex(0)} href={event.link}><button className={clsx("p-5 text-lg mt-2",btnIndex===event.position?'bg-white text-black underline font-2xl':'bg-black text-[#ffe33c]')}>Learn More</button></Link>
                    </section>
                </div>)}
                {/* <section className='bg-[#ffe33c] w-[30em] h-[20em]'></section>
                <section className='bg-[#329a8b] w-[30em] h-[20em]'></section>
                <section className='bg-[#ffe33c] w-[30em] h-[20em]'></section>
                <section className='bg-[#329a8b] w-[30em] h-[20em]'></section>
                <section className='bg-[#ffe33c] w-[30em] h-[20em]'></section>
                <section className='bg-[#329a8b] w-[30em] h-[20em]'></section> */}
            </div>
        </section>

        <section className='p-15 flex flex-wrap gap-15'>
                <PixelImage src="/ev1.jpg" grid='8'/>
                <PixelImage src="/ev2.jpg" grid='8'/>
                <PixelImage src="/ev3.jpg" grid='8'/>
                <PixelImage src="/ev4.jpg" grid='8'/>
                
            {/* <Image width={600} height={200} src="/ev1.jpg" alt='event image 1' className='rounded-xl'/> */}
            {/* <Image />
            <Image />
            <Image />
            <Image /> */}
        </section>

    </div>

}