"use client";

import { ActionResult } from '@/types';
import { Eye, EyeOff, LockKeyholeIcon, Mail, UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { signUp } from '../../lib/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';


const initialFormState: ActionResult = {
    error: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="p-[12px_24px] bg-[#AC1754] rounded-full text-center font-semibold text-white transition-transform transform hover:scale-105 disabled:opacity-50"
        >
            {pending ? "Loading..." : "Create New Account"}
        </button>
    );
}

export default function SignUpPage() {
    const router = useRouter();
    const [state, formAction] = useFormState(signUp, initialFormState);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        if (state.error) {
            toast.error(state.error);
        }
        if (state.success) {
            toast.success("Account created successfully! 🎉");
            setTimeout(() => {
                router.push("/sign-in");
            }, 2000);
        }
    }, [router, state]);

    return (
        <div id="signup" className="bg-[#AC1754] min-h-screen py-5 px-5 flex flex-col">
            <ToastContainer position="top-right" autoClose={2000} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container max-w-[1130px] mx-auto flex flex-1 items-center justify-center"
            >
                <motion.form
                    action={formAction}
                    initial={{ x: 0 }}
                    animate={state.error ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className="w-full sm:w-[500px] md:w-[500px] bg-white p-[20px_30px] sm:p-[40px_30px] flex flex-col gap-6 rounded-3xl border border-[#E5E5E5]"
                >
                    <div className="flex justify-center">
                        <Image
                            alt="Logo"
                            src="/assets/logos/logo-black.svg"
                            width={100}
                            height={100}
                        />
                    </div>
                    <h1 className="font-bold text-2xl leading-[34px] text-center sm:text-left">Sign Up</h1>

                    <motion.div
                        className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#F7A8C4] transition-all duration-300"
                        animate={state.error ? { x: [-5, 5, -5, 5, 0] } : {}}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex shrink-0">
                            <UserCircle />
                        </div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black"
                            placeholder="Enter your name"
                        />
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#F7A8C4] transition-all duration-300"
                        animate={state.error ? { x: [-5, 5, -5, 5, 0] } : {}}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex shrink-0">
                            <Mail />
                        </div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black"
                            placeholder="Enter your email address"
                        />
                    </motion.div>
                    <motion.div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#F7A8C4] transition-all duration-300">
                        <div className="flex shrink-0">
                            <LockKeyholeIcon />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black"
                            placeholder="Enter your password"
                        />
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
                    </motion.div>
                    <div className="flex flex-col gap-3">
                        <SubmitButton />
                        <Link href="/sign-in" className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5] transition-transform transform hover:scale-105 disabled:opacity-50">Sign In</Link>
                    </div>
                </motion.form>
            </motion.div>
        </div >
    );
}
