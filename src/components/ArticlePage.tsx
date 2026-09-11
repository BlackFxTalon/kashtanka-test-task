"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import ArticleSidebar from "./ArticleSidebar";
import Breadcrumbs from "./Breadcrumbs";
import {
  HeartIcon,
  InstagramIcon,
  MaxIcon,
  PinterestIcon,
  TelegramIcon,
  VkIcon,
  WhatsappIcon,
  YandexZenIcon,
} from "./icons";
import styles from "./ArticlePage.module.css";

const ARTICLE_TITLE = "Как правильно ухаживать за щенком в первые дни рождения";

const PREPARATION_PARAGRAPHS = [
  "Оптимальный возраст для переезда щенка в новый дом — 2,5–3 месяца. К этому времени он уже получил первые уроки социального поведения от матери и однопомётников, у него сделаны начальные прививки, а нервная система достаточно окрепла для смены обстановки.",
  "Дом для маленького щенка — огромный неизведанный мир, полный опасностей. Осмотрите все комнаты на уровне глаз щенка: электрические провода необходимо спрятать в короба или поднять повыше. Бытовая химия, лекарства, комнатные растения (многие из них ядовиты), мелкие предметы — всё это должно быть надёжно убрано. Если у вас скользкий пол, застелите его нескользящими ковриками или матами — поскальзывания и падения могут привести к серьёзным травмам.",
  "У щенка должно быть своё место для отдыха — лежанка или домик в стороне от проходов и сквозняков. На время адаптации можно расположить лежанку поближе к хозяйской кровати, чтобы ночью щенок не чувствовал себя одиноко. Заинтересовать малыша в домике помогут лакомства и игрушки-погрызушки.",
];

const FIRST_DAYS_TEXT = "В первые 2–3 дня важно снизить нагрузку на щенка: минимум гостей, громких звуков и «проверок на смелость». Говорите со щенком тихим, ласковым голосом и придерживайтесь установленного режима кормления. Если щенок испугался и спрятался, не вытаскивайте его из укрытия — дайте ему время освоиться. Признаки стресса у щенка: частое зевание, дрожь, поджатый хвост, отказ от еды, прятки. Ваша задача — быть спокойным и предсказуемым.";

const LIST_ITEMS = ["Строка 1", "Строка 2", "Строка 3", "Строка 4", "Строка 5"];

const SLIDE_IMAGES = [
  { image: "/images/dogs/slider-1.png", alt: "Щенок немецкой овчарки лежит на зелёной траве" },
  { image: "/images/dogs/dog-2.png", alt: "Спящий щенок с игрушкой в своём домике" },
  { image: "/images/dogs/dog-4.png", alt: "Белый щенок сидит среди садовых цветов" },
];

const SHARE_LINKS = [
  { label: "Telegram", Icon: TelegramIcon },
  { label: "Max", Icon: MaxIcon },
  { label: "WhatsApp", Icon: WhatsappIcon },
  { label: "VK", Icon: VkIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Яндекс Дзен", Icon: YandexZenIcon },
  { label: "Pinterest", Icon: PinterestIcon },
];

function PreparationCopy() {
  return (
    <>
      {PREPARATION_PARAGRAPHS.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </>
  );
}

function MediaSlider() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.mediaSlider}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={0}
        slidesPerView={1}
      >
        {SLIDE_IMAGES.map((image) => (
          <SwiperSlide key={image.image}>
            <div className={styles.mediaSlide}>
              <Image src={image.image} alt={image.alt} fill sizes="(max-width: 1239px) 420px, 460px" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.mediaPagination}>
        {SLIDE_IMAGES.map((image, index) => (
          <button
            key={image.image}
            type="button"
            className={index === activeIndex ? `${styles.mediaBullet} ${styles.mediaBulletActive}` : styles.mediaBullet}
            onClick={() => swiperRef.current?.slideTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

function ArticleVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    videoRef.current?.play().then(() => setPlaying(true)).catch(() => {
      // Источник видео заказчиком не предоставлен: кнопка остаётся на месте.
    });
  };

  return (
    <figure className={styles.videoFigure}>
      <div className={styles.videoFrame}>
        <video
          ref={videoRef}
          className={styles.video}
          poster="/images/dogs/video-poster.png"
          preload="none"
          controls={playing}
        />
        {!playing && (
          <button type="button" className={styles.playButton} onClick={start}>
            <Image src="/images/dogs/play.svg" alt="" width={78} height={78} />
          </button>
        )}
      </div>
      <figcaption>Подпись под видео</figcaption>
    </figure>
  );
}

function Share() {
  return (
    <div className={styles.share}>
      <strong>Поделиться:</strong>
      <div className={styles.shareLinks}>
        {SHARE_LINKS.map(({ label, Icon }) => (
          <a key={label} href="#" aria-label={label}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ArticlePage() {
  const [favorite, setFavorite] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.columns}>
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
                <MediaSlider />
                <ArticleVideo />
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

              <Share />
            </div>
          </article>

          <ArticleSidebar />
        </div>
      </div>
    </main>
  );
}
