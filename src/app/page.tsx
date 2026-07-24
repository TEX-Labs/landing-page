import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Partnership } from "@/components/sections/Partnership";
import { Values } from "@/components/sections/Values";
import { Vision } from "@/components/sections/Vision";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <Positioning />
        <Expertise />
        <Projects />
        <Partnership />
        <Values />
        <Vision />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
