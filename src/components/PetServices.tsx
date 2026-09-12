import type { ReactNode } from "react";

import ServiceCard from "./ServiceCard";
import Slider from "./Slider";
import { PET_SERVICES, type ServiceCardData } from "./serviceData";
import styles from "./Showcase.module.css";

interface PetServicesProps {
  items?: ServiceCardData[];
  variant?: "home" | "article";
  title?: string;
  buySlot?: ReactNode;
}

export default function PetServices({
  items = PET_SERVICES,
  variant = "home",
  title = "Услуги для питомца",
  buySlot,
}: PetServicesProps) {
  const article = variant === "article";

  return (
    <section className={`${styles.showcase}${article ? ` ${styles.showcaseArticle}` : ""}`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          <a href="#" className="btn btn--primary">
            <span>Смотреть еще</span>
          </a>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <ServiceCard key={item.id} data={item} variant={variant} />
          ))}
          {buySlot}
        </div>

        {!article && <Slider items={items} kind="service" />}

        <div className={styles.footer}>
          <a href="#" className="btn btn--primary">
            <span>Смотреть еще</span>
          </a>
        </div>
      </div>
    </section>
  );
}
