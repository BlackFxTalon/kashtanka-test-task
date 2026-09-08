import Announcement from "./Announcement";
import Slider375 from "./Slider375";
import { ANNOUNCEMENTS } from "./data";
import styles from "./Vitrina.module.css";

export default function Vitrina() {
  return (
    <section className={styles.vitrina}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>Новые объявления</h2>
          <a href="#" className="btn btn--primary">
            Смотреть еще
          </a>
        </div>

        <div className={styles.grid}>
          {ANNOUNCEMENTS.map((item) => (
            <Announcement key={item.id} data={item} />
          ))}
        </div>

        <Slider375 items={ANNOUNCEMENTS} />

        <div className={styles.footer}>
          <a href="#" className="btn btn--primary">
            Смотреть еще
          </a>
        </div>
      </div>
    </section>
  );
}
