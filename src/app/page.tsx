import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutService from "@/components/AboutService";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import { TOP_ANNOUNCEMENTS } from "@/components/data";
import BuySlot from "@/components/BuySlot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <AboutService />
        <Showcase title="Топ объявления" items={TOP_ANNOUNCEMENTS} buySlot={<BuySlot />} />
      </main>
      <Footer />
    </>
  );
}
