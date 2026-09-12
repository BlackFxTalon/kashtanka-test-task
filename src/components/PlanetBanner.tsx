import Image from "next/image";

import styles from "./PlanetBanner.module.css";

interface PlanetBannerProps {
  /** Большие размеры (арт 299×313, лого 326×71, «ПОДДЕРЖИ НАС НА» 40px) — фрейм 1920 */
  large?: boolean;
  /** Без арта — фрейм 980 (баннер 410px) */
  noArt?: boolean;
  className?: string;
}

export default function PlanetBanner({ large = false, noArt = false, className }: PlanetBannerProps) {
  return (
    <div className={`${styles.banner}${large ? ` ${styles.bannerLarge}` : ""}${noArt ? ` ${styles.bannerNoArt}` : ""}${className ? ` ${className}` : ""}`}>
      {!noArt && (
        <Image
          src="/images/tariffs/planet-art.svg"
          alt=""
          width={large ? 299 : 304}
          height={large ? 313 : 318}
          className={styles.art}
        />
      )}
      <div className={styles.content}>
        <p className={styles.logo}>KASHTANKA</p>
        <p className={styles.tagline}>заведи пушистого друга</p>
        <p className={styles.support}>
          <span>ПОДДЕРЖИ НАС <br></br>НА</span>
          <Image
            src={large ? "/images/tariffs/planet-logo-1920.svg" : "/images/tariffs/planet-logo.svg"}
            alt="Планета"
            width={large ? 326 : 212}
            height={large ? 71 : 46}
            className={styles.planetLogo}
          />
        </p>
      </div>
    </div>
  );
}
