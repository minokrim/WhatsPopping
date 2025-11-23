import { NextResponse } from "next/server";

export const googleEvents=async()=>{
    const url=`https://www.searchapi.io/api/v1/search?api_key=${process.env.SEARCH_API_KEY}&engine=google_events&q=Events+near+me`
    
    const res=await fetch(url,{headers:{
        "User_Agent":"Mozilla/5.0"
    }});
    
    if(!res.ok){
        return NextResponse.json({message:"unable to fetch events",status:res.status})
    }

    const data=await res.json();

    return data;
 
}