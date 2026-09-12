import type { ReactNode } from "react";

import styles from "./DescriptionBlock.module.css";

interface DescriptionBlockProps {
  badge: string;
  title: string;
  cta: string;
  children: ReactNode;
}

export default function DescriptionBlock({ badge, title, cta, children }: DescriptionBlockProps) {
  return (
    <div className={styles.card}>
      <span className={`btn btn--primary ${styles.badge}`}>
        <span>{badge}</span>
      </span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{children}</div>
      <div className={styles.ctaWrap}>
        <a href="#" className="btn btn--primary">
          <span>{cta}</span>
        </a>
      </div>
    </div>
  );
}
