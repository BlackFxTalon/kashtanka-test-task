import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";
import {
  InstagramIcon,
  MaxIcon,
  PinterestIcon,
  RutubeIcon,
  TelegramIcon,
  VkIcon,
  WhatsappIcon,
  YandexZenIcon,
  YoutubeIcon,
} from "./icons";

const SECTIONS: { title: string; links: string[] }[] = [
  {
    title: "РАЗДЕЛЫ",
    links: [
      "Главная",
      "О проекте",
      "Социальные проекты",
      "Блог проекта",
      "Душевные истории",
      "Ссылка 1",
      "Ссылка 2",
      "On Line эфиры",
    ],
  },
  {
    title: "УСЛУГИ",
    links: [
      "Тарифы",
      "Услуги специалистов",
      "Купить щенка",
      "Продать щенка",
      "Профили собак",
      "Ссылка 1",
      "Ссылка 2",
    ],
  },
  {
    title: "ДЛЯ КЛИЕНТА",
    links: [
      "Пользовательское соглашение",
      "База пород",
      "Инвесторам",
      "Поддержка на Планете",
      "Я блогер - вам к нам!",
      "Документация",
      "Партнерам",
    ],
  },
];

const SOCIALS = [
  { name: "youtube", Icon: YoutubeIcon },
  { name: "rutube", Icon: RutubeIcon },
  { name: "telegram", Icon: TelegramIcon },
  { name: "max", Icon: MaxIcon },
  { name: "whatsapp", Icon: WhatsappIcon },
  { name: "vk", Icon: VkIcon },
  { name: "instagram", Icon: InstagramIcon },
  { name: "Дзен", Icon: YandexZenIcon },
  { name: "pinterest", Icon: PinterestIcon },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.about}>
            Мы создаем сервис для Вас
            <br />
            и вашего питомца
          </p>
          <div className={styles.company}>
            <p>ООО “Фортуна”</p>
            <p>ИНН: 9726102496</p>
            <p>ОГРН: 1257700345440</p>
          </div>
        </div>

        <nav className={styles.cols}>
          {SECTIONS.map((section) => (
            <div key={section.title} className={styles.col}>
              <span className={styles.colTitle}>{section.title}</span>
              <ul className={styles.linkList}>
                {section.links.map((link) => (
                  <li key={link}>
                    {link === "О проекте" ? (
                      <Link href="/about">{link}</Link>
                    ) : link === "Социальные проекты" ? (
                      <Link href="/social-projects">{link}</Link>
                    ) : link === "On Line эфиры" ? (
                      <Link href="/online-broadcasts">{link}</Link>
                    ) : link === "Я блогер - вам к нам!" ? (
                      <Link href="/bloggers">{link}</Link>
                    ) : link === "Инвесторам" ? (
                      <Link href="/investors">{link}</Link>
                    ) : (
                      <a href="#">{link}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.col}>
            <span className={styles.colTitle}>РЕСУРСЫ</span>
            <div className={styles.socials}>
              {SOCIALS.map(({ name, Icon }) => (
                <a key={name} href="#">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyLeft}>KASHTANKA - Все права защищены 2026</p>
        <p className={styles.copyRight}>
          <span className={styles.copyWant}>ХОЧЕШЬ ТАК ЖЕ?</span>
          {" - "}
          <span className={styles.copyDuos}>DUOS DIGITAL STUDIO</span>
        </p>
      </div>
    </footer>
  );
}
