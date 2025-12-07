"use client"
import { useState } from "react";

export default function CreatorAuth(){
    const [firstName,setFirstName]=useState<string>("");
    const [lastName,setLastName]=useState<string>("");
    const [userName,setUserName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [mobileNumber,setMobileNumber]=useState<string>("");
    const [password,setPassword]=useState<string>("");

    const handleCreatorSignup=async ():Promise<{success:boolean}>=>{
        try {
            const res=await fetch("/api/event",{
            method:"POST",
            headers:{"ContentType":"application/json"},
            body:JSON.stringify({email:email, password:password, firstname:firstName, lastname:lastName, username:userName, phoneNumber:mobileNumber})
        })
        if(!res.ok){
            throw new Error("failed to create Creator");
        }
        const json=await res.json();
        console.log(json);   
        return {success:true};     
        } catch (error) {
            console.error(error);
            return {success:false};
        }
    }


    return <div className="bg-[#491890] w-full flex flex-col align-middle text-center items-center justify-center gap-3"  style={{backgroundImage:"url('/bg2.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <h2 className='text-[#ffe33c] text-8xl font-extrabold w-[4em] drop-shadow-[4px_4px_0px_#000]'>Sign Up</h2>
        <p className="text-white w-[20%]">Host events, Share Experiences, and get discovered</p>

        <form action="submit" className="w-[25%] bg-white/10 p-5 rounded-md flex flex-col items-center justify-between gap-5 overflow-y-scroll h-[30em]">
            <input type="text" placeholder="First Name" className="bg-white/5 rounded-md text-white w-[80%] p-2"/>
            <input type="text" placeholder="Last Name" className="bg-white/5 rounded-md text-white w-[80%] p-2"/>
            <input type="text" placeholder="UserName" className="bg-white/5 rounded-md text-white w-[80%] p-2"/>
            <input type="text" placeholder="Email" className="bg-white/5 rounded-md text-white w-[80%] p-2"/>
            <input type="text" placeholder="Mobile Number" className="bg-white/5 rounded-md text-white w-[80%] p-2"/>
            <input type="text" placeholder="Password" className="bg-white/5 rounded-md text-white w-[80%] p-2"/>
            <input type="text" placeholder="Confirm Password" className="bg-white/5 rounded-md text-white w-[80%] p-2"/>
            <button className="bg-linear-to-r from-pink-500 via-purple-600 to-blue-400 w-[70%] rounded-md p-2 font-bold text-white" onClick={handleCreatorSignup}>CREATE ACCOUNT</button>
            <p>Login</p>
        </form>
    </div>
}