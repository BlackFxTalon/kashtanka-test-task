"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Announcement, { type AnnouncementData } from "./Announcement";
import announcementStyles from "./Announcement.module.css";
import { ArticleShare } from "./ArticlePage";
import articleStyles from "./ArticlePage.module.css";
import Breadcrumbs from "./Breadcrumbs";
import Showcase from "./Showcase";

import {
  AddStoryPlusIcon,
  CityIcon,
  FemaleIcon,
  HeartIcon,
  MaleIcon,
  PagerChevronIcon,
} from "./icons";
import styles from "./PuppyAnnouncementPage.module.css";
import breederAvatar from "../assets/figma/breeder-avatar.png";
import tipCheck from "../assets/figma/tip-check.svg";
import petCountDivider from "../assets/figma/pet-count-divider.svg";
import statusApproved from "../assets/figma/status-approved.svg";
import statusRejected from "../assets/figma/status-rejected.svg";
const PHOTOS = Array.from({ length: 9 }, () => "/images/dogs/dog-1.png");
const LITTER: AnnouncementData[] = [
  60000, 90000, 80000, 60000, 75000, 85000, 70000, 95000,
].map((price, index) => ({
  id: index + 201,
  breed: "Золотистый ретривер",
  title: "Малыши золотистого ретривера",
  titleLine2: "Вторая строка",
  price: `${price.toLocaleString("ru-RU")} ₽`,
  maleCount: 5,
  femaleCount: 1,
  city: "Москва",
  litterDate: "03.03.2026",
  photo: "/images/dogs/dog-1.png",
}));
function SliderControls({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className={styles.controls}>
      <button type="button" aria-label="Предыдущее фото" onClick={onPrev}>
        <PagerChevronIcon direction="left" />
      </button>
      <button type="button" aria-label="Следующее фото" onClick={onNext}>
        <PagerChevronIcon direction="right" />
      </button>
    </div>
  );
}
function PedigreeCard({ main = false }: { main?: boolean }) {
  return (
    <article className={main ? styles.pedigreeMain : styles.pedigreeBranchCard}>
      {main && (
        <div className={styles.pedigreePhoto}>
          <Image
            src="/images/dogs/dog-1.png"
            alt="Щенок бигля"
            fill
            sizes="400px"
          />
        </div>
      )}
      <div className={styles.pedigreeCardInfo}>
        <div>
          <div className={styles.pedigreeRole}>
            <strong>Мать</strong>
            <span
              className={`${announcementStyles.announcement__sexMark} ${announcementStyles.announcement__sexMarkFemale}`}
            >
              <FemaleIcon />
            </span>
          </div>
          <h3>KARA URUS BONY SHINE PEARL</h3>
          <span>
            <CityIcon /> Москва
          </span>
        </div>
        {!main && (
          <Image
            className={styles.pedigreeAvatar}
            src="/images/dogs/dog-3.png"
            alt="Родитель щенка"
            width={60}
            height={60}
          />
        )}
      </div>
    </article>
  );
}
function PedigreeTree() {
  return (
    <div className={styles.pedigreeTree}>
      <PedigreeCard main />
      <div className={styles.pedigreeLevels}>
        {[0, 1, 2].map((level) => (
          <div className={styles.pedigreeLevel} key={level}>
            <div
              className={`${styles.pedigreeAdd} ${styles.pedigreeAddActive}`}
            >
              <button
                className={`${styles.pedigreeAddButton} ${styles.pedigreeAddActiveButton}`}
                type="button"
                aria-label="Добавить родственника"
              >
                <AddStoryPlusIcon />
              </button>
            </div>
            <div className={styles.pedigreePair}>
              <PedigreeCard />
              <PedigreeCard />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Gallery() {
  const slider = useRef<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);
  const firstPreview = Math.min(Math.max(active - 1, 0), PHOTOS.length - 2);
  const previews = PHOTOS.slice(firstPreview, firstPreview + 3);
  const selectSlide = (index: number) => {
    const nextIndex = (index + PHOTOS.length) % PHOTOS.length;
    setActive(nextIndex);
    slider.current?.slideTo(nextIndex);
  };
  return (
    <section className={styles.gallery} aria-label="Фотографии щенка">
      <Swiper
        onSwiper={(swiper) => {
          slider.current = swiper;
        }}
        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        slidesPerView={1}
      >
        {PHOTOS.map((photo, i) => (
          <SwiperSlide key={i}>
            <div className={styles.heroPhoto}>
              <Image
                src={photo}
                alt="Щенок бигля"
                fill
                priority={i === 0}
                sizes="(max-width: 979px) calc(100vw - 40px), 750px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.thumbs}>
        {previews.map((photo, index) => {
          const photoIndex = firstPreview + index;
          return (
            <button
              type="button"
              key={photoIndex}
              className={active === photoIndex ? styles.thumbActive : ""}
              onClick={() => selectSlide(photoIndex)}
            >
              <Image
                src={photo}
                alt={`Фото щенка ${photoIndex + 1}`}
                fill
                sizes="240px"
              />
            </button>
          );
        })}
        <SliderControls
          onPrev={() => selectSlide(active - 1)}
          onNext={() => selectSlide(active + 1)}
        />
      </div>
    </section>
  );
}
export default function PuppyAnnouncementPage() {
  const litter = useRef<SwiperInstance | null>(null);
  const [litterActive, setLitterActive] = useState(0);
  const [favorite, setFavorite] = useState(false);
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Объявления о продаже", href: "#" },
          ]}
          current="Щенки Бигля"
          mobileCurrentRow
        />
        <h1>Щенки Бигля</h1>
        <section className={styles.offer}>
          <Gallery />
          <section
            className={`${styles.detailsVaccination} ${styles.galleryVaccination}`}
          >
            <h3>Вакцинация:</h3>
            <dl>
              <div>
                <dt>Первая вакцинация:</dt>
                <dd>
                  <Image
                    className={styles.statusIcon}
                    src={statusApproved}
                    alt="Выполнено"
                    width={30}
                    height={30}
                  />
                </dd>
              </div>
              <div>
                <dt>Вторая вакцинация:</dt>
                <dd>
                  <Image
                    className={styles.statusIcon}
                    src={statusApproved}
                    alt="Выполнено"
                    width={30}
                    height={30}
                  />
                </dd>
              </div>
              <div>
                <dt>Дегельминтизация:</dt>
                <dd>
                  <Image
                    className={styles.statusIcon}
                    src={statusRejected}
                    alt="Не выполнено"
                    width={30}
                    height={30}
                  />
                </dd>
              </div>
            </dl>
          </section>
          <div className={styles.infoColumn}>
            <div className={`${styles.meta} ${styles.topMeta}`}>
              <span>Опубликовано: 10 дней назад</span>
              <span className={styles.city}>
                <CityIcon /> Москва
              </span>
              <strong>50 000 ₽</strong>
            </div>
            <div className={styles.meta}>
              <span>Опубликовано: 10 дней назад</span>
              <span className={styles.city}>
                <CityIcon /> Москва
              </span>
              <strong>50 000 ₽</strong>
            </div>
            <div className={styles.info}>
              <div className={styles.seller}>
                <Image
                  className={styles.avatar}
                  src="/images/dogs/dog-2.png"
                  alt="Инна Крамаренко"
                  width={80}
                  height={80}
                />
                <div>
                  <h2>Инна Крамаренко</h2>
                  <span>На сайте с 2026 года</span>
                  <div className={styles.reviewLine}>
                    <a href="#">Отзывы</a>
                    <span>0 отзывов</span>
                  </div>
                </div>
                <div className={styles.sellerActions}>
                  <a className="btn btn--primary" href="#">
                    <span>Показать телефон</span>
                  </a>
                  <a className="btn btn--white" href="#">
                    <span>Написать продавцу</span>
                  </a>
                </div>
                <button
                  className={styles.favorite}
                  type="button"
                  aria-label={
                    favorite ? "Удалить из избранного" : "Добавить в избранное"
                  }
                  aria-pressed={favorite}
                  onClick={() => setFavorite(!favorite)}
                >
                  <HeartIcon active={favorite} />
                </button>
                <button
                  className={styles.more}
                  type="button"
                  aria-label="Дополнительные действия"
                >
                  •••
                </button>
                <div className={styles.badges}>
                  <span>Питомник</span>
                  <span>Премиум</span>
                  <span>Почта подтверждена</span>
                </div>
              </div>
              <div className={styles.details}>
                <section className={styles.detailsMain}>
                  <h3>Основная информация:</h3>
                  <dl>
                    <div>
                      <dt>Количество в помёте:</dt>
                      <dd>
                        3 щенка{" "}
                        <span className={styles.sexCount}>
                          <MaleIcon size={26} />
                          <span>5</span>
                          <Image
                            src={petCountDivider}
                            alt="Разделитель количества щенков"
                            width={1}
                            height={20}
                          />
                          <FemaleIcon size={26} />
                          <span>3</span>
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt>Возраст:</dt>
                      <dd>9 недель (04.06.2026)</dd>
                    </div>
                    <div>
                      <dt>Порода:</dt>
                      <dd className={styles.linkValue}>Бигль</dd>
                    </div>
                    <div>
                      <dt>Дата вязки:</dt>
                      <dd>07.04.2026</dd>
                    </div>
                    <div>
                      <dt>Разновидность:</dt>
                      <dd>Бигль</dd>
                    </div>
                  </dl>
                </section>
                <section className={styles.detailsDocumentation}>
                  <h3>Документация:</h3>
                  <dl>
                    <div>
                      <dt>Метрика:</dt>
                      <dd>
                        <Image
                          className={styles.statusIcon}
                          src={statusApproved}
                          alt="Есть"
                          width={30}
                          height={30}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>Ветеринарный паспорт:</dt>
                      <dd>
                        <Image
                          className={styles.statusIcon}
                          src={statusApproved}
                          alt="Есть"
                          width={30}
                          height={30}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>Договор купли-продажи:</dt>
                      <dd>
                        <Image
                          className={styles.statusIcon}
                          src={statusRejected}
                          alt="Нет"
                          width={30}
                          height={30}
                        />
                      </dd>
                    </div>
                  </dl>
                </section>
                <section className={styles.detailsVaccination}>
                  <h3>Вакцинация:</h3>
                  <dl>
                    <div>
                      <dt>Первая вакцинация:</dt>
                      <dd>
                        <Image
                          className={styles.statusIcon}
                          src={statusApproved}
                          alt="Выполнено"
                          width={30}
                          height={30}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>Вторая вакцинация:</dt>
                      <dd>
                        <Image
                          className={styles.statusIcon}
                          src={statusApproved}
                          alt="Выполнено"
                          width={30}
                          height={30}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>Дегельминтизация:</dt>
                      <dd>
                        <Image
                          className={styles.statusIcon}
                          src={statusRejected}
                          alt="Не выполнено"
                          width={30}
                          height={30}
                        />
                      </dd>
                    </div>
                  </dl>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section className={styles.litter}>
          <div className={styles.litterInner}>
            <div className={styles.sectionHead}>
              <h2>Щенки в помете</h2>
              <SliderControls
                onPrev={() => litter.current?.slidePrev()}
                onNext={() => litter.current?.slideNext()}
              />
            </div>
            <Swiper
              onSwiper={(swiper) => {
                litter.current = swiper;
              }}
              onSlideChange={(swiper) => setLitterActive(swiper.activeIndex)}
              slidesPerView="auto"
              spaceBetween={47}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 },
                980: { slidesPerView: "auto", spaceBetween: 47 },
                1600: { slidesPerView: 3, spaceBetween: 47 },
                1920: { slidesPerView: "auto", spaceBetween: 47 },
              }}
              className={styles.litterSlider}
            >
              {LITTER.map((item) => (
                <SwiperSlide key={item.id}>
                  <Announcement data={item} variant="litter" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.litterPagination}>
              {LITTER.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Показать щенка ${index + 1}`}
                  aria-current={index === litterActive ? "true" : undefined}
                  className={`${styles.litterPaginationBullet}${index === litterActive ? ` ${styles.litterPaginationBulletActive}` : ""}`}
                  onClick={() => litter.current?.slideTo(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <article className={styles.description}>
          <div className={styles.articleCopy}>
            <h2>Наша история с которой все началось</h2>
            <div className={styles.articleParagraphs}>
              <p>
                Каждый день тысячи людей ищут породистого щенка и боятся
                нарваться на мошенников или недобросовестных «разведенцев». А
                честные заводчики и крутые кинологи теряются в хаосе обычных
                досок объявлений и разрозненных групп в социальных сетях.
              </p>
              <p>
                На текущем рынке зооуслуг нет единого места с проверенными
                данными о собаках, сложно найти надежного специалиста, а покупка
                щенка часто превращается в лотерею.
              </p>
            </div>
            <h3>Подготовка к появлению щенка - H3</h3>
            <div className={styles.articleParagraphs}>
              <p>
                Оптимальный возраст для переезда щенка в новый дом — 2,5–3
                месяца. К этому времени он уже получил первые уроки социального
                поведения от матери и однопомётников, у него сделаны начальные
                прививки, а нервная система достаточно окрепла для смены
                обстановки.
              </p>
              <p>
                Дом для маленького щенка — огромный неизведанный мир, полный
                опасностей. Осмотрите все комнаты на уровне глаз щенка:
                электрические провода необходимо спрятать в короба или поднять
                повыше. Бытовая химия, лекарства, комнатные растения (многие из
                них ядовиты), мелкие предметы — всё это должно быть надёжно
                убрано. Если у вас скользкий пол, застелите его нескользящими
                ковриками или матами — поскальзывания и падения могут привести к
                серьёзным травмам.
              </p>
              <p>
                У щенка должно быть своё место для отдыха — лежанка или домик в
                стороне от проходов и сквозняков. На время адаптации можно
                расположить лежанку поближе к хозяйской кровати, чтобы ночью
                щенок не чувствовал себя одиноко.
              </p>
            </div>
            <div className={styles.articleDivider} />
            <div className={articleStyles.tags}>
              <strong>Тэги:</strong>
              <a href="#" className={`btn btn--primary ${articleStyles.tag}`}>
                <span>Поддержка</span>
              </a>
              <a href="#" className={`btn btn--primary ${articleStyles.tag}`}>
                <span>Щенки</span>
              </a>
              <a
                href="#"
                className={`btn btn--primary ${articleStyles.tag} ${articleStyles.tagActive}`}
              >
                <span>Уход</span>
              </a>
            </div>
            <ArticleShare />
          </div>
        </article>
        <section className={styles.bottomGrid}>
          <section className={styles.pedigree}>
            <h2>Родословная</h2>
            <PedigreeTree />
          </section>
          <div className={styles.asideColumn}>
            <aside className={styles.side}>
              <section className={styles.tipsCard}>
                <h2>Полезные советы</h2>
                <ul className={styles.tipsList}>
                  {[
                    "Щенков необходимо осматривать в доме продавца",
                    "Обязательно посмотрите как мать взаимодействует со своим пометом",
                    "Не переводите деньги до тех пор, пока не увидите щенка лично",
                    "Остерегайтесь мошенников, не пересылайте ваши личные данные!",
                  ].map((tip) => (
                    <li key={tip}>
                      <Image src={tipCheck} alt="Галочка совета" width={30} height={30} />{" "}
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className={styles.materialsCard}>
                <h2>Полезные материалы</h2>
                <p>
                  Мы подготовили полезные материалы для покупателя. Вы можете
                  ознакомиться с некоторыми статьями здесь, перед тем как
                  покупать собаку. А так же можете ознакомиться с{" "}
                  <a href="#">базой пород</a> - подходит ли вам такая парода или
                  нет.
                </p>
                <ul className={styles.materialsList}>
                  {[
                    "Как правильно подобрать собаку?",
                    "Почему важна вакцинация и как ее проверить?",
                    "Список документов на собаку - чек лист для покупателя",
                    "Как чипировать собаку и зачем это нужно?",
                    "Способы мошенничества с животными - как не попасться",
                  ].map((material) => (
                    <li key={material}>
                      <a href="#">{material}</a>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
            <section
              id="breeder"
              className={`${styles.breeder} ${styles.breederBlock}`}
            >
              <h2>Заводчики</h2>
              <article className={styles.breederCard}>
                <Image
                  src={breederAvatar}
                  alt="Инна Крамаренко"
                  width={80}
                  height={80}
                />
                <div>
                  <h3>Инна Крамаренко</h3>
                  <span>Внешний заводчик</span>
                </div>
              </article>
            </section>
          </div>
        </section>
      </div>
      <Showcase title="Новые объявления" />
    </main>
  );
}
