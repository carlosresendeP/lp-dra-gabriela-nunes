export interface Depoimento {
  nome: string;
  texto: string;
  estrelas: number;
}

export interface ParaQuemItem {
  icon: string;
  titulo: string;
  descricao: string;
}

export interface Diferencial {
  numero: string;
  titulo: string;
  descricao: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export const sintomas: string[] = [
  "Ansiedade e preocupação excessiva",
  "Dificuldade para dormir ou insônia",
  "Baixa autoestima e pensamentos negativos",
  "Dificuldade de concentração (TDAH)",
  "Episódios de tristeza profunda ou vazio",
  "Crises de pânico ou medo intenso",
  "Irritabilidade e impaciência frequentes",
  "Burnout e esgotamento profissional",
  "Isolamento social e perda de interesse",
  "Pensamentos acelerados e dificuldade de relaxar",
];

export const depoimentos: Depoimento[] = [
  {
    nome: "Maria S.",
    texto:
      "A Dra. Gabriela mudou completamente minha relação com a ansiedade. Pela primeira vez em anos me sinto no controle da minha vida. Atendimento cuidadoso e sem julgamentos.",
    estrelas: 5,
  },
  {
    nome: "João M.",
    texto:
      "Profissional incrível. Me senti acolhido desde a primeira consulta. O tratamento para TDAH foi absolutamente transformador na minha vida profissional e pessoal.",
    estrelas: 5,
  },
  {
    nome: "Ana L.",
    texto:
      "Passei por um burnout severo e achei que nunca ia me recuperar. Com a Dra. Gabriela encontrei o caminho de volta para mim mesma. Recomendo de coração.",
    estrelas: 5,
  },
  {
    nome: "Carla T.",
    texto:
      "A consulta online facilita muito minha rotina corrida. A Dra. Gabriela é atenciosa e me ajudou a organizar minhas emoções de uma forma que nunca imaginei ser possível.",
    estrelas: 5,
  },
];

export const paraQuem: ParaQuemItem[] = [
  {
    icon: "Brain",
    titulo: "Ansiedade & Depressão",
    descricao:
      "Para quem vive com pensamentos acelerados, tristeza persistente ou medo constante que impede o dia a dia.",
  },
  {
    icon: "Briefcase",
    titulo: "Burnout Profissional",
    descricao:
      "Para profissionais esgotados que perderam a energia, o prazer no trabalho e o equilíbrio emocional.",
  },
  {
    icon: "Zap",
    titulo: "TDAH & Concentração",
    descricao:
      "Para quem tem dificuldade de concentração, impulsividade e precisa de suporte especializado.",
  },
  {
    icon: "Heart",
    titulo: "Equilíbrio Emocional",
    descricao:
      "Para quem busca autoconhecimento, bem-estar mental e quer viver com mais leveza e plenitude.",
  },
];

export const diferenciais: Diferencial[] = [
  {
    numero: "01",
    titulo: "Atendimento Humanizado",
    descricao:
      "Cada paciente é acolhido com escuta ativa, respeito e sem julgamentos. Você não é um prontuário — é uma pessoa.",
  },
  {
    numero: "02",
    titulo: "Online e Presencial",
    descricao:
      "Consultas em consultório ou por videochamada segura — você escolhe o formato mais confortável para você.",
  },
  {
    numero: "03",
    titulo: "Laudos Especializados",
    descricao:
      "Emissão de laudos psiquiátricos e pareceres técnicos para concursos, INSS e demais finalidades.",
  },
  {
    numero: "04",
    titulo: "Baseado em Evidências",
    descricao:
      "Tratamento alinhado às diretrizes mais recentes, combinando medicação quando necessário e psicoeducação.",
  },
];

export const faqItems: FaqItem[] = [
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "A primeira consulta dura em média 60 minutos. Conversamos sobre sua história, sintomas atuais e objetivos de vida. Ao final, já temos uma direção clara para o seu tratamento.",
  },
  {
    pergunta: "A Dra. Gabriela atende pelo plano de saúde?",
    resposta:
      "No momento, o atendimento é particular. Emitimos recibo para reembolso conforme as regras do seu plano — consulte sua operadora sobre os valores de cobertura.",
  },
  {
    pergunta: "É possível fazer consulta online?",
    resposta:
      "Sim. Oferecemos atendimento por videochamada segura para todo o Brasil. A experiência e a qualidade são as mesmas da consulta presencial.",
  },
  {
    pergunta: "Quanto tempo dura o tratamento psiquiátrico?",
    resposta:
      "Depende do diagnóstico e da resposta individual de cada paciente. Alguns casos se resolvem em poucos meses, outros exigem acompanhamento contínuo. O ritmo é sempre definido junto com você.",
  },
  {
    pergunta: "A psiquiatra só prescreve remédios?",
    resposta:
      "Não. Medicação é uma das ferramentas disponíveis, não a única. Muitos casos são tratados com psicoeducação, mudanças de hábito e acompanhamento — sempre de forma individualizada.",
  },
  {
    pergunta: "Como faço para agendar uma consulta?",
    resposta:
      "O jeito mais rápido é via WhatsApp, clicando no botão abaixo. Você também pode enviar um e-mail ou preencher o formulário de contato. Respondemos em até 24 horas úteis.",
  },
];
