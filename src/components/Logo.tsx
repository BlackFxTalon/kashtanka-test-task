import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={styles.logo}>
      <Image
        src="/images/logo/logo-dog.png"
        alt=""
        width={40}
        height={30}
        className={styles.logo__img}
      />
      <span className={styles.logo__text}>
        <span className={styles.logo__name}>KASHTANKA</span>
        {!compact && <span className={styles.logo__tagline}>заведи пушистого друга</span>}
      </span>
    </span>
  );
}
