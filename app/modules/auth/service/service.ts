import { supabase } from "@/lib/dbConfig";
import { userTypes } from "@/app/type/dbTypes";


// export const emailSignup = async (email: string, password: string) => {
//   const { data, error } = await supabase.auth.signUp({ email, password });
//   if (error) {
//     return error;
//   } else {
//     return data;
//   }
// };

export const userSignup=async(user:userTypes)=>{
    const {firstname, lastname, username, email, phoneNumber,password}=user;
    const { data:authData, error:authError } = await supabase.auth.signUp({ email, password });
    if(authError){
      console.error("Auth signup error:", authError)
      return authError;
    }
    else{
      console.log(authData)
        const userId= authData.user?.id;
        if(userId){
            const {data:profileData,error:profileError}=await supabase.from("user_profile").insert({id:userId,user_first_name:firstname,user_last_name:lastname,user_username:username,user_email:email,user_phone_number:phoneNumber})
            if(profileError){
                return profileError;
            }
            return profileData;
        }
        else{
            return "unable to get userId";
        }
    }
}

export const emailSignin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email:email, password:password });
  if (error) {
    return error;
  } else {
    return data;
  }
};

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