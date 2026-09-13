"use client";

import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Breadcrumbs from "./Breadcrumbs";
import { PagerChevronIcon } from "./icons";
import TariffCard from "./TariffCard";
import TariffDescription from "./TariffDescription";
import { PAGE_TARIFFS } from "./tariffData";
import styles from "./TariffsPage.module.css";

export default function TariffsPage() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }]} current="Тарифы" />
        <h1>Тарифы</h1>

        <TariffDescription variant="tariffs" />
      </section>

      <section className={styles.tariffs}>
        <div className={styles.controls}>
          <button type="button" className={styles.previous} onClick={() => swiperRef.current?.slidePrev()}>
            <PagerChevronIcon direction="left" />
          </button>
          <button type="button" className={styles.next} onClick={() => swiperRef.current?.slideNext()}>
            <PagerChevronIcon />
          </button>
        </div>

        <Swiper
          className={styles.slider}
          slidesPerView="auto"
          breakpoints={{
            0: { spaceBetween: 0 },
            365: {slidesPerView : 1, spaceBetween: 20 },
            980: { spaceBetween: 85, slidesPerView : 3 },
            1600: { spaceBetween: 63, slidesPerView : 5 },
            1920: { spaceBetween: 56, slidesPerView : 6 }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {PAGE_TARIFFS.map((tariff) => (
            <SwiperSlide key={tariff.id} className={styles.slide}>
              <TariffCard data={tariff} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
