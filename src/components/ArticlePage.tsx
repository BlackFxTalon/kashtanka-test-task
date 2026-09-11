"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { HeartIcon } from "./icons";
import styles from "./ArticlePage.module.css";

const ARTICLE_TITLE = "Как правильно ухаживать за щенком в первые дни рождения";

const PREPARATION_PARAGRAPHS = [
  "Оптимальный возраст для переезда щенка в новый дом — 2,5–3 месяца. К этому времени он уже получил первые уроки социального поведения от матери и однопомётников, у него сделаны начальные прививки, а нервная система достаточно окрепла для смены обстановки.",
  "Дом для маленького щенка — огромный неизведанный мир, полный опасностей. Осмотрите все комнаты на уровне глаз щенка: электрические провода необходимо спрятать в короба или поднять повыше. Бытовая химия, лекарства, комнатные растения (многие из них ядовиты), мелкие предметы — всё это должно быть надёжно убрано. Если у вас скользкий пол, застелите его нескользящими ковриками или матами — поскальзывания и падения могут привести к серьёзным травмам.",
  "У щенка должно быть своё место для отдыха — лежанка или домик в стороне от проходов и сквозняков. На время адаптации можно расположить лежанку поближе к хозяйской кровати, чтобы ночью щенок не чувствовал себя одиноко. Заинтересовать малыша в домике помогут лакомства и игрушки-погрызушки.",
];

const FIRST_DAYS_TEXT = "В первые 2–3 дня важно снизить нагрузку на щенка: минимум гостей, громких звуков и «проверок на смелость». Говорите со щенком тихим, ласковым голосом и придерживайтесь установленного режима кормления. Если щенок испугался и спрятался, не вытаскивайте его из укрытия — дайте ему время освоиться. Признаки стресса у щенка: частое зевание, дрожь, поджатый хвост, отказ от еды, прятки. Ваша задача — быть спокойным и предсказуемым.";

const LIST_ITEMS = ["Строка 1", "Строка 2", "Строка 3", "Строка 4", "Строка 5"];

function PreparationCopy() {
  return (
    <>
      {PREPARATION_PARAGRAPHS.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </>
  );
}

export default function ArticlePage() {
  const [favorite, setFavorite] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <article className={styles.article}>
          <Breadcrumbs
            className={styles.breadcrumbs}
            items={[
              { label: "Главная", href: "/" },
              { label: "Блог", href: "/blog" },
              { label: "Уход за питомцем", href: "#" },
            ]}
            current={ARTICLE_TITLE}
            mobileCurrentRow
            compact
          />

          <h1>{ARTICLE_TITLE}</h1>

          <div className={styles.hero}>
            <Image
              src="/images/dogs/dog-1.png"
              alt="Щенок золотистого ретривера лежит на траве"
              fill
              priority
              sizes="(max-width: 979px) calc(100vw - 40px), 1000px"
            />
            <span className={styles.topic}>Уход за питомцем</span>
            <button
              type="button"
              className={`${styles.favorite}${favorite ? ` ${styles.favoriteActive}` : ""}`}
              onClick={() => setFavorite((value) => !value)}
            >
              <HeartIcon active={favorite} />
            </button>
          </div>

          <div className={styles.copy}>
            <h2>Руководство по уходу за щенком: от первых дней до взросления - H2</h2>
            <p>Появление в доме маленького щенка — это не просто приобретение питомца, а принятие в семью нового члена, который полностью зависит от вас. Первые месяцы жизни закладывают фундамент здоровья, характера и поведения взрослой собаки, поэтому качественный уход в щенячьем возрасте — это прямая инвестиция в её будущее.</p>

            <div className={styles.initialPreparation}>
              <h3>Подготовка к появлению щенка - H3</h3>
              <PreparationCopy />
            </div>

            <h3>Первые дни в новом доме</h3>
            <p>{FIRST_DAYS_TEXT}</p>

            <blockquote>{FIRST_DAYS_TEXT}</blockquote>

            <ul>
              {LIST_ITEMS.map((item) => <li key={`bullet-${item}`}>{item}</li>)}
            </ul>
            <ol>
              {LIST_ITEMS.map((item) => <li key={`number-${item}`}>{item}</li>)}
            </ol>

            <figure className={styles.photo}>
              <div className={styles.photoFrame}>
                <Image
                  src="/images/dogs/dog-3.png"
                  alt="Немецкая овчарка бежит по траве"
                  fill
                  sizes="(max-width: 979px) calc(100vw - 40px), 650px"
                />
              </div>
              <figcaption>Подпись по фото</figcaption>
            </figure>

            <p className={styles.postPhotoCopy}>{FIRST_DAYS_TEXT}</p>

            <div className={styles.mediaSlots}>
              <div className={styles.mediaSlot} />
              <div className={styles.mediaSlot} />
            </div>

            <h3 className={styles.finalHeading}>Подготовка к появлению щенка - H3</h3>
            <div className={styles.finalPreparation}>
              <PreparationCopy />
            </div>

            <div className={styles.separator} />

            <div className={styles.tags}>
              <strong>Тэги:</strong>
              <a href="#" className={`btn btn--primary ${styles.tag}`}>Щенки</a>
              <a href="#" className={`btn btn--primary ${styles.tag}`}>Щенки</a>
              <a href="#" className={`btn btn--primary ${styles.tag} ${styles.tagActive}`}>Уход</a>
            </div>

            <div className={styles.shareSlot} />
          </div>
        </article>
      </div>
    </main>
  );
}
