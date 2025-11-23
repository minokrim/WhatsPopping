import { googleevents } from "@/app/modules/googleEventApi/controller/controller";
import { NextResponse } from "next/server";
export async function GET() {
    try {
    const data=await googleevents();
    return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({message:"unable to fetch events"}, { status: 500 });
    }

}