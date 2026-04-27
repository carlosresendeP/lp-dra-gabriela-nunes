# Dra. Gabriela Nunes — Clínica Psiquiátrica de Alta Autoridade

> Uma interface premium, minimalista e altamente responsiva desenhada para elevar o padrão do atendimento digital em saúde mental.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 👁️ Visão Geral e UX/UI Design

Este projeto não é apenas uma "landing page"; é uma **experiência de regulação emocional**. Desenvolvido com base em princípios rigorosos de UI/UX para o nicho de psiquiatria, o design foca-se na **autoridade, empatia e conversão silenciosa**. Abandonámos as grelhas tradicionais e os templates genéricos em prol de um design editorial de luxo.

**A Paleta "Elite Psi":**
- **Alabaster (`#FAF9F6`):** Fundo principal que simula papel de luxo, reduzindo a fadiga visual e o stress do paciente.
- **Gunmetal Green (`#242B2B`):** Um verde profundo quase negro para as tipografias, garantindo peso institucional sem a agressividade do preto puro.
- **Slate Green (`#6B8E8E`):** A cor primária, misturando azul (estabilidade) com verde (renovação).
- **Terracota Suave (`#A67C6A`):** Cor de destaque para os Call to Actions (CTA), trazendo calor humano e ancoragem ao mundo físico.

**Tipografia:**
- `Playfair Display`: Utilizada em títulos, transmite rigor médico, profundidade e tradição editorial.
- `Inter`: Utilizada em blocos de texto e UI, garante legibilidade imaculada em qualquer ecrã.

## 🚀 Tecnologias (Stack)

- **Framework:** [Next.js 14/15](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes Base:** [shadcn/ui](https://ui.shadcn.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Linguagem:** TypeScript (Strict Mode)
- **Formulário:** Integração estática com [Formspree](https://formspree.io/)

## 🧩 Arquitetura de Secções

O ritmo visual da página alterna intencionalmente entre fundos claros (acolhimento) e escuros (foco/introspeção):

1. **Hero:** Impacto visual com prova social imediata (Avaliação Google) e tratamento fotográfico integrado na paleta.
2. **Sintomas (Dark Mode Tático):** Mergulho imersivo focado na validação da dor do paciente, com layout fixo (sticky).
3. **Depoimentos:** Cartões elegantes de prova social.
4. **A Quem Se Destina:** Inovação via "Linhas Editoriais" dinâmicas, sem limites de caixas (zero-card UI).
5. **Diferenciais:** Fundo claro com marcas d'água tipográficas (Watermarks).
6. **Sobre:** Biografia humanizada com grelha assimétrica (12 colunas) e checkmarks interativos.
7. **Contacto:** Formulário invisível (*frictionless UI*) e cartões táteis para WhatsApp e E-mail.

## 💻 Instalação e Execução Local

Siga os passos abaixo para correr o projeto no seu ambiente local:

### 1. Clonar o repositório
```bash
git clone [https://github.com/seu-usuario/dra-gabriela-nunes.git](https://github.com/seu-usuario/dra-gabriela-nunes.git)
cd dra-gabriela-nunes

cd frontend

### 2. Instalar dependências
```bash
pnpm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env.local` na raiz da pasta `frontend`:
```env
# URL do seu backend (API REST)
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 4. Executar em modo de desenvolvimento
```bash
pnpm dev
```
O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## 📋 Pré-requisitos
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

## 🎨 Customização

Toda a estética e regras de negócio do site são controladas centralmente no arquivo de configuração de temas do Tailwind.

### Mudança de Cores
Para alterar o esquema de cores (Slate Green, Terracota, etc.), edite o arquivo `frontend/tailwind.config.ts`:
```typescript
const config = {
  theme: {
    extend: {
      colors: {
        primary: "#6B8E8E", // Exemplo: Mude para qualquer cor hexadecimal
        accent: "#A67C6A",
        // ...
      }
    }
  }
}
```

### Configuração de Formulários
Para conectar o formulário de contato ao seu backend (ou API externa), edite o arquivo `frontend/app/api/contact/route.ts`:
```typescript
const TARGET_API = "https://your-backend.com/api/contact";
```

## 📦 Deploy

O projeto está configurado para deploy estático. Para subir para produção:
```bash
pnpm build
pnpm start
```
