import { Montserrat } from "next/font/google";

import '../../../index.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sign In | Aizora",
    icons: {
        icon: "/assets/logos/favicon.ico",
    },
};

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin-ext']
})

export default function SignInLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    )
}