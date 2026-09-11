"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import ArticleCard, { type ArticleCardData } from "./ArticleCard";
import { PagerChevronIcon } from "./icons";
import styles from "./OtherArticles.module.css";

const ARTICLE_IMAGES = ["article-1.png", "article-2.png", "article-3.png"];
const ARTICLE_ACTIONS = ["Читать статью", "Смотреть видео", "Читать статью"];

const ARTICLES: ArticleCardData[] = Array.from({ length: 6 }, (_, index) => ({
  image: `/images/blog/${ARTICLE_IMAGES[index % ARTICLE_IMAGES.length]}`,
  action: ARTICLE_ACTIONS[index % ARTICLE_ACTIONS.length],
  title: "Догситер - почему это популярно и так не просто Вторая строка",
}));

export default function OtherArticles() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [atBeginning, setAtBeginning] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncControls = (swiper: SwiperInstance) => {
    setAtBeginning(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Другие статьи</h2>
        <div className={styles.controls}>
          <button
            type="button"
            disabled={atBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <PagerChevronIcon direction="left" />
          </button>
          <button
            type="button"
            disabled={atEnd}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <PagerChevronIcon />
          </button>
        </div>
      </div>

      <Swiper
        className={styles.swiper}
        slidesPerView="auto"
        spaceBetween={20}
        breakpoints={{ 1600: { spaceBetween: 60 } }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          syncControls(swiper);
        }}
        onSlideChange={syncControls}
        onResize={syncControls}
      >
        {ARTICLES.map((article, index) => (
          <SwiperSlide key={`${article.image}-${index}`} className={styles.slide}>
            <ArticleCard {...article} imageSizes="(max-width: 979px) 355px, (max-width: 1599px) 420px, 500px" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
