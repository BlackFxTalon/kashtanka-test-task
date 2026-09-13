import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Название социального проекта — Каштанка",
  description: "Социальный проект Каштанки для помощи животным.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ArticlePage variant="about" title="Название социального проекта" />
      <Footer />
    </>
  );
}
