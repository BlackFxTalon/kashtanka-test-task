"use client";

import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticleCard from "./ArticleCard";
import { PagerChevronIcon } from "./icons";
import styles from "./BlogUseful.module.css";

const IMAGES = [
  "/images/blog/article-1.png",
  "/images/blog/article-2.png",
  "/images/blog/article-3.png",
  "/images/blog/article-2.png",
  "/images/dogs/dog-2.png",
  "/images/blog/article-1.png",
];

const ARTICLES = IMAGES.map((image, index) => ({
  image,
  action: index % 3 === 1 ? "Смотреть видео" : "Читать статью",
}));

export default function BlogUseful() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2>Блог с пользой</h2>
          <div className={styles.controls}>
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
          </div>
        </div>

        <div className={styles.grid}>
          {ARTICLES.map((article) => (
            <ArticleCard key={article.image} {...article} imageSizes="500px" />
          ))}
        </div>

        <Swiper
          className={styles.slider}
          slidesPerView="auto"
          spaceBetween={30}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {ARTICLES.map((article) => (
            <SwiperSlide key={article.image}>
              <ArticleCard {...article} imageSizes="500px" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.bottom}>
          <a href="#" className="btn btn--primary">
            <span>Смотреть еще</span>
          </a>
        </div>
      </div>
    </section>
  );
}
