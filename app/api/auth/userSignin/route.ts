import { NextRequest,NextResponse } from "next/server";
import {usersignup } from "@/app/lib/controller/authController";

export async function POST(req:NextRequest) {
    return usersignup(req);
}