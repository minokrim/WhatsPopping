import { link } from 'fs'
import Link from 'next/link'

export default function Nav(){
    const navOptions=["Home","Events","Gallery","Blog"]
    const linkSrc=["/landingpage"]
    return <section className='flex justify-between p-5 w-full bg-[#329a8b]'>
                <h4 className='text-5xl font-extrabold w-1/3'>WHATS POPPIN!</h4>
                {navOptions.map((options)=> <div key={options} className='flex w-1/3 text-2xl'>
                {linkSrc.map((links)=><div key={links}>
                    <Link href={links}><p className="">{options}</p></Link>
                </div>)}
                
                </div>)}
                <Link href="/login"><button className='bg-black text-[#ffe33c] w-[8em] h-[2em] z-6 text-2xl rounded-2xl'>Sign In</button></Link>
            </section>
}