"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "./icons";
import styles from "./BuySlot.module.css";

export default function BuySlot() {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className={styles.slot}>
      <div className={styles.slot__art}>
        <Image
          src="/images/buy-slot/art.png"
          alt="Собака ждёт хозяина"
          fill
          sizes="(max-width: 979px) calc(100vw - 40px), (max-width: 1599px) 450px, 400px"
          className={styles.slot__artImage}
        />
        <span className={styles.slot__badge}>Место свободно</span>
      </div>

      <div className={styles.slot__body}>
        <a href="#" className="btn btn--primary">
          <span>Купить место</span>
        </a>
        <button
          type="button"
          className={styles.slot__favorite}
          onClick={() => setFavorite((v) => !v)}
        >
          <HeartIcon active={favorite} />
        </button>
      </div>
    </article>
  );
}
