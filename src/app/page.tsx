import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.top}>
        <p className={styles.stub}>Верх</p>
      </header>
      <main>
        <section className={styles.hero}>
          <p className={styles.stub}>Шапка</p>
        </section>
        <section className={styles.vitrina}>
          <p className={styles.stub}>Витрина 1</p>
        </section>
      </main>
    </>
  );
}
