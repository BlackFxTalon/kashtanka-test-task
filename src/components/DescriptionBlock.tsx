import type { ReactNode } from "react";

import styles from "./DescriptionBlock.module.css";

interface DescriptionBlockProps {
  badge: string;
  title: string;
  cta?: string;
  variant?: "default" | "tariffs";
  children: ReactNode;
}

export default function DescriptionBlock({ badge, title, cta, variant = "default", children }: DescriptionBlockProps) {
  return (
    <div className={`${styles.card}${variant === "tariffs" ? ` ${styles.tariffs}` : ""}`}>
      <span className={`btn btn--primary ${styles.badge}`}>
        <span>{badge}</span>
      </span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{children}</div>
      {cta ? (
        <div className={styles.ctaWrap}>
          <a href="#" className="btn btn--primary">
            <span>{cta}</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
