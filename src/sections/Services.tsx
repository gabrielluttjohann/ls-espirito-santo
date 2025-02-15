"use client";
import { useState } from "react";

// Título e descrição da seção
const sectionTitle = "Nossos Serviços";
const sectionDescription =
  "Confira as áreas do direito em que atuamos e veja como podemos ajudá-lo com assessoria jurídica especializada.";

type CategoryKeys =
  | "Assessoria Empresarial"
  | "Família e Sucessões"
  | "Obrigações e Contratos"
  | "Direito Bancário"
  | "Direito Imobiliário"
  | "Responsabilidade Civil"
  | "Direito do Consumidor"
  | "Direito Administrativo"
  | "Direito da Saúde"
  | "Direito do Trabalho"
  | "Direito Previdenciário"
  | "Direito Penal";

const categories: Record<CategoryKeys, string> = {
  "Assessoria Empresarial":
    "Atuação estratégica para empresas em diversos setores, auxiliando na gestão jurídica, contratos, conformidade regulatória e prevenção de litígios.",
  "Família e Sucessões":
    "Abrange questões como divórcios, guarda de filhos, pensão alimentícia, regulamentação de visitas, partilhas de bens, testamentos e planejamento sucessório, assegurando a melhor organização patrimonial para herdeiros e sucessores.",
  "Obrigações e Contratos":
    "Elaboração e revisão de contratos, além da assessoria em disputas contratuais e cumprimento de obrigações legais e comerciais.",
  "Direito Bancário":
    "Defesa de direitos em contratos bancários, revisão de juros abusivos, cobranças indevidas e questões relacionadas ao sistema financeiro.",
  "Direito Imobiliário":
    "Atuação em compra, venda e locação de imóveis, regularização fundiária, usucapião e litígios relacionados a bens imobiliários.",
  "Responsabilidade Civil":
    "Assessoria em ações indenizatórias por danos morais e materiais, erros médicos, acidentes de trânsito e outras situações de prejuízo causado a terceiros.",
  "Direito do Consumidor":
    "Defesa dos direitos dos consumidores em compras de produtos e serviços, ações por publicidade enganosa, práticas abusivas e cláusulas contratuais ilegais.",
  "Direito Administrativo":
    "Atuação em processos administrativos, licitações, contratos públicos e defesa de servidores e empresas contra penalidades aplicadas por órgãos públicos.",
  "Direito da Saúde":
    "Assessoria em questões envolvendo planos de saúde, fornecimento de medicamentos, erro médico e ações contra o Estado para garantia de tratamentos.",
  "Direito do Trabalho":
    "Atuação em processos trabalhistas, defesa de empregadores e empregados, rescisões contratuais, direitos trabalhistas e negociações coletivas.",
  "Direito Previdenciário":
    "Acompanhamento de aposentadorias, benefícios do INSS, revisões de cálculos previdenciários e concessão de auxílios e pensões.",
  "Direito Penal":
    "Atuação na defesa e acusação em crimes contra a pessoa, patrimônio, administração pública, além de acompanhamento de inquéritos e processos criminais.",
};

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState<CategoryKeys>(
    "Assessoria Empresarial"
  );

  return (
    <section id="services" className="bg-gray-100 scroll-my-28">
      <div className="responsive-container section-spacing ">
        {/* Título e descrição */}
        <div className="responsive-flex-center max-md:text-center responsive-mb">
          <h2 className="responsive-h2 w-full ">{sectionTitle}</h2>
          <p className="text-gray-600 mt-2">{sectionDescription}</p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 border-b pb-2">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category as CategoryKeys)}
              className={` py-4 responsive-text border transition-all duration-300 whitespace-nowrap hover:bg-wineLight hover:text-white ${
                activeTab === category
                  ? "border-black bg-wine text-charcoalGray text-white font-semibold"
                  : "border-gray-400 text-gray-500 hover:text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 p-5 bg-white border rounded shadow-sm">
          <p className="text-gray-900 responsive-text">
            {categories[activeTab]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
