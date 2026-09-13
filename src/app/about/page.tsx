import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "История проекта — Каштанка",
  description: "История проекта Каштанка.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ArticlePage variant="about" />
      <Footer />
    </>
  );
}
