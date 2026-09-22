import styles from "./PageCover.module.css";

interface PageCoverProps {
  name: "story-request" | "bloggers" | "investors";
  alt: string;
}

export default function PageCover({ name, alt }: PageCoverProps) {
  return (
    <picture>
      <source media="(min-width: 1240px)" srcSet={`/images/${name}/cover-1920.webp`} />
      <source media="(min-width: 980px)" srcSet={`/images/${name}/cover-980.webp`} />
      <img
        className={styles.image}
        src={`/images/${name}/cover-375.webp`}
        alt={alt}
        width={335}
        height={267}
      />
    </picture>
  );
}
