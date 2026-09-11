"use client";

import { useState } from "react";
import ArticleCard, { type ArticleCardData } from "./ArticleCard";
import { MenuArrowIcon } from "./icons";
import styles from "./ArticleSidebar.module.css";

const CATEGORIES = [
  "Душевные истории",
  "Уход за питомцами",
  "Вакцинация питомца",
  "Истории пород",
  "Реабилитация собак",
  "Тренировка собак",
  "Развитие питомца",
  "Социальные события",
  "Новости проекта",
];

const READING_ITEMS: ArticleCardData[] = [
  { image: "/images/blog/article-1.png", action: "Читать статью" },
  { image: "/images/blog/live-2.png", action: "Читать статью" },
  { image: "/images/blog/reading-3.png", action: "Читать статью" },
  { image: "/images/blog/story-3.png", action: "Читать статью" },
];

export default function ArticleSidebar() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <aside className={styles.aside}>
      <nav className={styles.categories}>
        {CATEGORIES.map((label, index) => (
          <a
            key={label}
            href="#"
            className={index === activeCategory ? styles.categoriesActive : undefined}
            onClick={(event) => {
              event.preventDefault();
              setActiveCategory(index);
            }}
          >
            <MenuArrowIcon />
            {label}
          </a>
        ))}
      </nav>

      <section className={styles.reading}>
        <h2>Сейчас читают</h2>
        <div className={styles.readingGrid}>
          {READING_ITEMS.map((item) => (
            <ArticleCard key={item.image} {...item} />
          ))}
        </div>
      </section>
    </aside>
  );
}
