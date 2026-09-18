"use client";

import Breadcrumbs from "./Breadcrumbs";
import PageCover from "./PageCover";
import CollaborationForm from "./CollaborationForm";
import { Supporters } from "./AboutService";
import PartnersSlider from "./PartnersSlider";
import Showcase from "./Showcase";
import { PARTNER_SLIDES } from "./partnersData";
import { ArticleShare } from "./ArticlePage";
import articleStyles from "./ArticlePage.module.css";
import styles from "./BloggersPage.module.css";

export default function BloggersPage() {
  return (
    <main className={styles.main}>
      <section className={styles.top}>
        <article className={`${articleStyles.article} ${styles.article}`}>
          <Breadcrumbs items={[{ label: "Главная", href: "/" }]} current="Блогерам" currentVariant="blog" />
          <h1>Сотрудничество с блогерами</h1>
          <div className={styles.heroRow}>
            <div className={`${articleStyles.hero} ${styles.hero}`}>
              <PageCover name="bloggers" alt="Сотрудничество с блогерами — Каштанка" />
            </div>
            <div className={styles.formWrap}>
              <CollaborationForm />
            </div>
          </div>
          <div className={articleStyles.copy}>
            <h2>Наша история с которой все началось</h2>
            <p>Каждый день тысячи людей ищут породистого щенка и боятся нарваться на мошенников или недобросовестных «разведенцев». А честные заводчики и крутые кинологи теряются в хаосе обычных досок объявлений и разрозненных групп в социальных сетях.</p>
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
      <section className={styles.mobileForm} aria-labelledby="mobile-collaboration-title">
        <h2 id="mobile-collaboration-title">Заявка на сотрудничество</h2>
        <CollaborationForm variant="mobile" />
      </section>
      <section className={styles.supporters} aria-labelledby="bloggers-support-title">
        <h2 id="bloggers-support-title">Блогеры уже поддерживают</h2>
        <Supporters variant="bloggers" />
      </section>
      <PartnersSlider items={PARTNER_SLIDES} />
      <Showcase />
    </main>
  );
}
