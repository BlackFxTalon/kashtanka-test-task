"use client";

import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticleCard from "./ArticleCard";
import { PagerChevronIcon } from "./icons";
import styles from "./BlogUseful.module.css";

const IMAGES = [
  "/images/blog/article-1.webp",
  "/images/blog/article-2.webp",
  "/images/blog/article-3.webp",
  "/images/blog/article-2.webp",
  "/images/dogs/dog-2.webp",
  "/images/blog/article-1.webp",
];

const ARTICLES = IMAGES.map((image, index) => ({
  image,
  action: index % 3 === 1 ? "Смотреть видео" : "Читать статью",
}));

const SIDEBAR_ARTICLES = [
  "/images/blog/article-1.webp",
  "/images/blog/live-2.webp",
  "/images/blog/reading-3.webp",
  "/images/blog/story-3.webp",
].map((image) => ({ image, action: "Читать статью" }));

interface BlogUsefulProps {
  variant?: "default" | "sidebar";
}

export default function BlogUseful({ variant = "default" }: BlogUsefulProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const sidebar = variant === "sidebar";
  const articles = sidebar ? SIDEBAR_ARTICLES : ARTICLES;

  return (
    <section className={`${styles.section}${sidebar ? ` ${styles.sidebar}` : ""}`}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2>Блог с пользой</h2>
          {!sidebar && <div className={styles.controls}>
            <div className={styles.nav}>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <PagerChevronIcon direction="left" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.navButtonRight}`}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <PagerChevronIcon direction="right" />
              </button>
            </div>
            <a href="#" className="btn btn--primary">
              <span>Смотреть еще</span>
            </a>
          </div>}
        </div>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <ArticleCard key={`${article.image}-${index}`} {...article} imageSizes={sidebar ? "350px" : "500px"} />
          ))}
        </div>

        {!sidebar && <Swiper
          className={styles.slider}
          slidesPerView="auto"
          spaceBetween={30}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {ARTICLES.map((article, index) => (
            <SwiperSlide key={`${article.image}-${index}`}>
              <ArticleCard {...article} imageSizes="500px" />
            </SwiperSlide>
          ))}
        </Swiper>}

        {!sidebar && <div className={styles.bottom}>
          <a href="#" className="btn btn--primary">
            <span>Смотреть еще</span>
          </a>
        </div>}
      </div>
    </section>
  );
}
