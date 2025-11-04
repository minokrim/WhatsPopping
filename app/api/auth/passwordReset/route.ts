import { NextRequest } from "next/server";
import {resetpassword } from "@/app/lib/controller/authController";

export async function POST(req:NextRequest) {
    return resetpassword(req);
}