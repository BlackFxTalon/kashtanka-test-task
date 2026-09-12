import type { ReactNode } from "react";

import Announcement, { type AnnouncementData } from "./Announcement";
import Slider from "./Slider";
import { ANNOUNCEMENTS } from "./data";
import styles from "./Showcase.module.css";

interface ShowcaseProps {
  items?: AnnouncementData[];
  variant?: "home" | "article";
  title?: string;
  buySlot?: ReactNode;
}

export default function Showcase({
  items = ANNOUNCEMENTS,
  variant = "home",
  title = "Новые объявления",
  buySlot,
}: ShowcaseProps) {
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
            <Announcement key={item.id} data={item} variant={variant} />
          ))}
          {buySlot}
        </div>

        {!article && <Slider items={items} buySlot={buySlot} />}

        <div className={styles.footer}>
          <a href="#" className="btn btn--primary">
            <span>Смотреть еще</span>
          </a>
        </div>
      </div>
    </section>
  );
}
