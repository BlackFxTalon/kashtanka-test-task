"use client";

import { useState } from "react";
import Image from "next/image";
import { MaleIcon, FemaleIcon } from "./icons";
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
          alt=""
          fill
          sizes="(max-width: 979px) calc(100vw - 40px), (max-width: 1599px) 450px, 400px"
          className={styles.announcement__photo}
        />
        <span className={styles.announcement__breed}>{data.breed}</span>
        <button
          type="button"
          className={`${styles.announcement__favorite}${favorite ? ` ${styles.announcement__favoriteActive}` : ""}`}
          onClick={() => setFavorite((v) => !v)}
        >
          <Image
            src={favorite ? "/images/icons/heart-active.svg" : "/images/icons/heart-inactive.svg"}
            alt=""
            width={38}
            height={38}
          />
        </button>
      </div>

      <div className={styles.announcement__body}>
        <h3 className={styles.announcement__title}>
          {data.title}
          <br />
          {data.titleLine2}
        </h3>

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
            <Image src="/images/icons/icon-city.svg" alt="" width={10} height={10} />
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
