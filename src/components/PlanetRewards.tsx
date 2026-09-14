"use client";

import Image from "next/image";
import styles from "./PlanetRewards.module.css";

const rewards = [
  ["/images/planet/reward-2.jpeg", "200 ₽"],
  ["/images/planet/reward-4.jpeg", "800 ₽"],
  ["/images/planet/reward-3.jpeg", "3 700 ₽"],
  ["/images/planet/reward-7.jpeg", "6 000 ₽"]
];

export default function PlanetRewards() {
  return (
    <section className={styles.section}>
      <h2>Поддержите проект на Планете</h2>
      <div className={styles.grid}>
        {rewards.map(([image, price]) => (
          <article className={styles.card} key={image}>
            <div className={styles.imageWrap}>
              <Image src={image} alt="Вознаграждение за поддержку проекта" fill sizes="(max-width: 599px) 300px, 350px" />
              <span className={styles.price}>{price}</span>
            </div>
            <div className={styles.body}>
              <p>Поддержка проекта Каштанки<br />“Спасибо” за ваш вклад</p>
              <a className="btn btn--primary" href="#"><span>Поддержать проект</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
