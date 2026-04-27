import { Brain, Briefcase, Zap, Heart, ArrowRight, type LucideIcon } from "lucide-react";
import { paraQuem } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = { Brain, Briefcase, Zap, Heart };

const ParaQuem = () => (
  <section id="para-quem-e" className="bg-background py-24 lg:py-32 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      
      {/* Cabeçalho da Secção (Sem caixas, puro texto) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-primary" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              A Quem Se Destina
            </span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
            Este cuidado foi desenhado <br className="hidden lg:block" />
            <span className="italic text-olive/80">para a sua realidade.</span>
          </h2>
        </div>
      </div>

      {/* A Inovação: Linhas Editoriais em vez de Cartões */}
      <div className="flex flex-col border-t border-border">
        {paraQuem.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Heart;
          
          return (
            <div
              key={item.titulo}
              className="group relative flex flex-col lg:flex-row lg:items-center py-10 lg:py-14 border-b border-border cursor-pointer"
            >
              {/* Efeito de Fundo Dinâmico (Preenche a linha no hover) */}
              <div className="absolute inset-0 bg-primary/[0.03] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] origin-bottom z-0" aria-hidden="true" />

              {/* Coluna 1: Número Monumental */}
              <div className="relative z-10 w-full lg:w-1/6 mb-6 lg:mb-0">
                <span className="font-playfair font-light text-5xl lg:text-6xl text-olive/30 transition-colors duration-500 group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}.
                </span>
              </div>

              {/* Coluna 2: Título com Deslize Lateral */}
              <div className="relative z-10 w-full lg:w-2/6 mb-4 lg:mb-0">
                <h3 className="font-playfair text-3xl lg:text-4xl text-foreground transition-transform duration-500 ease-out group-hover:translate-x-4">
                  {item.titulo}
                </h3>
              </div>

              {/* Coluna 3: Descrição */}
              <div className="relative z-10 w-full lg:w-3/6 flex flex-col sm:flex-row sm:items-center justify-between gap-8 pl-0 lg:pl-12">
                <p className="text-olive text-base font-light leading-relaxed max-w-sm transition-opacity duration-500 group-hover:text-foreground/80">
                  {item.descricao}
                </p>
                
                {/* Ícone que se transforma em CTA */}
                <div className="relative w-14 h-14 rounded-full border border-border flex items-center justify-center shrink-0 overflow-hidden transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20">
                  {/* Ícone Original (Desaparece no hover) */}
                  <Icon 
                    size={24} 
                    strokeWidth={1.5} 
                    className="absolute text-primary transition-all duration-500 group-hover:-translate-y-10 group-hover:opacity-0" 
                  />
                  {/* Seta de Ação (Aparece de baixo no hover) */}
                  <ArrowRight 
                    size={24} 
                    strokeWidth={1.5} 
                    className="absolute text-background translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" 
                  />
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  </section>
);

export default ParaQuem;