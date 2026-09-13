import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SocialProjectsPage from "@/components/SocialProjectsPage";

export const metadata: Metadata = {
  title: "Социальные проекты — Каштанка",
  description: "Социальные проекты Каштанки для помощи животным.",
};

export default function Page() {
  return (
    <>
      <Header />
      <SocialProjectsPage />
      <Footer />
    </>
  );
}
