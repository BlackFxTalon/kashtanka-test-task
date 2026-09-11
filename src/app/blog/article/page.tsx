import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Как правильно ухаживать за щенком — Каштанка",
  description: "Руководство по уходу за щенком в первые дни в новом доме.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ArticlePage />
      <Footer />
    </>
  );
}
