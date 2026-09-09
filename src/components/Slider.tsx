"use client";

import { useMemo, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Announcement, { type AnnouncementData } from "./Announcement";
import styles from "./Slider.module.css";

const PAGINATION_SIZE = 5;

export default function Slider({ items }: { items: AnnouncementData[] }) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleIndexes = useMemo(() => {
    const count = Math.min(PAGINATION_SIZE, items.length);
    const start = Math.min(
      Math.max(activeIndex - 3, 0),
      Math.max(items.length - count, 0),
    );

    return Array.from({ length: count }, (_, index) => start + index);
  }, [activeIndex, items.length]);

  return (
    <div className={styles.slider}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={0}
        slidesPerView={1}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Announcement data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.pagination}>
        {visibleIndexes.map((index, position) => (
          <button
            key={index}
            type="button"
            className={[
              styles.paginationBullet,
              index === activeIndex ? styles.paginationBulletActive : "",
              position === 0 ? styles.paginationBulletFirst : "",
              position === visibleIndexes.length - 1
                ? styles.paginationBulletLast
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
