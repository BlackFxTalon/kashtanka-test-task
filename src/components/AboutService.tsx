"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  PagerChevronIcon,
} from "./icons";
import styles from "./AboutService.module.css";

const projects = [
  { id: "article", image: "/images/blog/article-3.png" },
  { id: "vet", image: "/images/social/project-vet.png" },
  { id: "group", image: "/images/social/project-group.png" },
  { id: "reading", image: "/images/blog/reading-3.png" },
];

const supportProjects = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: "Название проекта",
}));

export function Supporters({ variant = "default" }: { variant?: "default" | "planet" }) {
  const supporterSwiper = useRef<SwiperInstance | null>(null);

  return (
    <div className={`${styles.supporters}${variant === "planet" ? ` ${styles.supportersPlanet}` : ""}`}>
      {variant !== "planet" && <h2>Нас поддерживают</h2>}
      <div className={styles.supporterSlider}>
        <Swiper
          onSwiper={(swiper) => { supporterSwiper.current = swiper; }}
          slidesPerView={variant === "planet" ? "auto" : 2}
          spaceBetween={20}
          breakpoints={variant === "planet" ? undefined : { 1400: { slidesPerView: 3 }, 1600: { slidesPerView: 4 } }}
        >
          {supportProjects.map((project) => (
            <SwiperSlide className={styles.supporterSlide} key={project.id}>
              <article className={styles.supporterCard}>
                <div className={styles.supporterImage}>
                  <Image src="/images/blog/story-add.png" alt="Плейсхолдер проекта" sizes="120px" width={70} height={70}/>
                </div>
                <span>{variant === "planet" ? <>Название<br />проекта</> : project.name}</span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.sliderControls}>
          <button type="button" onClick={() => supporterSwiper.current?.slidePrev()}><PagerChevronIcon direction="left" /></button>
          <button type="button" onClick={() => supporterSwiper.current?.slideNext()}><PagerChevronIcon /></button>
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
          <span className={styles.projectsTag}>Социальные проекты</span>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.id}>
                <Image src={project.image} alt="Социальный проект помощи животным" fill sizes="(max-width: 979px) 355px, 500px" />
                <div className={styles.projectContent}>
                  <h3>Название социального проекта</h3>
                  <div className={styles.projectActions}>
                    <a href="#" className="btn btn--primary"><span className={styles.moreDesktop}>Подробнее о проекте</span><span className={styles.moreMobile}>Подробнее</span></a>
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
