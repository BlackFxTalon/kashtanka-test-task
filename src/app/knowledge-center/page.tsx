import type { Metadata } from "next";
import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Центр знаний — Каштанка",
  description: "Полезные статьи об уходе, лечении и воспитании питомцев.",
};

const KNOWLEDGE_ARTICLES = [
  "Советы по уходу за питомцем",
  "Лечение и ветеринария",
  "Дрессировка и обучение",
  "Юридическая база",
  "Специализации и обучение",
  "О породах: минусы и плюсы",
  "Советы по уходу над новорожденными",
  "Реабилитация питомца",
  "Помощь и пространство питомца",
].map((title, index) => ({
  image: `/images/knowledge-center/${String(index + 1).padStart(2, "0")}.png`,
  title,
  action: "читать статью",
  category: "",
  variant: "knowledge" as const,
  href: "/blog/article",
  imageSizes: "296px",
  imageAlt: "Иллюстрация раздела центра знаний",
}));

export default function Page() {
  return (
    <>
      <Header />
      <BlogPage
        title="Центр знаний"
        categoryLabel="Категории центра знаний"
        articles={KNOWLEDGE_ARTICLES}
      />
      <Footer />
    </>
  );
}
