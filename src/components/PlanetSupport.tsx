import { Supporters } from "./AboutService";
import DescriptionBlock from "./DescriptionBlock";
import styles from "./PlanetSupport.module.css";

export default function PlanetSupport() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <DescriptionBlock badge="Поддержка" title="Нас так же поддерживают другие СМИ" cta="Поддержать Каштанку">
          <p>Друзья, мы на «Планете», и нам нужна ваша помощь. Сбор идёт тяжело, но каждый рубль приближает нас к цели. Это не просто донат — это ваш билет в закрытый клуб проекта. Те, кто поддержит сейчас, получат эксклюзивный контент и доступ к инсайтам, которые мы не покажем нигде. Не дайте проекту остановиться. Нажмите на кнопку — это займёт 5 секунд, а для нас изменит всё. Поддержите нас на Планете.</p>
        </DescriptionBlock>
        <Supporters variant="planet" />
      </div>
    </section>
  );
}
