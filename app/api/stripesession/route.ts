import { createstripesession } from "@/app/modules/event/controller/controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const data=await createstripesession(req);
        return NextResponse.json({clientSecret:data},{status:200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({error:error},{status:500});

    }
}