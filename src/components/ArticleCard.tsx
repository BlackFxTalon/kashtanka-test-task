import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleCard.module.css";

export interface ArticleCardData {
  image: string;
  action: string;
  title?: string;
  category?: string;
  secondaryAction?: string;
  secondaryHref?: string;
  mobileAction?: string;
  variant?: "default" | "social" | "knowledge";
  href?: string;
  imageSizes?: string;
  imageAlt?: string;
}

export default function ArticleCard({
  image,
  action,
  title = "Догситер - почему это популярно и так не просто",
  category = "Категория новости",
  secondaryAction,
  secondaryHref = "#",
  mobileAction,
  variant = "default",
  href = "/blog/article",
  imageSizes = "(max-width: 979px) 355px, (max-width: 1239px) 420px, 33vw",
  imageAlt = "Собаки и специалисты проекта",
}: ArticleCardData) {
  return (
    <article className={`${styles.card}${variant === "social" ? ` ${styles.socialCard}` : ""}${variant === "knowledge" ? ` ${styles.knowledgeCard}` : ""}`}>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={image}
          alt={imageAlt}
          fill
          sizes={imageSizes}
        />
      </div>
      {category && <span className={styles.category}>{category}</span>}
      <div className={styles.description}>
        <h2>{title}</h2>
        <div className={styles.actions}>
          <Link href={href} className={`btn btn--primary${mobileAction ? ` ${styles.primaryAction}` : ""}`}>
            <span className={styles.actionDesktop}>{action}</span>
            {mobileAction && <span className={styles.actionMobile}>{mobileAction}</span>}
          </Link>
          {secondaryAction && (
            <a href={secondaryHref} className="btn btn--white">
              <span>{secondaryAction}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
