"use client";

import { useState } from "react";
import Image from "next/image";
import { CityIcon, HeartIcon } from "./icons";
import type { ServiceCardData } from "./serviceData";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  data: ServiceCardData;
  variant?: "home" | "article";
}

export default function ServiceCard({ data, variant = "home" }: ServiceCardProps) {
  const [favorite, setFavorite] = useState(false);
  const article = variant === "article";

  return (
    <article className={styles.card}>
      <div className={styles.card__media}>
        <Image
          src={data.photo}
          alt={data.title}
          fill
          sizes={article ? "350px" : "(max-width: 979px) calc(100vw - 40px), (max-width: 1599px) 450px, 400px"}
          className={styles.card__photo}
        />
        <span className={styles.card__badge}>Услуга</span>
        <button
          type="button"
          className={`${styles.card__favorite}${favorite ? ` ${styles.card__favoriteActive}` : ""}`}
          onClick={() => setFavorite((v) => !v)}
        >
          <HeartIcon active={favorite} />
        </button>
      </div>

      <div className={styles.card__body}>
        <div className={styles.card__heading}>
          <h3 className={styles.card__title}>
            {data.title}
            {data.titleLine2 && (
              <>
                <br />
                {data.titleLine2}
              </>
            )}
          </h3>
        </div>

        <div className={styles.card__row}>
          <span className={styles.card__price}>
            {data.price}
            <span className={styles.card__priceDivider} />
            <span className={styles.card__priceSuffix}>{data.priceSuffix}</span>
          </span>
          <span className={styles.card__role}>{data.role}</span>
        </div>

        <div className={styles.card__row}>
          <span className={styles.card__user}>
            <Image src={data.avatar} alt="Аватар автора услуги" width={45} height={45} className={styles.card__avatar} />
            {data.author}
          </span>
          <span className={styles.card__city}>
            <CityIcon />
            {data.city}
          </span>
        </div>
      </div>
    </article>
  );
}
