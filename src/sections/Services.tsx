import Link from "next/link";
import { contactInfo, services } from "@/data";
import CustomButton from "@/components/CustomButton";

const Services = () => {
  return (
    <div
      id="services"
      className="scroll-mt-28 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Áreas de Atuação</span>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Atendemos diversas áreas do Direito para oferecer suporte jurídico
          especializado e personalizado.
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-50 text-deep-purple-accent-400 text-2xl">
              {service.icon}
            </div>
            <h6 className="mb-2 font-semibold leading-5">{service.name}</h6>
            <p className="text-sm text-gray-900">
              Entre em contato para saber mais sobre como podemos ajudar nessa
              área do Direito.
            </p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <CustomButton
          link
          href={contactInfo.whatsappLink}
          label="Fale com um advogado"
        />
      </div>
    </div>
  );
};

export default Services;
