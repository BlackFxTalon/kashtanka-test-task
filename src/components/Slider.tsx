"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Announcement, { type AnnouncementData } from "./Announcement";
import styles from "./Slider.module.css";

interface SliderProps {
  items: AnnouncementData[];
  buySlot?: ReactNode;
}

export default function Slider({ items, buySlot }: SliderProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesInView, setSlidesInView] = useState(1);

  const syncState = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.activeIndex);
    setSlidesInView(Number(swiper.params.slidesPerView) || 1);
  };

  const slidesCount = items.length + (buySlot ? 1 : 0);

  return (
    <div className={styles.slider}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          syncState(swiper);
        }}
        onSlideChange={syncState}
        onResize={syncState}
        spaceBetween={0}
        slidesPerView={1}
         breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Announcement data={item} />
          </SwiperSlide>
        ))}
        {buySlot ? <SwiperSlide>{buySlot}</SwiperSlide> : null}
      </Swiper>

      <div className={styles.pagination}>
        {Array.from({ length: slidesCount }, (_, index) => (
          <button
            key={index}
            type="button"
            className={[
              styles.paginationBullet,
              index >= activeIndex && index < activeIndex + slidesInView
                ? styles.paginationBulletActive
                : "",
              index === 0 ? styles.paginationBulletFirst : "",
              index === slidesCount - 1 ? styles.paginationBulletLast : "",
              slidesInView > 1 && index === activeIndex
                ? styles.paginationBulletPairStart
                : "",
              slidesInView > 1 && index === activeIndex + slidesInView - 1
                ? styles.paginationBulletPairEnd
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => swiperRef.current?.slideTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
