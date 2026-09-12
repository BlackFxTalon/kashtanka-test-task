"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BreadcrumbBackIcon } from "./icons";
import styles from "./Breadcrumbs.module.css";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  current: string;
  className?: string;
  mobileCurrentRow?: boolean;
  compact?: boolean;
  currentVariant?: "default" | "blog";
}

export default function Breadcrumbs({
  items,
  current,
  className,
  mobileCurrentRow = false,
  compact = false,
  currentVariant = "default",
}: BreadcrumbsProps) {
  const router = useRouter();
  const isBlogCurrent = currentVariant === "blog";
  const currentClassName = `${styles.current}${isBlogCurrent ? ` ${styles.currentBlog}` : ""}`;

  return (
    <div className={`${styles.breadcrumbs}${mobileCurrentRow ? ` ${styles.mobileCurrentRow}` : ""}${compact ? ` ${styles.compact}` : ""}${className ? ` ${className}` : ""}`}>
      <button type="button" className={`${styles.back}${isBlogCurrent ? ` ${styles.backBlog}` : ""}`} onClick={() => router.back()}>
        <BreadcrumbBackIcon />
      </button>
      {items.map((item) => (
        <span className={styles.segment} key={`${item.href}-${item.label}`}>
          <Link href={item.href}>{item.label}</Link>
          <span>-</span>
        </span>
      ))}
      <strong className={currentClassName}>{current}</strong>
    </div>
  );
}
