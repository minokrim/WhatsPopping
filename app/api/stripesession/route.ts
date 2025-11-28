import { createstripesession } from "@/app/modules/event/controller/controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const data=await  createstripesession(req);
        return NextResponse.json({message:data},{status:200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:error},{status:500});

    }
}