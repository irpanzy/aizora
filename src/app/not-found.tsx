import React from "react";
import styles from "./not-found.module.scss";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: "Page Not Found",
  icons: {
    icon: "/assets/logos/404.ico",
  },
};

export default function NotFoundPage({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}
        <div className={styles.error}>
          <Image
            className={styles.error__image}
            src="/assets/icons/404.svg"
            alt="404"
            width={400}
            height={400}
          />
          <div className={styles.error__title}>Oops! Page Not Found</div>
        </div>
      </body>
    </html>
  );
}
