import { Header } from "@/components/Header";
import { Hero } from "@/section/Hero";
import { About } from "@/section/About";
import { Curriculum } from "@/section/Curriculum";
import { ProjectTeam } from "@/section/ProjectTeam";
import { Partners } from "@/section/Partners";
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
      <ProjectTeam />
      <Partners />
      <News />
      <Contact />
      <Footer />
    </>
  );
}
