import type { Metadata } from "next";
import BloggersPage from "@/components/BloggersPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Сотрудничество с блогерами",
  description: "Сотрудничество блогеров с сервисом Каштанка.",
};

export default function Page() {
  return <><Header /><BloggersPage /><Footer /></>;
}
