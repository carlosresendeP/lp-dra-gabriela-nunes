import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Sintomas from "@/components/sections/Sintomas";
import Depoimentos from "@/components/sections/Depoimentos";
import ParaQuem from "@/components/sections/ParaQuem";
import Diferenciais from "@/components/sections/Diferenciais";
import CtaBanner from "@/components/sections/CtaBanner";
import Sobre from "@/components/sections/Sobre";
import Faq from "@/components/sections/Faq";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sintomas />
        <Depoimentos />
        <ParaQuem />
        <Diferenciais />
        <CtaBanner />
        <Sobre />
        <Faq />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
