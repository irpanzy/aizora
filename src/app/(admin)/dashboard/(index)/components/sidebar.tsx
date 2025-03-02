"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    Building,
    ChartBarStacked,
    Home,
    MapPin,
    Package,
    ShoppingCart,
    Users2,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import FormLogout from "./form-logout";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <TooltipProvider>
            <button
                className="fixed top-2 left-2 z-40 p-2 sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <aside
                className={`fixed inset-y-0 left-0 z-30 w-20 bg-background transform transition-transform duration-300 ease-in-out sm:w-14 sm:flex sm:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <nav className="flex flex-col items-center gap-6 px-4 py-20 sm:py-4 w-full">
                    <Link
                        href="/dashboard"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-700 md:h-8 md:w-8"
                    >
                        <Home className="h-5 w-5" />
                    </Link>
                    {[
                        { href: "/dashboard/categories", icon: <ChartBarStacked className="h-5 w-5" />, label: "Categories" },
                        { href: "/dashboard/locations", icon: <MapPin className="h-5 w-5" />, label: "Locations" },
                        { href: "/dashboard/brands", icon: <Building className="h-5 w-5" />, label: "Brands" },
                        { href: "/dashboard/products", icon: <Package className="h-5 w-5" />, label: "Products" },
                        { href: "/dashboard/orders", icon: <ShoppingCart className="h-5 w-5" />, label: "Orders" },
                        { href: "/dashboard/customers", icon: <Users2 className="h-5 w-5" />, label: "Customers" },
                    ].map((item, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus:text-black active:text-black"
                                >
                                    {item.icon}
                                    <span className="sr-only">{item.label}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">{item.label}</TooltipContent>
                        </Tooltip>
                    ))}

                    <FormLogout />
                </nav>
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </TooltipProvider>
    );
}
