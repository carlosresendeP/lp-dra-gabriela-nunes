const navLinks = [
  { label: "Sintomas", href: "#sintomas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Para Quem É", href: "#para-quem-e" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-playfair text-on-black text-lg">Dra. Gabriela Nunes</p>
          <p className="text-on-black/40 text-xs mt-1">Psiquiatra · CRM-MG XXXXX</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-on-black/50 hover:text-on-black transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-on-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-on-black/40 text-xs">
          © {new Date().getFullYear()} Dra. Gabriela Nunes — Todos os direitos reservados
        </p>
        <p className="text-on-black/25 text-xs">
          Medicina com responsabilidade e ética
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
