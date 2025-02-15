import { contactInfo } from "@/data";
import Link from "next/link";
import {
  FaHeadset,
  FaUserTie,
  FaMapMarkerAlt,
  FaSitemap,
} from "react-icons/fa"; // Importing relevant icons

const featureData = [
  {
    id: 1,
    icon: <FaSitemap className="h-6 w-6 text-wine" />, // Icon for Múltiplas áreas de atuação
    title: "Múltiplas áreas de atuação",
    description:
      "Atuamos em diversas áreas de atuação, sempre com o objetivo de oferecer soluções inovadoras e eficientes para nossos clientes.",
  },
  {
    id: 2,
    icon: <FaUserTie className="h-6 w-6 text-wine" />, // Icon for Profissionais Especializados
    title: "Profissionais Especializados",
    description:
      "Advogados altamente qualificados, com expertise em diversas áreas do Direito, prontos para oferecer soluções eficazes.",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt className="h-6 w-6 text-wine" />, // Icon for Atendimento em Todo o País
    title: "Atendimento em Todo o País",
    description:
      "Atuação jurídica em todo o Brasil, garantindo suporte e acompanhamento em qualquer localidade.",
  },

  {
    id: 4,
    icon: <FaHeadset className="h-6 w-6 text-wine" />, // Icon for Atendimento 24h
    title: "Atendimento 24h",
    description:
      "Disponibilidade total para atender urgências jurídicas a qualquer hora do dia ou da noite.",
  },
];

const Features = () => {
  return (
    <section
      id="differentials"
      className=" section-spacing bg-gray-100 scroll-mt-28"
    >
      <div className="responsive-container   ">
        <div className="responsive-flex items-start">
          <div className=" w-full lg:max-w-xl lg:pr-16 mb-10">
            <h2 className="text-center md:text-left responsive-mb responsive-h2">
              Nossos Diferenciais
            </h2>
            <p className="text-center md:text-justify responsive-mb text-gray-900">
              Descubra os principais diferenciais que fazem da nossa empresa uma
              referência no setor. Trabalhamos incansavelmente para oferecer
              soluções jurídicas de alta qualidade, sempre focando na
              excelência, inovação e no atendimento personalizado. Nosso
              compromisso com a qualidade se reflete em cada aspecto do nosso
              trabalho, garantindo que nossos clientes recebam o melhor suporte
              jurídico, alinhado com suas necessidades e objetivos.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <Link
                href={contactInfo.whatsappLink}
                className="btn gradient-bg text-white"
              >
                Fale com um Advogado
              </Link>
            </div>
          </div>
          <div className="responsive-grid-2col gap-5 row-gap-5 ">
            {featureData.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col justify-center items-center md:items-start lg:max-w-md"
              >
                <div className="responsive-flex-center w-16 h-16 mb-4 rounded-full bg-red-50">
                  {feature.icon}
                </div>
                <h3 className="responsive-h3 mb-4">{feature.title}</h3>
                <p className="text-center md:text-left">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
