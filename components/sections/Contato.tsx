import { MapPin, Mail, MessageCircle, ArrowRight } from "lucide-react";

const Contato = () => (
  <section id="contato" className="bg-foreground py-24 lg:py-32 relative overflow-hidden">
    
    {/* Efeito de iluminação suave para profundidade */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Coluna da Esquerda: Informações Diretas (Ocupa 5 colunas) */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-[1px] bg-accent" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                Agendamento
              </p>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl text-background leading-[1.1] tracking-tight mb-6">
              Dê o primeiro passo.
            </h2>
            <p className="text-background/60 text-base leading-relaxed font-light">
              Estou aqui para ouvir. Escolha o canal que lhe for mais confortável para iniciarmos a sua jornada.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {/* Cartão WhatsApp */}
            <a 
              href="https://wa.me/5532999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center p-6 rounded-2xl bg-background/5 border border-background/5 transition-all duration-300 hover:bg-background/10 hover:border-background/20"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-5 transition-transform duration-300 group-hover:scale-110">
                <MessageCircle size={22} className="text-accent" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-background/50 uppercase tracking-widest font-medium mb-1">WhatsApp</span>
                <span className="text-background text-lg font-light group-hover:text-accent transition-colors">(32) 99999-9999</span>
              </div>
            </a>

            {/* Cartão E-mail */}
            <a 
              href="mailto:contato@dragabrielanunes.com.br"
              className="group flex items-center p-6 rounded-2xl bg-background/5 border border-background/5 transition-all duration-300 hover:bg-background/10 hover:border-background/20"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-5 transition-transform duration-300 group-hover:scale-110">
                <Mail size={22} className="text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-background/50 uppercase tracking-widest font-medium mb-1">E-mail</span>
                <span className="text-background text-lg font-light group-hover:text-primary transition-colors">contato@dragabriela.com</span>
              </div>
            </a>

            {/* Localização Físico */}
            <div className="flex items-start p-6">
              <MapPin size={22} className="text-background/40 mt-1 mr-5 shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-xs text-background/50 uppercase tracking-widest font-medium mb-2">Consultório</span>
                <span className="text-background/80 text-base font-light leading-relaxed">
                  Atendimento presencial em Juiz de Fora / MG<br />
                  e online para todo o Brasil.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário Editorial (Ocupa 7 colunas) */}
        <div className="lg:col-span-7">
          <form 
            action="https://formspree.io/f/SEU_ID_AQUI" 
            method="POST"
            className="bg-background/5 border border-background/10 rounded-3xl p-8 lg:p-12 flex flex-col gap-8 backdrop-blur-sm"
          >
            <h3 className="font-playfair text-2xl text-background mb-2">Envie uma mensagem</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nome */}
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="nome" className="text-xs uppercase tracking-widest text-background/50 font-medium">Nome Completo</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  required
                  className="w-full bg-transparent border-b border-background/20 py-3 text-background placeholder:text-background/20 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Como prefere ser chamado?"
                />
              </div>

              {/* Telefone */}
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="telefone" className="text-xs uppercase tracking-widest text-background/50 font-medium">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  name="telefone" 
                  required
                  className="w-full bg-transparent border-b border-background/20 py-3 text-background placeholder:text-background/20 focus:outline-none focus:border-accent transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-background/50 font-medium">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full bg-transparent border-b border-background/20 py-3 text-background placeholder:text-background/20 focus:outline-none focus:border-accent transition-colors"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="mensagem" className="text-xs uppercase tracking-widest text-background/50 font-medium">Como posso ajudar?</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows={4}
                className="w-full bg-transparent border-b border-background/20 py-3 text-background placeholder:text-background/20 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Descreva brevemente o que está sentindo..."
              />
            </div>

            {/* CTA do Formulário */}
            <button 
              type="submit"
              className="group flex items-center justify-center gap-3 bg-accent text-background px-8 py-5 rounded-xl font-medium mt-4 transition-all duration-300 hover:bg-accent/90 hover:-translate-y-1 shadow-lg shadow-accent/20"
            >
              <span>Enviar Mensagem</span>
              <ArrowRight size={18} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </button>
            <p className="text-center text-xs text-background/40 font-light mt-2">
              Os seus dados estão seguros e serão tratados com total sigilo.
            </p>
          </form>
        </div>

      </div>
    </div>
  </section>
);

export default Contato;