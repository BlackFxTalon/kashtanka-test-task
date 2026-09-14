import Image from "next/image";
import styles from "./LogoOverlay.module.css";

/** Reusable brand substrate for imagery used in promotional blocks. */
export default function LogoOverlay() {
  return (
    <div className={styles.overlay} aria-label="KASHTANKA — заведи пушистого друга">
      <div className={styles.panelFill} aria-hidden="true" />
      <svg className={styles.panel} viewBox="0 0 407 483" preserveAspectRatio="none" aria-hidden="true">
        <path d="M377 .5C393.292.5 406.5 13.7076 406.5 30V453C406.5 469.292 393.292 482.5 377 482.5H97.1631L.610352.5H377Z" fill="none" stroke="white" strokeOpacity=".5" />
      </svg>
      <div className={styles.brand}>
        <Image src="/images/logo/logo-dog.svg" alt="logo dog" width={92} height={69} className={styles.dog} />
        <div className={styles.copy}>
          <span className={styles.name}>KASHTANKA</span>
          <span className={styles.tagline}>заведи пушистого друга</span>
        </div>
      </div>
    </div>
  );
}
