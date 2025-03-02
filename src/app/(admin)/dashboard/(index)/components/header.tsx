import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <div className="relative ml-auto flex items-center">
                <ModeToggle />
            </div>
        </header>
    );
}
