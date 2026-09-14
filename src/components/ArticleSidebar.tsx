"use client";

import { useState } from "react";
import ArticleCard, { type ArticleCardData } from "./ArticleCard";
import type { AnnouncementData } from "./Announcement";
import BlogUseful from "./BlogUseful";
import PlanetRewards from "./PlanetRewards";
import Showcase from "./Showcase";
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

const ARTICLE_ANNOUNCEMENTS: AnnouncementData[] = [
  {
    id: 101,
    breed: "Золотистый ретривер",
    title: "Малыши золотистого ретривера",
    titleLine2: "Вторая строка",
    price: "50 000 ₽",
    maleCount: 5,
    femaleCount: 3,
    city: "Москва",
    litterDate: "03.03.2026",
    photo: "/images/dogs/dog-1.png",
  },
  {
    id: 102,
    breed: "Золотистый ретривер",
    title: "Малыши золотистого ретривера",
    titleLine2: "Вторая строка",
    price: "50 000 ₽",
    maleCount: 5,
    femaleCount: 3,
    city: "Москва",
    litterDate: "03.03.2026",
    photo: "/images/dogs/ad-2.png",
  },
  {
    id: 103,
    breed: "Золотистый ретривер",
    title: "Малыши золотистого ретривера",
    titleLine2: "Вторая строка",
    price: "50 000 ₽",
    maleCount: 5,
    femaleCount: 3,
    city: "Москва",
    litterDate: "03.03.2026",
    photo: "/images/dogs/ad-3.png",
  },
  {
    id: 104,
    breed: "Золотистый ретривер",
    title: "Малыши золотистого ретривера",
    titleLine2: "Вторая строка",
    price: "50 000 ₽",
    maleCount: 5,
    femaleCount: 3,
    city: "Москва",
    litterDate: "03.03.2026",
    photo: "/images/dogs/ad-4.png",
  },
];

interface ArticleSidebarProps {
  variant?: "article" | "about" | "planet";
}

export default function ArticleSidebar({ variant = "article" }: ArticleSidebarProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const about = variant === "about";
  const planet = variant === "planet";

  return (
    <aside className={`${styles.aside}${about ? ` ${styles.about}` : ""}${planet ? ` ${styles.planet}` : ""}`}>
      {!about && !planet && <nav className={styles.categories}>
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
      </nav>}

      {planet ? <PlanetRewards /> : about ? <BlogUseful variant="sidebar" /> : <section className={styles.reading}>
        <h2>Сейчас читают</h2>
        <div className={styles.readingGrid}>
          {READING_ITEMS.map((item) => (
            <ArticleCard key={item.image} {...item} />
          ))}
        </div>
      </section>}

      <Showcase items={ARTICLE_ANNOUNCEMENTS} variant="article" />
    </aside>
  );
}
