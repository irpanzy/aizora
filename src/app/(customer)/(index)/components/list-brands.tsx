import Image from 'next/image'
import React from 'react'

export default function ListBrands() {
    return (
        <div id="brands" className="flex flex-col gap-[30px]">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl leading-[34px]">Explore Our <br /> Popular Brands</h2>
                <a href="catalog.html" className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold">Explore All</a>
            </div>
            <div className="grid grid-cols-5 gap-[30px]">
                <a href="" className="logo-card">
                    <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                        <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                            <Image
                                src="/assets/logos/microsoft.svg"
                                alt="Microsoft Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </a>
                <a href="" className="logo-card">
                    <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                        <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                            <Image
                                src="/assets/logos/apple.svg"
                                alt="Apple Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </a>
                <a href="" className="logo-card">
                    <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                        <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                            <Image
                                src="/assets/logos/samsung.svg"
                                alt="Samsung Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </a>
                <a href="" className="logo-card">
                    <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                        <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                            <Image
                                src="/assets/logos/huawei.svg"
                                alt="Huawei Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </a>
                <a href="" className="logo-card">
                    <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                        <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                            <Image
                                src="/assets/logos/nokia.svg"
                                alt="Nokia Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
