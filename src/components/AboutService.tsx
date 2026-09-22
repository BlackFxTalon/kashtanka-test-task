"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  PagerChevronIcon,
} from "./icons";
import styles from "./AboutService.module.css";

const projects = [
  { id: "article", image: "/images/blog/article-3.webp" },
  { id: "vet", image: "/images/social/project-vet.webp" },
  { id: "group", image: "/images/social/project-group.webp" },
  { id: "reading", image: "/images/blog/reading-3.webp" },
];

const supportProjects = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: "Название проекта",
}));

export function Supporters({ variant = "default" }: { variant?: "default" | "planet" | "bloggers" }) {
  const supporterSwiper = useRef<SwiperInstance | null>(null);
  const touchStartX = useRef<number | null>(null);
  const bloggers = variant === "bloggers";
  const supporterProjectsForVariant = bloggers ? Array.from({ length: 12 }, (_, index) => ({ id: index + 1, name: "Название проекта" })) : supportProjects;
  const [bloggerMobilePage, setBloggerMobilePage] = useState(0);
  const mobileBloggers = () => bloggers && typeof window !== "undefined" && window.innerWidth < 980;

  function moveBloggers(direction: "next" | "previous") {
    if (!mobileBloggers()) {
      if (direction === "next") {
        supporterSwiper.current?.slideNext();
      } else {
        supporterSwiper.current?.slidePrev();
      }
      return;
    }

    const pages = Math.ceil(supporterProjectsForVariant.length / 4);
    setBloggerMobilePage((page) => (page + (direction === "next" ? 1 : pages - 1)) % pages);
  }

  return (
    <div className={`${styles.supporters}${variant === "planet" ? ` ${styles.supportersPlanet}` : ""}${bloggers ? ` ${styles.supportersBloggers}` : ""}`}>
      {variant === "default" && <h2>Нас поддерживают</h2>}
      <div
        className={styles.supporterSlider}
        data-mobile-page={bloggerMobilePage}
        onTouchStart={(event) => {
          if (mobileBloggers()) touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (!mobileBloggers() || touchStartX.current === null) return;

          const distance = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;

          if (Math.abs(distance) < 30) return;
          moveBloggers(distance < 0 ? "next" : "previous");
        }}
      >
        <Swiper
          onSwiper={(swiper) => { supporterSwiper.current = swiper; }}
          slidesPerView={variant === "planet" || bloggers ? "auto" : 2}
          spaceBetween={bloggers ? 65 : 20}
          breakpoints={bloggers ? { 980: { spaceBetween: 50 }, 1600: { spaceBetween: 72 }, 1920: { spaceBetween: 65 } } : variant === "planet" ? undefined : { 1400: { slidesPerView: 3 }, 1600: { slidesPerView: 4 } }}
        >
          {supporterProjectsForVariant.map((project) => (
            <SwiperSlide className={styles.supporterSlide} key={project.id}>
              <article className={styles.supporterCard}>
                <div className={styles.supporterImage}>
                  <Image src="/images/blog/story-add.webp" alt="Плейсхолдер проекта" sizes="120px" width={70} height={70}/>
                </div>
                <span>{variant === "planet" || bloggers ? <>Название<br />проекта</> : project.name}</span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.sliderControls}>
          <button type="button" onClick={() => moveBloggers("previous")}><PagerChevronIcon direction="left" /></button>
          <button type="button" onClick={() => moveBloggers("next")}><PagerChevronIcon /></button>
        </div>
      </div>
    </div>
  );
}

export default function AboutService() {
  return (
    <section className={styles.section}>
      <div className={styles.aboutInner}>
        <div className={styles.aboutColumn}>
          <article className={styles.description}>
          <span className={styles.tag}>О сервисе</span>
          <h2>Каштанка - для вас и вашего питомца</h2>
          <div className={styles.copy}>
            <p>Платформа «Каштанка» — это профессиональный сервис по продаже породистых щенков от ведущих заводчиков. Мы предлагаем только элитных малышей с полным пакетом документов: родословной, ветеринарным паспортом, прививками по возрасту и клеймом или чипом. Все щенки проходят племенной отбор, получают качественный уход, правильное кормление и социализацию, что гарантирует их здоровье и крепкую психику.</p>
            <p>В нашем каталоге представлены разные породы — от популярных до редких. Каждый питомец вырастает в любви и заботе, а мы помогаем новым владельцам на всех этапах: консультируем по содержанию, воспитанию и адаптации щенка в доме. Найдите верного друга, который станет полноценным членом вашей семьи! А так же мы помогаем социальным проектам</p>
          </div>
            <div className={styles.descriptionActions}>
              <a href="#" className="btn btn--primary"><span>Подробнее</span></a>
              <a href="#" className="btn btn--primary"><span>Поддержать проект</span></a>
            </div>
          </article>

          <Supporters />
        </div>

        <div className={styles.projects}>
          <a href="#" className={`btn btn--white ${styles.projectsTag}`}><span>Социальные проекты</span></a>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.id}>
                <Image src={project.image} alt="Социальный проект помощи животным" fill sizes="(max-width: 979px) 355px, 500px" />
                <div className={styles.projectContent}>
                  <h3>Название социального проекта</h3>
                  <div className={styles.projectActions}>
                    <a href="#" className="btn btn--white"><span className={styles.moreDesktop}>Подробнее о проекте</span><span className={styles.moreMobile}>Подробнее</span></a>
                    <a href="#" className="btn btn--white"><span>Помочь проекту</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
