"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Announcement, { type AnnouncementData } from "./Announcement";
import styles from "./Slider375.module.css";

/* Слайдер Объявлений только для 375: одна карточка в кадре, точки-пагинация по Ui KIT */
export default function Slider375({ items }: { items: AnnouncementData[] }) {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Announcement data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
