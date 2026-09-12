import DescriptionBlock from "./DescriptionBlock";
import PlanetBanner from "./PlanetBanner";
import styles from "./Planet.module.css";

const DESCRIPTION = {
  badge: "Поддержка",
  title: "Мы собираем сообщество и помогаем другим",
  text: "Друзья, мы на «Планете», и нам нужна ваша помощь. Сбор идёт тяжело, но каждый рубль приближает нас к цели. Это не просто донат — это ваш билет в закрытый клуб проекта. Те, кто поддержит сейчас, получат эксклюзивный контент и доступ к инсайтам, которые мы не покажем нигде. Не дайте проекту остановиться. Нажмите на кнопку — это займёт 5 секунд, а для нас изменит всё. Поддержите нас на Планете.",
};

export default function Planet() {
  return (
    <section className={styles.planet}>
      <div className={styles.inner}>
        <DescriptionBlock badge={DESCRIPTION.badge} title={DESCRIPTION.title} cta="Поддержать Каштанку">
          <p>{DESCRIPTION.text}</p>
        </DescriptionBlock>
        <PlanetBanner large />
      </div>
    </section>
  );
}
