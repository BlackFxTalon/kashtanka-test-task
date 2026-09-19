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
        <source media="(min-width: 1680px)" srcSet="/images/planet/banner-1920.png" />
        <source media="(min-width: 1280px)" srcSet="/images/planet/banner-1600.png" />
        <source media="(min-width: 980px)" srcSet="/images/planet/banner-980.png" />
        <img
          className={styles.image}
          src="/images/planet/banner-375.png"
          alt="Поддержи нас на Планете"
          width={349}
          height={330}
        />
      </picture>
    </a>
  );
}
