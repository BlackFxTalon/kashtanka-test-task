"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  AddStoryLineIcon,
  AddStoryPlusIcon,
  BlogChevronIcon,
  BreadcrumbBackIcon,
  MaxIcon,
  PagerChevronIcon,
  ProfileIcon,
  RutubeIcon,
  TelegramIcon,
  YoutubeIcon,
} from "./icons";
import styles from "./BlogPage.module.css";

const ARTICLE_IMAGES = [
  "/images/blog/article-1.png",
  "/images/blog/article-4.png",
  "/images/blog/article-5.png",
];

const ARTICLES = Array.from({ length: 15 }, (_, index) => ({
  image: ARTICLE_IMAGES[index % ARTICLE_IMAGES.length],
  action: index % 3 === 1 ? "Смотреть видео" : "Читать статью",
}));

const STORY_IMAGES = [
  "/images/blog/story-1.png",
  "/images/blog/story-2.png",
  "/images/blog/story-3.png",
  "/images/blog/story-4.png",
  "/images/blog/story-1.png",
  "/images/blog/story-2.png",
];

const LIVE_ITEMS = [
  {
    image: "/images/blog/article-1.png",
    title: "Наши озорники, ищут дом - кто хочет себе идеального друга?",
    role: "Заводчик",
  },
  {
    image: "/images/blog/live-1.png",
    title: "Как правильно ухаживать за щенком? Приучаем щенка к режиму",
    role: "Заводчик",
  },
  {
    image: "/images/blog/live-extra-1.png",
    title: "Вакцинация и прививки - поговорим о постоянном контроле здоровья собак",
    role: "Ветеринар",
  },
  {
    image: "/images/blog/article-1.png",
    title: "Наши озорники, ищут дом - кто хочет себе идеального друга?",
    role: "Заводчик",
  },
  {
    image: "/images/blog/live-1.png",
    title: "Как правильно ухаживать за щенком? Приучаем щенка к режиму",
    role: "Заводчик",
  },
  {
    image: "/images/blog/live-extra-2.png",
    title: "Как правильно ухаживать за щенком - приучаем к месту, правила кормления",
    role: "Ветеринар",
  },
  {
    image: "/images/blog/article-1.png",
    title: "Наши озорники, ищут дом - кто хочет себе идеального друга?",
    role: "Заводчик",
  },
  {
    image: "/images/blog/live-1.png",
    title: "Как правильно ухаживать за щенком? Приучаем щенка к режиму",
    role: "Заводчик",
  },
];

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
          className={`${styles.pagerButton}${page === 1 ? ` ${styles.pagerActive}` : ""}`}
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

function ArticleCard({ image, action }: { image: string; action: string }) {
  return (
    <article className={styles.articleCard}>
      <Image className={styles.articleImage} src={image} alt="Собаки и специалисты проекта" fill sizes="(max-width: 979px) 355px, (max-width: 1239px) 420px, 33vw" />
      <span className={styles.category}>Категория новости</span>
      <div className={styles.articleDescription}>
        <h2>Догситер - почему это популярно и так не просто</h2>
        <a href="#" className="btn btn--primary">
          <span>{action}</span>
        </a>
      </div>
    </article>
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

function LiveCard({ image, title, role }: (typeof LIVE_ITEMS)[number]) {
  return (
    <article className={styles.liveCard}>
      <Image className={styles.liveImage} src={image} alt="Эфир о собаках" fill sizes="(max-width: 979px) 355px, (max-width: 1239px) 450px, 400px" />
      <span className={styles.liveBadge}>Живой эфир</span>
      <span className={styles.liveTime}>Время эфира <i /> 18.45 Мск</span>
      <div className={styles.liveDescription}>
        <h3>{title}</h3>
        <div className={styles.channels}>
          <YoutubeIcon />
          <RutubeIcon />
          <TelegramIcon />
          <MaxIcon />
          <i />
          <span>Выберите канал эфира</span>
        </div>
        <div className={styles.author}>
          <span className={styles.authorAvatar}>
            <ProfileIcon width={21} height={16} />
          </span>
          <span>Марина Авдеева</span>
          <span className={styles.role}>{role}</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const router = useRouter();
  const storySwiperRef = useRef<SwiperInstance | null>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.breadcrumbs}>
          <button type="button" className={styles.breadcrumbBack} onClick={() => router.back()}>
            <BreadcrumbBackIcon />
          </button>
          <Link href="/">Главная</Link>
          <span>-</span>
          <strong>Блог</strong>
        </div>
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
            {STORY_IMAGES.map((image, index) => (
              <SwiperSlide key={index} className={styles.storySlide}>
                <StoryCard image={image} />
              </SwiperSlide>
            ))}
            <SwiperSlide className={`${styles.storySlide} ${styles.addStorySlide}`}>
              <article className={styles.addStory}>
                <Image src="/images/blog/story-add.png" alt="" width={146} height={149} />
                <div className={styles.addStoryAction}>
                  <button type="button">
                    <AddStoryPlusIcon />
                  </button>
                  <AddStoryLineIcon />
                  <span>Размести<br />свою<br />историю дружбы</span>
                </div>
              </article>
            </SwiperSlide>
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

      <section className={styles.liveSection}>
        <div className={styles.sectionHeading}>
          <h2>On Line эфиры</h2>
          <a href="#" className="btn btn--primary"><span>Смотреть еще</span></a>
        </div>
        <div className={styles.liveGrid}>
          {LIVE_ITEMS.map((item, index) => <LiveCard key={index} {...item} />)}
        </div>
        <a href="#" className={`btn btn--primary ${styles.mobileMore}`}><span>Смотреть еще</span></a>
      </section>
    </main>
  );
}
