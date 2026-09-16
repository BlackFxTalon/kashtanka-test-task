"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  "/images/blog/story-4.png",
  "/images/blog/story-1.png",
  "/images/blog/story-2.png",
  "/images/blog/story-3.png",
  "/images/blog/story-4.png",
  "/images/blog/story-3.png",
];

const ADD_STORY_SLIDES = 7;

type StorySlideData =
  | { key: string; image: string }
  | { key: string; image?: undefined };

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
        <Image src="/images/blog/story-add.png" alt="" width={146} height={149} />
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
  const [tabletStories, setTabletStories] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 980px) and (max-width: 1239px)");
    const syncTabletStories = () => setTabletStories(media.matches);

    syncTabletStories();
    media.addEventListener("change", syncTabletStories);
    return () => media.removeEventListener("change", syncTabletStories);
  }, []);

  const imageStorySlides: StorySlideData[] = STORY_IMAGES.map((image, index) => ({ key: `story-${index}`, image }));
  const addStorySlides: StorySlideData[] = Array.from({ length: ADD_STORY_SLIDES }, (_, index) => ({ key: `add-story-${index}` }));
  const [firstAddStorySlide, ...remainingAddStorySlides] = addStorySlides;
  const storySlides = tabletStories && firstAddStorySlide
    ? [
        ...imageStorySlides.slice(0, 3),
        firstAddStorySlide,
        ...imageStorySlides.slice(3),
        ...remainingAddStorySlides,
      ]
    : [...imageStorySlides, ...addStorySlides];

  return (
    <section className={styles.stories}>
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
          {storySlides.map((slide) => (
            <SwiperSlide key={slide.key} className={styles.storySlide}>
              {slide.image ? <StoryCard image={slide.image} /> : <AddStoryCard />}
            </SwiperSlide>
          ))}
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
  );
}
