import Image from "next/image"
import StepsCard from "./stepsCard"
import {loadStripe,Stripe} from '@stripe/stripe-js';
import { useState } from "react";

export default function CreatorSection(){
    const [stripePromise,setStripePromise]=useState<Stripe|null>(null);
    
    async function handleButtonClick(){
        const promise = await loadStripe('pk_test_51SWgeMPIFtLxrWDr0UhJIXKItmZccWZCapyExR9aNxhpf7ulOMjYqA4HpxMuPdl1Bnxg6LqhWTL0bIm4qLTUtp5V00nL9iEf1N');
        setStripePromise(promise);
        console.log(stripePromise)
        if(promise){
            const response=await fetch("/api/stripesession",{method:"POST",headers: { "Content-Type": "application/json" },body: JSON.stringify({ email:"ayomidekareem563@gmail.com", userId:1 })});
            const session = await response.json();
            console.log()

            const { error } = await promise.verifyIdentity(session.clientSecret.data);
                if (error) {
                    console.log('[error]', error);
                } else {
                    console.log('Verification submitted!');
                }
        }
        
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