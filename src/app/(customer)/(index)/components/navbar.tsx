"use client";

import React from "react";
import Image from "next/image";
import { BaggageClaim } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
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
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-white rounded-full cursor-pointer hover:shadow-lg active:scale-95 transition-all duration-300">
                        <BaggageClaim className="hover:text-[#AC1754]" width={24} height={24} />
                    </div>
                </a>
                <Link
                    href="/sign-in"
                    className="p-[12px_20px] bg-white hover:text-[#AC1754] hover:shadow-lg active:scale-95 transition-all duration-300 rounded-full font-semibold"
                >
                    Sign In
                </Link>
                <Link
                    href="/sign-up"
                    className="p-[12px_20px] bg-white hover:text-[#AC1754] hover:shadow-lg active:scale-95 transition-all duration-300 rounded-full font-semibold"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}
