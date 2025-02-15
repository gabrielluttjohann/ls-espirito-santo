import CustomButton from "@/components/CustomButton";
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
    icon: <FaHeadset className="h-6 w-6 text-wine"/>, // Icon for Atendimento 24h
    title: "Atendimento 24h",
    description:
      "Disponibilidade total para atender urgências jurídicas a qualquer hora do dia ou da noite.",
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
    icon: <FaSitemap className="h-6 w-6 text-wine" />, // Icon for Múltiplas áreas de atuação
    title: "Múltiplas áreas de atuação",
    description:
      "Atuamos em diversas áreas de atuação, sempre com o objetivo de oferecer soluções inovadoras e eficientes para nossos clientes.",
  },
];

const Features = () => {
  return (
    <div
      id="differentials"
      className="scroll-mt-28 px-4 py-16 responsive-container lg:py-20"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:max-w-xl lg:pr-16 mb-10">
          <h5 className="mb-6 text-4xl font-bold  inline-block border-b-2 border-wine">
            Nossos Diferenciais
          </h5>
          <p className="mb-6 responsive-text text-gray-900">
            Descubra os principais diferenciais que fazem da nossa empresa uma
            referência no setor. Trabalhamos incansavelmente para oferecer
            soluções jurídicas de alta qualidade, sempre focando na excelência,
            inovação e no atendimento personalizado. Nosso compromisso com a
            qualidade se reflete em cada aspecto do nosso trabalho, garantindo
            que nossos clientes recebam o melhor suporte jurídico, alinhado com
            suas necessidades e objetivos.
          </p>
          <div className="flex items-center">
           <Link href="" className="bg-gradient-to-r from-wine to-wineLight py-4 px-7 text-white font-bold rounded-full">
           Fale com um Advogado
           </Link>
          </div>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          {featureData.map((feature) => (
            <div key={feature.id} className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
                {feature.icon}
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-3xl">{feature.title}</h6>
              <p className=" text-gray-700 responsive-text ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
