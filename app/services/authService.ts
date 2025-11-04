import supabase from "../lib/dbConfig";
import { userTypes } from "../type/dbTypes";


export const emailSignup = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return error;
  } else {
    return data;
  }
};

export const userSignup=async(user:userTypes)=>{
    const {firstname, lastname, username, email, phoneNumber,}=user;
    const {data,error}=await supabase.from("user").insert({user_first_name:firstname,user_last_name:lastname,user_username:username,user_email:email,user_phone_number:phoneNumber})
    if(error){
        return error;
    }
    return data;
}

export const emailSignin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email:email, password:password });
  if (error) {
    return error;
  } else {
    return data;
  }
};


export const googleAuth=async()=>{
    const {data,error}=await supabase.auth.signInWithOAuth({provider:"google"});
      if (error) {
    return error;
  } else {
    return data;
  }
} 

export const resetPassword = async (email:string,newPassword: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email,{
    redirectTo:"/"
  });
  if (error) {
    return error;
  } else {
    await supabase.auth.updateUser({ password:newPassword })
  }
};