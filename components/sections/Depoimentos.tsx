"use client";

import { Star, Quote } from "lucide-react";
import { depoimentos } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Depoimentos = () => (
  <section id="depoimentos" className="bg-foreground py-20 lg:py-28 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">

      <Carousel
        opts={{ loop: true, align: "start" }}
        className="w-full"
      >
        {/* Cabeçalho + botões de navegação alinhados */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest text-sage mb-3">
              Depoimentos
            </p>
            <h2 className="font-playfair text-3xl lg:text-5xl text-on-black leading-tight">
              O que dizem nossos pacientes
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <CarouselPrevious
              className="relative top-auto left-auto translate-y-0 bg-on-black/10 border-on-black/20 text-on-black hover:bg-sage/20 hover:text-sage hover:border-sage/30 transition-colors"
            />
            <CarouselNext
              className="relative top-auto right-auto translate-y-0 bg-on-black/10 border-on-black/20 text-on-black hover:bg-sage/20 hover:text-sage hover:border-sage/30 transition-colors"
            />
          </div>
        </div>

        {/* Slides */}
        <CarouselContent className="-ml-5">
          {depoimentos.map((dep) => (
            <CarouselItem
              key={dep.nome}
              className="pl-5 md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative overflow-hidden rounded-2xl border border-on-black/15 bg-on-black/5 p-7 flex flex-col gap-5 h-full">

                {/* Aspas decorativas */}
                <Quote
                  size={52}
                  className="absolute -top-2 -right-2 text-sage/10 rotate-180"
                  aria-hidden="true"
                />

                {/* Estrelas */}
                <div className="flex gap-1">
                  {Array.from({ length: dep.estrelas }).map((_, i) => (
                    <Star key={i} size={14} className="text-peach fill-peach" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-on-black/65 leading-relaxed text-sm flex-1">
                  &ldquo;{dep.texto}&rdquo;
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-4 border-t border-on-black/10">
                  <div className="w-9 h-9 rounded-full bg-sage/25 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-on-black/70">
                      {dep.nome.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-on-black/80">
                    {dep.nome}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </section>
);

export default Depoimentos;
