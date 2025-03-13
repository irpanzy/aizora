import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../../../globals.css";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: "Sign In | Dashboard",
  icons: {
    icon: "/assets/logos/favicon.ico",
  },
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const { session, user } = await getUser()

  if (session && user.role === 'superadmin') {
    return redirect('/dashboard')
  }

  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}