"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  AddStoryLineIcon,
  AddStoryPlusIcon,
  PagerChevronIcon,
} from "./icons";
import styles from "./Stories.module.css";

const STORY_IMAGES = [
  "/images/blog/story-4.webp",
  "/images/blog/story-1.webp",
  "/images/blog/story-2.webp",
  "/images/blog/story-3.webp",
  "/images/blog/story-4.webp",
  "/images/blog/story-3.webp",
  "/images/blog/story-1.webp",
  "/images/blog/story-2.webp",
  "/images/blog/story-4.webp",
  "/images/blog/story-3.webp",
  "/images/blog/story-1.webp",
  "/images/blog/story-2.webp",
];

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
        <Image src="/images/blog/story-add.webp" alt="Плюс — добавить свою историю" width={146} height={149} />
      </div>
      <div className={styles.addStoryAction}>
        <Link href="/story-request" aria-label="Разместить свою историю">
          <AddStoryPlusIcon />
        </Link>
        <AddStoryLineIcon />
        <span>Размести<br />свою<br />историю</span>
      </div>
    </article>
  );
}

interface StoriesProps {
  title?: string;
}

export default function Stories({ title = "Душевные истории" }: StoriesProps) {
  const storySwiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section id="stories" className={styles.stories}>
      <h2>{title}</h2>
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
            <SwiperSlide key={`story-${index}`} className={styles.storySlide}>
              <StoryCard image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <AddStoryCard />
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
  );
}
