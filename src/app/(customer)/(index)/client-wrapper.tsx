"use client";

import {HeroUIProvider} from "@heroui/react";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    );
}
