import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }]} current="404" />
        <h1 className={styles.pageTitle}>404</h1>

        <section className={styles.scene} aria-labelledby="not-found-title">
          <div className={styles.message}>
            <span className={styles.label}>Упс...</span>
            <h2 id="not-found-title">Гав, гав ...здесь ничего нет...</h2>
            <p>Здесь нет контента</p>
            <Link href="/" className="btn btn--primary">
              <span>Главная страница</span>
            </Link>
          </div>

          <p className={styles.code} aria-hidden="true">404</p>
          <div className={styles.illustration} aria-hidden="true">
            <img src="/images/404/puppy.webp" alt="Щенок породы бигль" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
