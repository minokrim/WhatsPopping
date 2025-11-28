import { supabase } from "@/lib/dbConfig";
import { eventCreator } from "../eventTypes";
import Stripe from "stripe";

const stripe=new Stripe(process.env.STRIPE_KEY as string);


export const createCreatorAccount=async(creator:eventCreator)=>{
    const{first_name,last_name,username,password,email,phone_number}=creator
    const{data,error}=await supabase.from("creator").insert({first_name:first_name,last_name:last_name,username:username,password:password,email:email,phone_number:phone_number})
    if(error)return {success:false,message:error.message};

    return {success:true,creator:data};
}

export const createStripeSession=async(email:string,id:number)=>{
    const verificationSession=await stripe.identity.verificationSessions.create({
    type:'document',
    provided_details:{email:email},
    metadata:{user_id:id}
})

return verificationSession.id;
}