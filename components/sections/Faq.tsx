import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";

const Faq = () => (
  <section id="faq" className="bg-background py-20 lg:py-28">
    <div className="max-w-3xl mx-auto px-6">

      <p className="text-xs uppercase tracking-widest text-olive mb-3">FAQ</p>
      <h2 className="font-playfair text-3xl lg:text-5xl text-foreground mb-14 leading-tight">
        Perguntas frequentes
      </h2>

      <div className="flex flex-col border-t border-border">
        {faqItems.map((item) => (
          <details key={item.pergunta} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium text-foreground">
              {item.pergunta}
              <ChevronDown
                size={18}
                className="shrink-0 text-olive transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="pb-6 text-muted-foreground leading-relaxed text-sm">
              {item.resposta}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
