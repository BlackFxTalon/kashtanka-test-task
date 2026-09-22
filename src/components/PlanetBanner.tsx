import styles from "./PlanetBanner.module.css";

interface PlanetBannerProps {
  className?: string;
}

export default function PlanetBanner({ className }: PlanetBannerProps) {
  return (
    <a
      href="https://planeta.ru/campaigns/kashtanka-portal"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.banner}${className ? ` ${className}` : ""}`}
    >
      <picture>
        <source media="(min-width: 1920px)" srcSet="/images/planet/banner-1920.webp" />
        <source media="(min-width: 1600px)" srcSet="/images/planet/banner-1600.webp" />
        <source media="(min-width: 980px)" srcSet="/images/planet/banner-980.webp" />
        <img
          className={styles.image}
          src="/images/planet/banner-375.webp"
          alt="Поддержи нас на Планете"
          width={349}
          height={330}
        />
      </picture>
    </a>
  );
}
