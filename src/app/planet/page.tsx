import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Каштанка на Планете",
  description: "Поддержите проект Каштанка на Планете.",
};

export default function Page() {
  return <><Header /><ArticlePage variant="planet" /><Footer /></>;
}
