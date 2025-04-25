import React from 'react'
import Image from 'next/image'
import { BaggageClaim } from 'lucide-react'
import Link from 'next/link'

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
                    <div className="w-12 h-12 flex shrink-0">
                        <BaggageClaim
                            className="w-15 h-15 rounded-full bg-white p-3"
                            width={50}
                            height={50}
                        />
                    </div>
                </a>
                <Link href="/sign-in" className="p-[12px_20px] bg-white rounded-full font-semibold">
                    Sign In
                </Link>
                <Link href="/sign-up" className="p-[12px_20px] bg-white rounded-full font-semibold">
                    Sign Up
                </Link>
            </div>
        </nav>
    )
}
