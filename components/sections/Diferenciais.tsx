import { diferenciais } from "@/lib/data";

const Diferenciais = () => (
  <section id="diferenciais" className="bg-foreground py-24 lg:py-32">
    <div className="max-w-6xl mx-auto px-6">

      {/* Cabeçalho da Secção (Consistente com a identidade visual) */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-5">
            <span className="w-8 h-[1px] bg-sage" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.2em] text-sage font-medium">
              Diferenciais
            </p>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl text-on-black leading-[1.15] tracking-tight">
            Por que escolher a Dra. Gabriela
          </h2>
        </div>
        <p className="text-on-black/60 text-base leading-relaxed max-w-sm lg:text-right font-light">
          Uma abordagem que une rigor clínico e cuidado humano em cada detalhe, desenhada exclusivamente para a sua jornada.
        </p>
      </div>

      {/* Grelha de Diferenciais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {diferenciais.map((item) => (
          <div
            key={item.numero}
            className="group relative overflow-hidden rounded-2xl border border-on-black/5 bg-foreground p-8 lg:p-12 flex flex-col gap-8 transition-all duration-500 ease-out hover:border-sage/30 hover:bg-on-black/[0.02] hover:shadow-2xl hover:shadow-on-black/5"
          >
            {/* Watermark Dinâmica (Fundo) */}
            <span
              className="absolute -right-4 -top-6 font-playfair font-bold text-[10rem] lg:text-[12rem] leading-none text-on-black/[0.03] select-none pointer-events-none transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:text-on-black/[0.05]"
              aria-hidden="true"
            >
              {item.numero}
            </span>

            {/* Conteúdo do Cartão (z-10 para ficar acima do watermark) */}
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-[2px] h-8 bg-sage/30 rounded-full transition-colors duration-500 group-hover:bg-sage" />
              <span className="text-xs font-medium tracking-[0.15em] text-sage/70 transition-colors duration-500 group-hover:text-sage">
                {item.numero}
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-4 mt-auto">
              <h3 className="font-playfair text-2xl text-on-black leading-snug">
                {item.titulo}
              </h3>
              <p className="text-on-black/60 text-sm leading-relaxed font-light">
                {item.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Diferenciais;