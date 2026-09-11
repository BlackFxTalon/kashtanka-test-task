import Image from "next/image";
import styles from "./ArticleCard.module.css";

export interface ArticleCardData {
  image: string;
  action: string;
  title?: string;
  category?: string;
  href?: string;
  imageSizes?: string;
}

export default function ArticleCard({
  image,
  action,
  title = "Догситер - почему это популярно и так не просто",
  category = "Категория новости",
  href = "#",
  imageSizes = "(max-width: 979px) 355px, (max-width: 1239px) 420px, 33vw",
}: ArticleCardData) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        alt="Собаки и специалисты проекта"
        fill
        sizes={imageSizes}
      />
      <span className={styles.category}>{category}</span>
      <div className={styles.description}>
        <h2>{title}</h2>
        <a href={href} className="btn btn--primary">
          <span>{action}</span>
        </a>
      </div>
    </article>
  );
}
