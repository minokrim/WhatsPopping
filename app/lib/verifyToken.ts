import supabase from "./dbConfig";
import { NextRequest,NextResponse,NextFetchEvent } from "next/server";

export const verifyusers=async (req:NextRequest,res:NextResponse)=>{
    const authHeader=req.headers.get("authorization")
    if(!authHeader)return NextResponse.json({message:"missing Token"},{status:401});

    const token=authHeader?.split(",")[1];


    const {data,error}=await supabase.auth.getUser(token);
    if (error || !data.user) return NextResponse.json({message:"invalid Token"},{status:401});

    return data.user;
}

