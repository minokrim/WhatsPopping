"use client"
import { Button } from "@/components/ui/button";
import {Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Nav from "@/components/nav";

export default function SignIn(){

    const[authType,setAuthType]=useState("login");
    const[firstName,setFirstName]=useState<string>("");
    const[lastName,setLastName]=useState<string>("");
    const[phoneNumber,setPhoneNumber]=useState<string>("");
    const[userName,setUserName]=useState<string>("");
    const[email,setEmail]=useState<string>("");
    const[password,setPassword]=useState<string>("");
    const[confirmPassword,setConfirmPassword]=useState<string>("");

    const Fields=[
        { id: "firstName", label: "First Name", type: "text", placeholder: "John", setter: setFirstName },
        { id: "lastName", label: "Last Name", type: "text", placeholder: "Doe", setter: setLastName },
        { id: "userName", label: "User Name", type: "text", placeholder: "Username", setter: setUserName },
        { id: "phoneNumber", label: "Phone Number", type: "text", placeholder: "123-456-7890", setter: setPhoneNumber },
        { id: "email", label: "Email", type: "email", placeholder: "m@example.com", setter: setEmail },
    ]


    const handleAuthType=()=>{
        setAuthType(prevType=>(prevType=="login"?"signin":"login"));
    }

    const SignInformData=new FormData();
    SignInformData.append("email",email);
    SignInformData.append("password",password);



    return <body className="h-[100vh] bg-[#329a8b] flex flex-col items-center">
    <Nav/>
    <section className="flex flex-col w-[100%] items-start p-5">
   <h2 className='text-[#ffe33c] text-8xl font-extrabold w-[4em] drop-shadow-[4px_4px_0px_#000]'>Sign Up</h2>
    <div className="w-full p-6 flex justify-center relative z-10 drop-shadow-[4px_4px_0px_#000]">
      <Card className="w-full max-w-sm overflow-y-auto scroll max-h-[30em] bg-[#ffe33c] border-black">
        <CardHeader>
          <CardTitle>{authType==="login"?"Login to your account":"Sign up to a new account"}</CardTitle>
          <CardDescription className="text-black">
            Enter your email below to {authType==="login"?"login":"sign-up"} to your account
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
                {authType==="signin" && <div className="flex flex-col gap-6">
                {Fields.map((field)=>(
                <div className="grid gap-2" key={field.id}>
                <div className="flex items-center">
                  <Label htmlFor={field.label}>{field.label}</Label>
                </div>
                <Input id={field.id} type={field.type} required onChange={e=>{field.setter(e.target.value)}} className="text-black border-black placeholder:text-[#ffe33c]"/>
              </div>
                ))}
            </div>}

            {authType==="login" && <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="JohnDoe@example.com"
                  required
                  onChange={e=>{setEmail(e.target.value)}}
                  className="text-[#ffe33c] border-black placeholder:text-[#ffe33c] text-8xl"
                />
              </div>
                </div>}

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" size="sm" className="ml-auto p-0 h-auto text-xs">
                    Forgot your password?
                  </Button>
                </div>
                <Input id="password" type="password" required onChange={e=>{setPassword(e.target.value)}} className="text-black border-black placeholder:text-[#ffe33c] text-8xl"/>
              </div>

              {authType!=="login"&& (<div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="forgot_password">Confirm Password</Label>
                </div>
                <Input id="forgot_password" type="password" required onChange={e=>{setConfirmPassword(e.target.value)}} className="text-black border-black placeholder:text-[#ffe33c] text-8xl"/>
              </div>)}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full bg-white text-black">
            {authType==="login"?"Login":"Sign Up"}
          </Button>

          <Button type="button" variant="outline" className="w-full bg-[#ffe33c]" onClick={()=>{signIn("google")}}>
            {authType==="login"?"Login":"Sign Up"} with Google
          </Button>
        </CardFooter>

          <CardAction>
            <Button onClick={handleAuthType} variant="ghost" className="drop-shadow-[1px_1px_0px_#000] w-[80%] text-xl font-bold bg-black text-white self-center">{authType==="login"?"Sign Up":"Log In"}</Button>
          </CardAction>
      </Card>
    </div>
    <Image width={900} height={100} src="/authPageElement.png" alt="auth page element" className="relative mt-[-40em] w-full"/>
    </section>
    <section className="w-[50%]">
      {/* <Image width={900} height={100} src="/ev.jpg" alt="auth page element"/> */}
    </section>
    </body>

} 