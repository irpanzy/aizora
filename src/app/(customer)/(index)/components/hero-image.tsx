import React from 'react'
import Image from "next/image"
import { Code2, Star } from 'lucide-react'

export default function HeroImage() {
    return (
        <div className="w-[588px] h-[360px] flex shrink-0 overflow-hidden relative">
            <Image
                src="/assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                alt="Gallery Image"
                width={500}
                height={300}
            />
            <div className="absolute top-[60%] bg-white p-4 rounded-3xl flex items-center gap-2">
                <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736]">
                    <Code2 width={32} height={32} />
                </div>
                <p className="font-semibold text-sm">Bonus Mac OS <br /> Capitan Pro</p>
            </div>
            <div className="absolute right-0 top-[30%] bg-white p-4 rounded-3xl flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736]">
                    <Star width={24} height={24} />
                </div>
                <p className="font-semibold text-sm text-center">Include <br /> Warranty</p>
            </div>
        </div>
    )
}
