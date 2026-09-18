import styles from "./PageCover.module.css";

interface PageCoverProps {
  /** Каталог картинок в /public/images */
  name: "story-request" | "bloggers" | "investors";
  alt: string;
}

/** Обложка страницы — одна картинка из макета (фото + лого с текстом) под каждую ширину. */
export default function PageCover({ name, alt }: PageCoverProps) {
  return (
    <picture>
      <source media="(min-width: 1240px)" srcSet={`/images/${name}/cover-1920.png`} />
      <source media="(min-width: 980px)" srcSet={`/images/${name}/cover-980.png`} />
      {/* Разные кадры обложки по ширинам: next/image не умеет art direction */}
      <img className={styles.image} src={`/images/${name}/cover-375.png`} alt={alt} width={335} height={267} />
    </picture>
  );
}
