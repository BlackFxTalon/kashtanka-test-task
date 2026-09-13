import ArticleCard, { type ArticleCardData } from "./ArticleCard";
import { Pager } from "./BlogPage";
import Breadcrumbs from "./Breadcrumbs";
import LiveSection from "./LiveSection";
import { LIVE_ITEMS } from "./liveData";
import styles from "./SocialProjectsPage.module.css";

const PROJECT_IMAGES = [
  "/images/blog/article-1.png",
  "/images/blog/live-2.png",
  "/images/blog/article-3.png",
  "/images/blog/article-1.png",
  "/images/blog/live-2.png",
  "/images/blog/article-3.png",
  "/images/blog/article-1.png",
  "/images/blog/live-2.png",
  "/images/blog/article-3.png",
  "/images/blog/article-1.png",
  "/images/blog/live-2.png",
  "/images/blog/article-3.png",
  "/images/blog/article-1.png",
  "/images/blog/live-2.png",
  "/images/blog/article-3.png",
];

const PROJECTS: ArticleCardData[] = Array.from({ length: 15 }, (_, index) => ({
  image: PROJECT_IMAGES[index],
  title: "Догситер - почему это популярно и так не просто",
  action: "Подробнее о проекте",
  secondaryAction: "Помочь проекту",
  category: "",
  mobileAction: "Подробнее",
  variant: "social",
  href: "/social-projects/project",
  imageSizes: "(max-width: 979px) 355px, (max-width: 1919px) 460px, 550px",
}));

export default function SocialProjectsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }]} current="Социальные проекты" />
        <h1>Социальные проекты</h1>
      </section>

      <section className={styles.projects} aria-label="Социальные проекты">
        <div className={styles.grid}>
          {PROJECTS.map((project, index) => <ArticleCard key={index} {...project} />)}
        </div>
        <Pager className={styles.pager} />
      </section>

      <LiveSection items={LIVE_ITEMS} />
    </main>
  );
}
