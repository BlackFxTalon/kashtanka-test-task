"use client";

import { useState } from "react";
import Image from "next/image";
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

export default function Announcement({ data }: { data: AnnouncementData }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className={styles.announcement}>
      <div className={styles.announcement__media}>
        <Image
          src={data.photo}
          alt={`${data.title} — ${data.breed}`}
          fill
          sizes="(max-width: 979px) calc(100vw - 40px), (max-width: 1599px) 450px, 400px"
          className={styles.announcement__photo}
        />
        <span className={styles.announcement__breed}>{data.breed}</span>
      </div>

      <div className={styles.announcement__body}>
        <div className={styles.announcement__heading}>
          <h3 className={styles.announcement__title}>
            {data.title}
            <br />
            {data.titleLine2}
          </h3>
          <button
            type="button"
            className={`${styles.announcement__favorite}${favorite ? ` ${styles.announcement__favoriteActive}` : ""}`}
            onClick={() => setFavorite((v) => !v)}
          >
            <HeartIcon active={favorite} />
          </button>
        </div>

        <div className={styles.announcement__row}>
          <span className={styles.announcement__price}>{data.price}</span>
          <span className={styles.announcement__sex}>
            <span className={`${styles.announcement__sexMark} ${styles.announcement__sexMarkMale}`}>
              <MaleIcon />
            </span>
            <span className={styles.announcement__sexCount}>{data.maleCount}</span>
            <span className={styles.announcement__sexDivider} />
            <span className={`${styles.announcement__sexMark} ${styles.announcement__sexMarkFemale}`}>
              <FemaleIcon />
            </span>
            <span className={styles.announcement__sexCount}>{data.femaleCount}</span>
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
