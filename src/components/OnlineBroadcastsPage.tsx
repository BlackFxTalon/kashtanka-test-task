import { Pager } from "./BlogPage";
import Breadcrumbs from "./Breadcrumbs";
import LiveSection, { type LiveItem } from "./LiveSection";
import { LIVE_ITEMS } from "./liveData";
import styles from "./OnlineBroadcastsPage.module.css";

const BROADCASTS: LiveItem[] = Array.from(
  { length: 24 },
  (_, index) => LIVE_ITEMS[index % LIVE_ITEMS.length],
);

export default function OnlineBroadcastsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }]} current="On Line эфиры" />
        <h1>On Line эфиры</h1>
      </section>

      <LiveSection
        items={BROADCASTS}
        variant="page"
        showHeading={false}
        showMoreButton={false}
      />
      <Pager className={styles.pager} />
    </main>
  );
}
