import { NextRequest,NextResponse } from "next/server";
import { emailsignin } from "@/app/lib/controller/authController";

export async function POST(req:NextRequest) {
    return emailsignin(req);
}