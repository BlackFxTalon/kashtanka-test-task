import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutService from "@/components/AboutService";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Stories from "@/components/Stories";
import { TOP_ANNOUNCEMENTS } from "@/components/data";
import BuySlot from "@/components/BuySlot";
import LiveSection from "@/components/LiveSection";
import { LIVE_ITEMS } from "@/components/liveData";
import PetServices from "@/components/PetServices";
import Tariffs from "@/components/Tariffs";
import BlogUseful from "@/components/BlogUseful";
import Planet from "@/components/Planet";
import PartnersSlider from "@/components/PartnersSlider";
import { PARTNER_SLIDES } from "@/components/partnersData";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <AboutService />
        <Showcase title="Топ объявления" items={TOP_ANNOUNCEMENTS} buySlot={<BuySlot />} />
        <Stories />
        <Showcase title="Часто смотрят" items={TOP_ANNOUNCEMENTS} />
        <LiveSection items={LIVE_ITEMS} variant="blog" home />
        <PetServices />
        <Tariffs />
        <BlogUseful />
        <Planet />
        <PartnersSlider items={PARTNER_SLIDES} />
        <FrequentlyAskedQuestions />
      </main>
      <Footer />
    </>
  );
}
