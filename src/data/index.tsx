import { StaticImageData } from "next/image";

import logoBlack from "../../public/logo-black.png";
import logoWhite from "../../public/logo-white.png";

import team1 from "../../public/fernanda.png";
import team2 from "../../public/mauricio.png";
import team3 from "../../public/aline.png";
import team4 from "../../public/maysa.png";
import team5 from "../../public/tomas.png";

/**
 * ======================================
 * UTILS
 * ======================================
 */

type LogoProps = {
  href: string;
  black: StaticImageData;
  white: StaticImageData;
};

export const logo: LogoProps = {
  href: "/",
  black: logoBlack,
  white: logoWhite,
};

type ContactInfoProps = {
  whatsappLink: string;
  contactNumber: string;
  email: string;
  mapAddress: string;
  address: string;
};

export const contactInfo: ContactInfoProps = {
  whatsappLink: "https://wa.link/875dpa",
  contactNumber: "+55 (27) 99626-7475",
  email: "contato@lesadv.com.br",
  mapAddress: "https://maps.app.goo.gl/jpcJ3kydB9ZBGmik6",
  address: "Nossa Senhora da Penha, 1495, sala 703/B, Vitória/ES",
};

/**
 * ======================================
 * NAVBAR
 * ======================================
 */

type NavItemsProps = {
  href: string;
  label: string;
};

export const navItems: NavItemsProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#about",
    label: "Sobre Nós",
  },
  {
    href: "#services",
    label: "Serviços",
  },
  {
    href: "#differentials",
    label: "Diferenciais",
  },
  {
    href: "#team",
    label: "Equipe",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];



/**
 * ======================================
 * TEAM
 * ======================================
 */

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: StaticImageData;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dra. Fernanda Lima",
    role: "OAB/RS 72.525",
    description:
      "Graduada em Direito pela Fundação Universidade Federal do Rio Grande (FURG). Pós-graduada em Direito do Trabalho e Processo do Trabalho pela Escola Superior Verbo Jurídico. Pós-graduada em Advocacia Previdenciária pela Escola Brasileira de Direito (EBRADI). Possui mais de 15 anos de experiência na área trabalhista.",
    imageUrl: team1,
  },
  {
    name: "Dr. Mauricio Sant'Anna",
    role: "OAB/RS 127.675",
    description:
      "Advogado graduado pela UNISINOS, com uma trajetória profissional notável. Trabalhou como auxiliar de diversos juízes por 15 anos, com foco nas áreas cíveis e criminais. Possui certificações nas áreas de Direito Criminal, Execução da Pena, Direito Previdenciário, Societário, Empresarial, Família, Sucessões e Direito Administrativo.",
    imageUrl: team2,
  },
  {
    name: "Dra. Aline Silva",
    role: "OAB/RS 111.470",
    description:
      "Graduada em Direito pela Universidade FEEVALE, com pós-graduação em Advocacia Corporativa pela FMP e Direito do Trabalho pela Verbo Jurídico. Possui diversas certificações em Direito de Família, Trânsito e Direito Civil.",
    imageUrl: team3,
  },
  {
    name: "Dra. Maysa Ramos",
    role: "OAB/ES 41818",
    description:
      "Advogada responsável pela filial localizada na cidade de Vitória, Espírito Santo.",
    imageUrl: team4,
  },
  {
    name: "Dr. Tomas Tonin",
    role: "OAB/RS 121.356",
    description:
      "Advogado atuante nos estados do Rio Grande do Sul, Santa Catarina e Paraná.",
    imageUrl: team5,
  },
];

/**
 * ======================================
 * FAQ
 * ======================================
 */

type FaqProps = {
  question: string;
  answer: string;
};

export const faqItems: FaqProps[] = [
  {
    question: "Quais áreas do direito o escritório atende?",
    answer:
      "Atuamos em diversas áreas, incluindo direito civil, direito empresarial, direito de família, direito trabalhista, entre outras.",
  },
  {
    question: "Como posso saber se tenho direito a uma ação judicial?",
    answer:
      "Para saber se você tem direito a uma ação judicial, recomendamos uma consulta com um de nossos advogados, que avaliará seu caso com base nas informações fornecidas.",
  },
  {
    question: "Quais são os custos de uma consulta jurídica?",
    answer:
      "O valor da consulta jurídica pode variar dependendo da complexidade do caso e da área de atuação. Entre em contato conosco para mais detalhes sobre nossa política de preços.",
  },
  {
    question: "Como posso iniciar um processo judicial com o escritório?",
    answer:
      "O primeiro passo é agendar uma consulta para avaliarmos seu caso. Após a análise, discutiremos as opções legais e os passos necessários para dar início ao processo.",
  },
  {
    question: "Como posso acompanhar o andamento do meu processo?",
    answer:
      "Mantemos nossos clientes informados sobre o andamento do processo regularmente. Você também pode entrar em contato diretamente com nossa equipe para obter atualizações.",
  },
];
