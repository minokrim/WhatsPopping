import { createCreatorAccount,createStripeSession } from "../service/service";
import { NextRequest } from "next/server";
import { eventCreator } from "../eventTypes";

export const createcreatoraccount=async(req:NextRequest)=>{
    const {first_name,last_name,username,password,email,phone_number}=await req.json();
    if(!first_name||!last_name||!username||!password||!email||!phone_number) return {message:"one or more field empty please fill all fields and try again",success:false};
    
    const creator:eventCreator={first_name,last_name,username,password,email,phone_number};    
    try {
        const data=await createCreatorAccount(creator);
        return {success:true,message:data}
    } catch (error:any) {
        return {success:false,message:error.message}
    }
}

export const createstripesession=async(req:NextRequest)=>{
    const{email,userId}=await req.json();
    if(!email||userId) return {message:"create account to begin id verification"};

    try {
        const verification=await createStripeSession(email,userId);
        return verification
    } catch (error) {
        return ("error creating verification session"+error);
    }
}