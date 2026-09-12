import DescriptionBlock from "./DescriptionBlock";
import TariffCard from "./TariffCard";
import { TARIFFS, TARIFF_DESCRIPTION } from "./tariffData";
import styles from "./Tariffs.module.css";

export default function Tariffs() {
  return (
    <section className={styles.tariffs}>
      <div className={styles.inner}>
        <DescriptionBlock
          badge={TARIFF_DESCRIPTION.badge}
          title={TARIFF_DESCRIPTION.title}
          cta="Купить подписку"
        >
          {TARIFF_DESCRIPTION.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.before}
              {paragraph.bold && <strong>{paragraph.bold}</strong>}
              {paragraph.after}
            </p>
          ))}
        </DescriptionBlock>

        {TARIFFS.map((tariff) => (
          <TariffCard key={tariff.id} data={tariff} />
        ))}
      </div>
    </section>
  );
}
