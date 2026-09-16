import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StoryRequestPage from "@/components/StoryRequestPage";

export const metadata: Metadata = {
  title: "Заявка на историю — Каштанка",
  description: "Отправьте историю о дружбе с питомцем в Каштанку.",
};

export default function Page() {
  return <><Header /><StoryRequestPage /><Footer /></>;
}
