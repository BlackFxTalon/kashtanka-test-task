import type { TariffCardData } from "./tariffData";
import styles from "./TariffCard.module.css";

interface TariffCardProps {
  data: TariffCardData;
}

export default function TariffCard({ data }: TariffCardProps) {
  return (
    <article className={styles.card}>
      <span className="btn btn--primary">
        <span>{data.plan}</span>
      </span>
      <p className={styles.price}>{data.price}</p>

      <ul className={styles.features}>
        {data.features.map((feature) => (
          <li key={feature.name} className={styles.feature}>
            <span className={styles.featureName}>{feature.name}</span>
            <span className={styles.featureValue}>{feature.value}</span>
          </li>
        ))}
      </ul>

      <a href="#" className={`btn btn--white ${styles.cta}`}>
        <span>{data.cta}</span>
      </a>
    </article>
  );
}
