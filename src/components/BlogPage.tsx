"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  AddStoryLineIcon,
  AddStoryPlusIcon,
  BlogChevronIcon,
  PagerChevronIcon,
} from "./icons";
import ArticleCard from "./ArticleCard";
import Breadcrumbs from "./Breadcrumbs";
import LiveSection from "./LiveSection";
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

const STORY_IMAGES = [
  "/images/blog/story-4.png",
  "/images/blog/story-1.png",
  "/images/blog/story-2.png",
  "/images/blog/story-3.png",
  "/images/blog/story-4.png",
  "/images/blog/story-3.png",
];

const ADD_STORY_SLIDES = 7;

type StorySlideData =
  | { key: string; image: string }
  | { key: string; image?: undefined };

const CATEGORY_COLUMNS = Array.from({ length: 3 }, () => [
  "Душевные истории",
  "Новости проекта",
  "Уход за щенками",
  "Вакцинация",
  "Новости проекта",
  "Уход за щенками",
  "Вакцинация",
]);

function Pager() {
  return (
    <div className={styles.pager}>
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

function StoryCard({ image }: { image: string }) {
  return (
    <article className={styles.storyCard}>
      <Image src={image} alt="История дружбы собак" fill sizes="200px" />
      <div className={styles.storyInfo}>
        <h3>Арчи + Милана</h3>
        <a href="#" className={`btn btn--white ${styles.storyButton}`}>
          <span>Читать историю</span>
        </a>
      </div>
    </article>
  );
}

function AddStoryCard() {
  return (
    <article className={styles.addStory}>
      <div className={styles.addStoryBlock}>
        <Image src="/images/blog/story-add.png" alt="" width={146} height={149} />
      </div>
      <div className={styles.addStoryAction}>
        <button type="button">
          <AddStoryPlusIcon />
        </button>
        <AddStoryLineIcon />
        <span>Размести<br />свою<br />историю</span>
      </div>
    </article>
  );
}


export default function BlogPage() {
  const storySwiperRef = useRef<SwiperInstance | null>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [tabletStories, setTabletStories] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 980px) and (max-width: 1239px)");
    const syncTabletStories = () => setTabletStories(media.matches);

    syncTabletStories();
    media.addEventListener("change", syncTabletStories);
    return () => media.removeEventListener("change", syncTabletStories);
  }, []);

  const imageStorySlides: StorySlideData[] = STORY_IMAGES.map((image, index) => ({ key: `story-${index}`, image }));
  const addStorySlides: StorySlideData[] = Array.from({ length: ADD_STORY_SLIDES }, (_, index) => ({ key: `add-story-${index}` }));
  const [firstAddStorySlide, ...remainingAddStorySlides] = addStorySlides;
  const storySlides = tabletStories && firstAddStorySlide
    ? [
        ...imageStorySlides.slice(0, 3),
        firstAddStorySlide,
        ...imageStorySlides.slice(3),
        ...remainingAddStorySlides,
      ]
    : [...imageStorySlides, ...addStorySlides];

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

      <section className={styles.stories}>
        <h2>Душевные истории</h2>
        <div className={styles.storyRow}>
          <Swiper
            className={styles.storySwiper}
            onSwiper={(swiper) => {
              storySwiperRef.current = swiper;
            }}
            slidesPerView="auto"
            spaceBetween={30}
          >
            {storySlides.map((slide) => (
              <SwiperSlide key={slide.key} className={styles.storySlide}>
                {slide.image ? <StoryCard image={slide.image} /> : <AddStoryCard />}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.storyControls}>
            <button type="button" onClick={() => storySwiperRef.current?.slidePrev()}>
              <PagerChevronIcon direction="left" />
            </button>
            <button type="button" onClick={() => storySwiperRef.current?.slideNext()}>
              <PagerChevronIcon />
            </button>
          </div>
        </div>
      </section>

      <LiveSection items={LIVE_ITEMS} />
    </main>
  );
}
