import Announcement from "./Announcement";
import Slider from "./Slider";
import { ANNOUNCEMENTS } from "./data";
import styles from "./Showcase.module.css";

export default function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>Новые объявления</h2>
          <a href="#" className="btn btn--primary">
            <span>Смотреть еще</span>
          </a>
        </div>

        <div className={styles.grid}>
          {ANNOUNCEMENTS.map((item) => (
            <Announcement key={item.id} data={item} />
          ))}
        </div>

        <Slider items={ANNOUNCEMENTS} />

        <div className={styles.footer}>
          <a href="#" className="btn btn--primary">
            <span>Смотреть еще</span>
          </a>
        </div>
      </div>
    </section>
  );
}
