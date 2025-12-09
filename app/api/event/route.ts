import { createcreatoraccount } from "@/app/modules/event/controller/controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const data=await createcreatoraccount(req);
        if(!data.success) return NextResponse.json({message:data.message},{status:400})
        return NextResponse.json({message:`user data accepted move on to kyc`,data:data.message},{status:200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:error},{status:500});
    }
}