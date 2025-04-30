import { Montserrat } from "next/font/google";
import "../../index.css";
import { Metadata } from "next";
import ClientLayoutWrapper from "@/app/(customer)/(index)/client-wrapper"; // 👉 Komponen client baru

export const metadata: Metadata = {
    title: "Home | Aizora",
    icons: {
        icon: "/assets/logos/favicon.ico",
    },
};

const montserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin-ext"],
});

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <ClientLayoutWrapper>
                    {children}
                </ClientLayoutWrapper>
            </body>
        </html>
    );
}
