import React from "react";
import styles from "./not-found.module.scss";
import Image from "next/image";

export default function NotFoundPage() {
  return (
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
  );
}
