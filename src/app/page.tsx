import Carousel from "@/components/Carousel/page";
import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";
import LastSection from "@/components/LastSection/page";

export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <Carousel />
      <LastSection />
    </main>
  );
}
