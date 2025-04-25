import React from 'react'
import { Star } from 'lucide-react'

export default function BadgeHighlight() {
    return (
        <div className="flex items-center gap-2 p-2 px-4 rounded-full bg-white w-fit">
            <Star width={22} height={22} className="text-[#FFC736]" />
            <p className="font-semibold text-sm">Most Popular 100th Product in Belanja</p>
        </div>
    )
}
