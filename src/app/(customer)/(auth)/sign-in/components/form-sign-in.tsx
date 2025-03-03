"use client"

import React, { useState } from 'react'
import { ActionResult } from '@/types';
import { useFormState, useFormStatus } from 'react-dom';
import { signIn } from '../lib/action';
import { AlertCircle, BaggageClaim, LockKeyholeIcon, Mail } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import Image from 'next/image';
import { Eye, EyeOff } from "lucide-react"

const initialFormState: ActionResult = {
    error: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="p-[12px_24px] bg-[#AC1754] rounded-full text-center font-semibold text-white"
        >
            {pending ? "Loading..." : "Sign In to My Account"}
        </button>
    );
}

export default function FormSignIn() {
    const [state, formAction] = useFormState(signIn, initialFormState);
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div id="signin" className="bg-[#EFF3FA] min-h-screen pt-[30px] pb-[50px] flex flex-col">
            <nav className="container max-w-[1130px] mx-auto flex items-center justify-between bg-[#AC1754] p-5 rounded-3xl">
                <div className="flex shrink-0">
                    <Image
                        alt="Logo"
                        src="/assets/logos/logo.svg"
                        width={100}
                        height={100}
                    />
                </div>
                <ul className="flex items-center gap-[30px]">
                    <li className="hover:font-bold hover:text-[#F7A8C4] transition-all duration-300 text-white">
                        <a href="index.html">Shop</a>
                    </li>
                    <li className="hover:font-bold hover:text-[#F7A8C4] transition-all duration-300 text-white">
                        <a href="">Categories</a>
                    </li>
                    <li className="hover:font-bold hover:text-[#F7A8C4] transition-all duration-300 text-white">
                        <a href="">Testimonials</a>
                    </li>
                    <li className="hover:font-bold hover:text-[#F7A8C4] transition-all duration-300 text-white">
                        <a href="">Rewards</a>
                    </li>
                </ul>
                <div className="flex items-center gap-3">
                    <a href="cart.html">
                        <div className="w-12 h-12 flex shrink-0">
                            <BaggageClaim
                                className="w-15 h-15 rounded-full bg-white p-3"
                                width={50}
                                height={50}
                            />
                        </div>
                    </a>
                    <a href="signin.html" className="p-[12px_20px] bg-white rounded-full font-semibold">
                        Sign In
                    </a>
                    <a href="signup.html" className="p-[12px_20px] bg-white rounded-full font-semibold">
                        Sign Up
                    </a>
                </div>
            </nav>
            <div className="container max-w-[1130px] mx-auto flex flex-1 items-center justify-center py-5">
                <form action={formAction} className="w-[500px] bg-white p-[50px_30px] flex flex-col gap-5 rounded-3xl border border-[#E5E5E5]">
                    <div className="flex justify-center">
                        <Image
                            alt="Logo"
                            src="/assets/logos/logo-black.svg"
                            width={100}
                            height={100}
                        />
                    </div>
                    <h1 className="font-bold text-2xl leading-[34px]">Sign In</h1>
                    {state.error !== '' && (
                        <Alert className='border border-[#AC1754] text-[#AC1754] p-3 rounded'>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                {state.error}
                            </AlertDescription>
                        </Alert>
                    )}
                    <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#F7A8C4] transition-all duration-300">
                        <div className="flex shrink-0">
                            <Mail
                            />
                        </div>
                        <input type="email" id="email" name="email" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Enter your email address" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#F7A8C4] transition-all duration-300">
                            <div className="flex shrink-0">
                                <LockKeyholeIcon
                                />
                            </div>
                            <input type={showPassword ? "text" : "password"} id="password" name="password" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Enter your password" />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="text-[#AC1754]"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                        {/* <a href="" className="text-sm text-[#616369] underline w-fit mr-0 ml-auto">Forgot Password</a> */}
                    </div>
                    <div className="flex flex-col gap-3">
                        <SubmitButton />
                        <a href="signup.html" className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5]">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
