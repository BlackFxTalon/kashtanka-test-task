"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CityIcon, FemaleIcon, HeartIcon, MaleIcon } from "./icons";
import styles from "./Announcement.module.css";

export interface AnnouncementData {
  id: number;
  breed: string;
  title: string;
  titleLine2: string;
  price: string;
  maleCount: number;
  femaleCount: number;
  city: string;
  litterDate: string;
  photo: string;
}

interface AnnouncementProps {
  data: AnnouncementData;
  variant?: "home" | "article" | "litter";
}

export default function Announcement({ data, variant = "home" }: AnnouncementProps) {
  const [favorite, setFavorite] = useState(false);
  const article = variant === "article";
  const litter = variant === "litter";
  const favoriteButton = (
    <button
      type="button"
      className={`${styles.announcement__favorite}${favorite ? ` ${styles.announcement__favoriteActive}` : ""}`}
      onClick={() => setFavorite((value) => !value)}
      aria-label={favorite ? "Убрать из избранного" : "Добавить в избранное"}
    >
      <HeartIcon active={favorite} />
    </button>
  );

  return (
    <article className={`${styles.announcement}${article ? ` ${styles.announcementArticle}` : ""}`}>
      <div className={styles.announcement__media}>
        <Link
          href="/puppies"
          className={styles.announcement__mediaLink}
          aria-label={`Открыть объявление: ${data.title}`}
        >
          <Image
            src={data.photo}
            alt={`${data.title} — ${data.breed}`}
            fill
            sizes={article ? "(max-width: 1498px) 350px, 350px" : "(max-width: 979px) calc(100vw - 40px), (max-width: 1498px) 450px, 400px"}
            className={styles.announcement__photo}
          />
        </Link>
        <span className={styles.announcement__breed}>{data.breed}</span>
        {article && favoriteButton}
      </div>

      <div className={styles.announcement__body}>
        <div className={styles.announcement__heading}>
          <h3 className={styles.announcement__title}>
            <Link href="/puppies" className={styles.announcement__titleLink}>
              {data.title}
              <br />
              {data.titleLine2}
            </Link>
          </h3>
          {!article && favoriteButton}
        </div>

        <div className={styles.announcement__row}>
          <span className={styles.announcement__price}>{data.price}</span>
          <span className={styles.announcement__sex}>
            {!litter && <><span className={`${styles.announcement__sexMark} ${styles.announcement__sexMarkMale}`}>
              <MaleIcon />
            </span>
            <span className={`${styles.announcement__sexCount} ${styles.announcement__sexCountMale}`}>
              {data.maleCount}
            </span>
            <span className={styles.announcement__sexDivider} /></>}
            <span className={`${styles.announcement__sexMark} ${styles.announcement__sexMarkFemale}`}>
              <FemaleIcon />
            </span>
            <span className={`${styles.announcement__sexCount} ${styles.announcement__sexCountFemale}`}>
              {data.femaleCount}
            </span>
          </span>
        </div>

        <div className={styles.announcement__row}>
          <span className={styles.announcement__city}>
            <CityIcon />
            {data.city}
          </span>
          <span className={styles.announcement__date}>
            Дата помета
            <span className={styles.announcement__dateDivider} />
            {data.litterDate}
          </span>
        </div>
      </div>
    </article>
  );
}
