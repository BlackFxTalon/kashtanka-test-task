import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </>
  );
}
