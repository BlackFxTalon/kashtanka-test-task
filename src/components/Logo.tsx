import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/logo/logo-dog.svg"
        alt="logo dog"
        width={40}
        height={30}
        unoptimized
        className={styles.logo__img}
      />
      <div className={styles.logo__text}>
        <p className={styles.logo__name}>KASHTANKA</p>
        {!compact && <p className={styles.logo__tagline}>заведи пушистого друга</p>}
      </div>
    </div>
  );
}
