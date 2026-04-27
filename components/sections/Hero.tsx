
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative -mt-20 min-h-screen w-full flex items-center overflow-hidden">

      <Image
        src="/backgroundHero2.jpeg"
        alt="Background Hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-0">
        <div className="relative max-w-xl flex flex-col justify-center items-start gap-4">
          <div className="absolute -inset-20 z-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.4)_0%,_transparent_70%)] blur-3xl" />

          <h2
            className="text-4xl z-10 text-shadow-sm font-playfair lg:text-5xl font-bold italic text-white"
          >
            Cuidar da Mente é O primeiro Passo para uma Vida Plena e Saudável
          </h2>

          <p className="text-white/75 z-10 text-shadow-sm max-w-lg text-base leading-relaxed">
            Alcanse o equilibrio emocional e Transforme sua vida com a ajuda da
            terapia. A jornada começa com o primeiro passo
          </p>

          <Button
            className="bg-accent w-full max-w-lg z-10 text-white font-semibold px-10 py-7 rounded-sm text-sm tracking-widest uppercase flex items-center gap-2 cursor-pointer"
          >
            <BsWhatsapp className="text-lg shrink-0" />
            Agende uma sessão
          </Button>

          <span className="z-10 w-full bg-linear-to-l from-black/0  via-black/20 to-black/0 py-2 px-2 max-w-lg flex justify-center items-center gap-2 text-white/90 text-2sm">
            Médica com avaliação 5 estrelas no
            <FcGoogle className="text-xl" />
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
