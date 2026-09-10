"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Announcement, { type AnnouncementData } from "./Announcement";
import styles from "./Slider.module.css";

export default function Slider({ items }: { items: AnnouncementData[] }) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesInView, setSlidesInView] = useState(1);

  const syncState = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.activeIndex);
    setSlidesInView(Number(swiper.params.slidesPerView) || 1);
  };

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
      </Swiper>

      <div className={styles.pagination}>
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={[
              styles.paginationBullet,
              index >= activeIndex && index < activeIndex + slidesInView
                ? styles.paginationBulletActive
                : "",
              index === 0 ? styles.paginationBulletFirst : "",
              index === items.length - 1 ? styles.paginationBulletLast : "",
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
