import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TariffsPage from "@/components/TariffsPage";

export const metadata: Metadata = {
  title: "Тарифы — Каштанка",
  description: "Тарифы и возможности сервиса Каштанка для продавцов и заводчиков.",
};

export default function Page() {
  return (
    <>
      <Header />
      <TariffsPage />
      <Footer />
    </>
  );
}
