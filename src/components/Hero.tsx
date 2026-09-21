import Image from "next/image";
import styles from "./Hero.module.css";

const BLOCKS = [
  {
    photo: "/images/hero/hero-puppy.png",
    title: "Подписка для вас",
    active: "Купить подписку",
    inactive: "Первый раз здесь",
    extra: null,
  },
  {
    photo: "/images/hero/hero-subscription.png",
    title: "Щенок в доме, ваш друг",
    active: "Щенки",
    inactive: null,
    extra: "Купить сертификат",
  },
  {
    photo: "/images/hero/hero-help.png",
    title: "Вы любите животных, помогите",
    titleMobile: "Любишь животных",
    active: "Предложи услуги",
    inactive: "Помочь проекту",
    extra: null,
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.blocks}>
          {BLOCKS.map((block) => (
            <div key={block.title} className={styles.block}>
              <Image
                src={block.photo}
                alt={block.title}
                fill
                sizes="(max-width: 979px) calc(100vw - 20px), (max-width: 1598px) 460px, 500px"
                className={styles.blockPhoto}
              />
              <div className={styles.blockBody}>
                <h2 className={styles.blockTitle}>{block.title}</h2>
                <h2 className={styles.blockTitleMobile}>{block.titleMobile ?? block.title}</h2>
                <div className={styles.blockBtns}>
                  <a href="#" className="btn btn--white">
                    <span className={styles.desktopText}>{block.active}</span>
                  </a>
                  {block.inactive && (
                  <a href="#" className="btn btn--white">
                    <span className={styles.desktopText}>{block.inactive}</span>
                  </a>
                  )}
                  {block.extra && (
                    <a href="#" className="btn btn--white">
                      <span>{block.extra}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <h1 className={styles.slogan}>
            Найди щенка, который
            <br />
            ждёт именно тебя
          </h1>
          <div className={styles.text}>
            Покупайте, продавайте и находите специалистов для своего питомца.
            Поддержка социальных проектов для помощи животным. Качественный
            сервис для вас и вашего питомца.
          </div>
        </div>
      </div>
    </section>
  );
}
