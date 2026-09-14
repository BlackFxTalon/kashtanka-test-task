import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OnlineBroadcastsPage from "@/components/OnlineBroadcastsPage";

export const metadata: Metadata = {
  title: "On Line эфиры — Каштанка",
  description: "Прямые эфиры проекта Каштанка.",
};

export default function Page() {
  return (
    <>
      <Header />
      <OnlineBroadcastsPage />
      <Footer />
    </>
  );
}
