"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { PagerChevronIcon } from "./icons";
import styles from "./PartnersSlider.module.css";

export interface PartnerSlide {
  id: number;
  variant: "yellow" | "white";
  logo: "yellow" | "white";
}

export interface PartnersSliderProps {
  title?: string;
  items: PartnerSlide[];
  className?: string;
}

const LOGOS = {
  yellow: {
    src: "/images/partners/partner-yellow.svg",
    alt: "Логотип партнёра",
    width: 221,
    height: 68,
  },
  white: {
    src: "/images/partners/partner-white.png",
    alt: "Логотип партнёра",
    width: 207,
    height: 82,
  },
} as const;

export default function PartnersSlider({ title = "Наши партнеры", items, className }: PartnersSliderProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section className={`${styles.section}${className ? ` ${className}` : ""}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.sliderArea}>
        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <PagerChevronIcon direction="left" />
        </button>
        <Swiper
          className={styles.slider}
          slidesPerView="auto"
          breakpoints={{
            0: { spaceBetween: 0 },
            980: { spaceBetween: 41 },
            1280: { spaceBetween: 53 },
            1680: { spaceBetween: 35 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item) => {
            const logo = LOGOS[item.logo];
            return (
              <SwiperSlide key={item.id} className={styles.slide}>
                <article className={`${styles.card} ${styles[item.variant]}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={`${styles.logo} ${styles[`logo${item.logo[0].toUpperCase()}${item.logo.slice(1)}`]}`}
                  />
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <PagerChevronIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
