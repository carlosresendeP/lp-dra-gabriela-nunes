import { Check } from "lucide-react";

const sintomas = [
  "Ansiedade constante e pensamentos acelerados",
  "Esgotamento físico e mental (Burnout)",
  "Dificuldade persistente para dormir ou insônia",
  "Oscilações bruscas de humor sem motivo aparente",
  "Sensação de vazio ou tristeza profunda e paralisante",
  "Falta de foco e dificuldade extrema de concentração",
];

const Sintomas = () => (
  <section id="sintomas" className="bg-foreground py-24 lg:py-32 relative overflow-hidden">
    
    {/* Elemento Decorativo Sutil ao Fundo */}
    <div 
      className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" 
      aria-hidden="true" 
    />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Coluna da Esquerda: A Empatia (Ocupa 5 colunas) */}
        <div className="lg:col-span-5 flex flex-col gap-8 sticky top-32">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-[1px] bg-accent" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                Identificação
              </p>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl text-background leading-[1.15] tracking-tight">
              Você tem se sentido assim ultimamente?
            </h2>
          </div>
          <p className="text-background/60 text-lg leading-relaxed font-light">
            O primeiro passo para o tratamento é reconhecer os sinais. Não normalize o sofrimento constante; o adoecimento mental afeta todas as esferas da sua vida.
          </p>
        </div>

        {/* Coluna da Direita: A Lista de Sintomas (Ocupa 7 colunas) */}
        <div className="lg:col-span-7 flex flex-col">
          <ul className="flex flex-col border-t border-background/10">
            {sintomas.map((sintoma, index) => (
              <li 
                key={index} 
                className="group flex items-center gap-6 py-6 border-b border-background/10 transition-colors duration-500 hover:border-background/30"
              >
                {/* Ícone de Check minimalista */}
                <div className="w-8 h-8 rounded-full border border-background/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10">
                  <Check 
                    size={14} 
                    className="text-background/20 transition-colors duration-500 group-hover:text-accent" 
                    strokeWidth={2.5} 
                  />
                </div>
                
                {/* Texto do Sintoma */}
                <span className="text-background/50 text-base lg:text-lg font-light tracking-wide transition-all duration-500 group-hover:text-background group-hover:translate-x-2">
                  {sintoma}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </section>
);

export default Sintomas;