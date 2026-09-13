"use client";

import { useState } from "react";
import { BlogChevronIcon, PagerChevronIcon } from "./icons";
import ArticleCard from "./ArticleCard";
import Breadcrumbs from "./Breadcrumbs";
import LiveSection from "./LiveSection";
import Stories from "./Stories";
import { LIVE_ITEMS } from "./liveData";
import styles from "./BlogPage.module.css";

const ARTICLE_IMAGES = [
  "/images/blog/article-1.png",
  "/images/blog/article-2.png",
  "/images/blog/article-3.png",
];

const ARTICLES = Array.from({ length: 15 }, (_, index) => ({
  image: ARTICLE_IMAGES[index % ARTICLE_IMAGES.length],
  action: index % 3 === 1 ? "Смотреть видео" : "Читать статью",
}));

const CATEGORY_COLUMNS = Array.from({ length: 3 }, () => [
  "Душевные истории",
  "Новости проекта",
  "Уход за щенками",
  "Вакцинация",
  "Новости проекта",
  "Уход за щенками",
  "Вакцинация",
]);

export function Pager({ className }: { className?: string }) {
  return (
    <div className={`${styles.pager}${className ? ` ${className}` : ""}`}>
      <button type="button" className={styles.pagerButton}>
        <PagerChevronIcon direction="left" />
      </button>
      {[1, 2, 3, 4, 5, 6].map((page) => (
        <button
          type="button"
          key={page}
          className={`${styles.pagerButton}${page === 1 ? ` ${styles.pagerActive}` : ""}${page >= 5 ? ` ${styles.pagerMobileHidden}` : ""}`}
        >
          {page}
        </button>
      ))}
      <button type="button" className={styles.pagerButton}>
        <PagerChevronIcon />
      </button>
    </div>
  );
}

export default function BlogPage() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }]} current="Блог" />
        <h1>Блог</h1>
        <button type="button" className={`btn btn--primary ${styles.categoryButton}`} onClick={() => setCategoriesOpen(true)}>
          <span>Категории блога</span>
        </button>
        <div className={`${styles.categoryMenu}${categoriesOpen ? ` ${styles.categoryMenuOpen}` : ""}`}>
          <button type="button" className={styles.categoryClose} onClick={() => setCategoriesOpen(false)}>×</button>
          {CATEGORY_COLUMNS.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.categoryColumn}>
              {column.map((item, itemIndex) => (
                <a href="#" key={`${columnIndex}-${itemIndex}`} className={itemIndex === 0 ? styles.categorySelected : undefined}>
                  {itemIndex === 0 && <BlogChevronIcon />}
                  {item}
                </a>
              ))}
            </div>
          ))}
          <button type="button" className={styles.categoryMore}>Смотреть еще</button>
        </div>
      </section>

      <section className={styles.articles}>
        <div className={styles.articleGrid}>
          {ARTICLES.map((article, index) => <ArticleCard key={index} {...article} />)}
        </div>
        <Pager />
      </section>

      <Stories />

      <LiveSection items={LIVE_ITEMS} />
    </main>
  );
}
