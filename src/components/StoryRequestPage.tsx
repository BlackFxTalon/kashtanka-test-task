"use client";

import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import CollaborationForm from "./CollaborationForm";
import LogoOverlay from "./LogoOverlay";
import { ArticleShare } from "./ArticlePage";
import articleStyles from "./ArticlePage.module.css";
import styles from "./StoryRequestPage.module.css";

export default function StoryRequestPage() {
  return (
    <main className={styles.main}>
      <section className={styles.top}>
        <article className={`${articleStyles.article} ${styles.article}`}>
          <Breadcrumbs items={[{ label: "Главная", href: "/" }]} current="Заявка на историю" currentVariant="blog" />
          <h1>Заявка на историю</h1>

          <div className={styles.heroRow}>
            <div className={`${articleStyles.hero} ${styles.hero}`}>
              <Image
                src="/images/story-request/hero.png"
                alt="Девушка обнимает собаку в саду"
                fill
                priority
                sizes="(max-width: 979px) calc(100vw - 40px), 1000px"
              />
              <LogoOverlay side="left" />
            </div>
            <div className={styles.formWrap}>
              <CollaborationForm className={styles.storyForm} title="ОТПРАВИТЬ ИСТОРИЮ" titleId="story-request-form-title" purpose="story" />
            </div>
          </div>

          <div className={`${articleStyles.copy} ${styles.copy}`}>
            <h2>Поделитесь своей историей</h2>
            <p>Каждый день тысячи людей ищут породистого щенка и боятся нарваться на мошенников или недобросовестных «разведенцев». А честные заводчики и крутые кинологи теряются в хаосе обычных досок объявлений и разрозненных групп в социальных сетях.</p>
            <p>На текущем рынке зооуслуг нет единого места с проверенными данными о собаках, сложно найти надежного специалиста, а покупка щенка часто превращается в лотерею.</p>
            <h3>Подготовка к появлению щенка - H3</h3>
            <p>Оптимальный возраст для переезда щенка в новый дом — 2,5–3 месяца. К этому времени он уже получил первые уроки социального поведения от матери и однопомётников, у него сделаны начальные прививки, а нервная система достаточно окрепла для смены обстановки.</p>
            <p>Дом для маленького щенка — огромный неизведанный мир, полный опасностей. Осмотрите все комнаты на уровне глаз щенка: электрические провода необходимо спрятать в короба или поднять повыше. Бытовая химия, лекарства, комнатные растения (многие из них ядовиты), мелкие предметы — всё это должно быть надёжно убрано. Если у вас скользкий пол, застелите его нескользящими ковриками или матами — поскальзывания и падения могут привести к серьёзным травмам.</p>
            <p>У щенка должно быть своё место для отдыха — лежанка или домик в стороне от проходов и сквозняков. На время адаптации можно расположить лежанку поближе к хозяйской кровати, чтобы ночью щенок не чувствовал себя одиноко.</p>
            <div className={`${articleStyles.separator} ${styles.tagsSeparator}`} />
            <div className={articleStyles.tags}>
              <strong>Тэги:</strong>
              <a href="#" className={`btn btn--primary ${articleStyles.tag}`}><span>Щенки</span></a>
              <a href="#" className={`btn btn--primary ${articleStyles.tag}`}><span>Поддержка</span></a>
              <a href="#" className={`btn btn--primary ${articleStyles.tag} ${articleStyles.tagActive}`}><span>Уход</span></a>
            </div>
            <ArticleShare />
          </div>
        </article>
      </section>

      <section className={styles.mobileForm} aria-labelledby="story-request-mobile-form-title">
        <h2 id="mobile-story-request-title">Отправить историю</h2>
        <CollaborationForm variant="mobile" title="ОТПРАВИТЬ ИСТОРИЮ" titleId="story-request-mobile-form-title" purpose="story" />
      </section>
    </main>
  );
}
