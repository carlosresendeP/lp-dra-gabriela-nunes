import { Check } from "lucide-react";
import Image from "next/image";

const credenciais = [
  "Médica formada pela Universidade Federal de Juiz de Fora (UFJF)",
  "Especialista em Psiquiatria — CRM-MG",
  "Membro da Associação Brasileira de Psiquiatria (ABP)",
  "Atendimento presencial em Juiz de Fora/MG e online para todo o Brasil",
];

const Sobre = () => (
  <section id="sobre" className="bg-foreground py-24 lg:py-32 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

        {/* Coluna da Imagem (Ocupa 5 colunas no desktop) */}
        <div className="lg:col-span-5 relative max-w-md mx-auto lg:mx-0 w-full group">
          {/* Fundo decorativo sutil com micro-interação */}
          <div 
            className="absolute inset-0 bg-sage/20 rounded-2xl translate-x-4 translate-y-4 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6" 
            aria-hidden="true" 
          />
          
          <div className="relative aspect-[3/4] rounded-2xl bg-sage/10 flex items-center justify-center overflow-hidden border border-foreground/5 z-10">
            <Image
              src="/imageAbout.jpeg"
              alt="Retrato da Dra. Gabriela Nunes"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Coluna do Texto (Ocupa 7 colunas no desktop) */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          {/* Cabeçalho */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-[1px] bg-olive" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.2em] text-cream font-medium">
                Sobre
              </p>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl text-cream mb-4 leading-[1.15] tracking-tight">
              Dra. Gabriela Nunes
            </h2>
            <p className="text-cream font-medium text-sm tracking-wide">
              Psiquiatra · CRM-MG XXXXX
            </p>
          </div>

          {/* Bio - Tipografia ancorada */}
          <div className="flex flex-col gap-5 border-l border-cream/30 pl-6 lg:pl-8">
            <p className="text-cream/80 text-base lg:text-lg leading-relaxed font-light">
              Acredito que a saúde mental é um direito, não um privilégio. Meu trabalho é
              criar um espaço seguro onde você possa ser honesto sobre o que sente — sem
              julgamentos, sem pressa.
            </p>
            <p className="text-cream/70 text-sm lg:text-base leading-relaxed font-light">
              Com uma abordagem baseada em evidências e profundamente humanizada,
              acompanho cada paciente de forma individualizada, respeitando seu ritmo e
              suas particularidades.
            </p>
          </div>

          {/* Credenciais - Lista interativa */}
          <ul className="flex flex-col gap-2 mt-2">
            {credenciais.map((cred, index) => (
              <li 
                key={index} 
                className="group flex items-start gap-4 p-3 -ml-3 rounded-xl transition-colors hover:bg-sage/10"
              >
                <div className="mt-0.5 w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-sage/40">
                  <Check size={14} className="text-cream" strokeWidth={2.5} />
                </div>
                <span className="text-cream/80 text-sm leading-relaxed font-light transition-transform duration-300 ease-out group-hover:translate-x-1">
                  {cred}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  </section>
);

export default Sobre;