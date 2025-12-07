import { NextRequest, NextResponse } from "next/server";
import { usersignup } from "@/app/modules/auth/controller/controller";
export async function POST(req:NextRequest) {
    try {
        const data=await usersignup(req)
        if(data.error){
            return NextResponse.json({message:data},{status:400});
        }
        return NextResponse.json({message:data},{status:200});
    } catch (error) {
        return NextResponse.json({message:error},{status:500});
    }
}