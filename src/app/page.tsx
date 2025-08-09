import { Header } from "@/components/Header";
import { Hero } from "@/section/Hero";
import { About } from "@/components/About";
import { Curriculum } from "@/section/Curriculum";
import { Partners } from "@/section/Partners";
import { Universities } from "@/section/Universities";
import { News } from "@/section/News";
import { Contact } from "@/section/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Curriculum />
      <Partners />
      <Universities />
      <News />
      <Contact />
      <Footer />
    </>
  );
}
