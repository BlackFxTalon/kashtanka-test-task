import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InvestorsPage from "@/components/InvestorsPage";

export const metadata: Metadata = {
  title: "Сотрудничество с инвесторами",
  description: "Сотрудничество инвесторов с сервисом Каштанка.",
};

export default function Page() {
  return <><Header /><InvestorsPage /><Footer /></>;
}
