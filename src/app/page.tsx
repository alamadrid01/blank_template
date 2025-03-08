import Carousel from "@/components/Carousel/page";
import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";
import LastSection from "@/components/LastSection/page";
import ScrollSection from "@/components/ScrollSection/page";

export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <Carousel />
      <LastSection />
      <ScrollSection />
    </main>
  );
}
