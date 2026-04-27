"use client";

import { useState, useEffect } from "react";
import { Menu, X, Flower2 } from "lucide-react";

const navItems = [
  { label: "SINTOMAS", href: "#sintomas" },
  { label: "DEPOIMENTOS", href: "#depoimentos" },
  { label: "PARA QUEM É", href: "#para-quem-e" },
  { label: "DIFERENCIAIS", href: "#diferenciais" },
  { label: "SOBRE", href: "#sobre" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 py-5 w-full mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-foreground/45 h-20 backdrop-blur-sm shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">

          {/* Logo */}
          <a href="#" onClick={closeMenu} className="flex items-center gap-3">
            <Flower2 size={28} className="text-sage" />
            <span
              className={`font-playfair text-lg tracking-wide transition-colors duration-500 ${
                scrolled ? "text-on-black" : "text-white"
              }`}
            >
              Dra. Gabriela Nunes
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs tracking-widest font-medium transition-colors duration-500 ${
                  scrolled
                    ? "text-on-black/60 hover:text-on-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-500 ${
              scrolled ? "text-on-black" : "text-white"
            }`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-foreground/95 backdrop-blur-sm flex flex-col items-center justify-center gap-10 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className={`text-base tracking-widest font-medium text-on-black transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {item.label}
          </a>
        ))}
        <span className="w-12 h-px bg-sage mt-2" />
      </div>

      {/* spacer — empurra o conteúdo abaixo do header fixo */}
      <div className="h-20" />
    </>
  );
};

export default Header;
