import TariffCard from "./TariffCard";
import TariffDescription from "./TariffDescription";
import { TARIFFS } from "./tariffData";
import styles from "./Tariffs.module.css";

export default function Tariffs() {
  return (
    <section className={styles.tariffs}>
      <div className={styles.inner}>
        <TariffDescription />

        {TARIFFS.map((tariff) => (
          <TariffCard key={tariff.id} data={tariff} />
        ))}
      </div>
    </section>
  );
}
