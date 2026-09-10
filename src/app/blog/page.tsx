import type { Metadata } from "next";
import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Блог — Каштанка",
  description: "Статьи, душевные истории и эфиры проекта Каштанка.",
};

export default function Page() {
  return (
    <>
      <Header />
      <BlogPage />
      <Footer />
    </>
  );
}
