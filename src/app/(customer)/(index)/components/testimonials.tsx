import React from 'react'
import Image from "next/image"

const testimonials = [
    { name: "Jemmie Pemilia", comment: "Awesome product!", img: "/assets/photos/p1.png" },
    { name: "Angga Risky", comment: "Money saver 25%", img: "/assets/photos/p2.png" },
    { name: "Petina Malaka", comment: "I love the warranty", img: "/assets/photos/p3.png" },
    { name: "Udin Sarifun", comment: "Big deals ever!", img: "/assets/photos/p4.png" },
]

export default function Testimonials() {
    return (
        <div className="container max-w-[1130px] mx-auto flex items-center justify-center gap-10 mt-[50px]">
            {testimonials.map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] rounded-full border-[5px] border-white overflow-hidden">
                        <Image src={t.img} alt={t.name} width={50} height={50} />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <p className="font-semibold text-sm leading-[22px]">{t.comment}</p>
                        <p className="text-xs leading-[18px]">{t.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
