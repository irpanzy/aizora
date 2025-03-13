import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../../../globals.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: "Dashboard | Aizora",
  icons: {
    icon: "/assets/logos/favicon.ico",
  },
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const { session } = await getUser()

  if (!session) {
    return redirect('/dashboard/sign-in')
  }

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <Sidebar />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header />
            <main className="py-4 px-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
