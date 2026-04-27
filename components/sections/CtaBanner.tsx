import { MessageCircle } from "lucide-react";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5532999999999";

const CtaBanner = () => (
  <section className="bg-background py-20 lg:py-24">
    <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">

      <p className="text-xs uppercase tracking-widest text-sage">Dê o primeiro passo</p>

      <h2 className="font-playfair text-foreground text-3xl lg:text-5xl max-w-2xl leading-tight">
        Você merece se sentir bem.
        <br />
        <em>Começa com uma conversa.</em>
      </h2>

      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-sage text-foreground font-semibold px-8 py-4 rounded-full hover:bg-sage/85 transition-colors duration-200"
      >
        <MessageCircle size={20} />
        Agendar pelo WhatsApp
      </a>

      <p className="text-on-black/40 text-xs">
        Respondemos em até 24 horas úteis
      </p>
    </div>
  </section>
);

export default CtaBanner;
