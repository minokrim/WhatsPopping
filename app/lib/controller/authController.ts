import { emailSignup,userSignup,emailSignin,resetPassword } from "@/app/services/authService";
import { NextRequest,NextResponse } from "next/server";
import { userTypes } from "@/.next/dev/types/dbTypes";

export const emailsignup = async (req: NextRequest) => {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({message:"enter valid email or password"},{status:400});
  }

  try {
    const result = await emailSignup(email, password);
    return NextResponse.json({message:"sign up successful. Verify email to continue"},{status:200});
  } catch (error: any) {
    console.error(error);
        return NextResponse.json({message:"error signing up"},{status:500});
  }
};

export const usersignup = async (req: NextRequest) => {
  const { email, password, firstname, lastname, username, phoneNumber } = await req.json();
  const user: userTypes = {
    email,
    password,
    firstname,
    lastname,
    username,
    phoneNumber,
  };

  if(!user) return NextResponse.json({message:"enter full credentials"},{status:400});

  try {
    const result = await userSignup(user);
    return NextResponse.json({message:"sign up successful. Verify email to continue"},{status:200})
  } catch (error) {
    return NextResponse.json({message:error},{status:500})
  }
};

export const emailsignin = async (req: NextRequest) => {
  const { email, password } = await req.json();

  if (!email || !password) return NextResponse.json({message:"enter valid email or password"},{status:400})

  try {
      const result = await emailSignin(email, password);
      return NextResponse.json({message:"sign in successful."},{status:200})
  } catch (error) {
    return NextResponse.json({ message: error },{status:500});
  }

};

export const resetpassword = async (req: NextRequest) => {
  const { password, email } = await req.json();
  if (!email || !password) return NextResponse.json({ message: "enter valid email or password" },{status:400});
  
  try {
      const result = await resetPassword(email, password);
      return NextResponse.json({ message: "password reset succesful" },{status:200})
  } catch (error) {
      return NextResponse.json({ message: error},{status:500})
  }
};
