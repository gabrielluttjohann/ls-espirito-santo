import CustomButton from "@/components/CustomButton";
import vitoriaImg from "../../public/vitoria.png";
import { contactInfo } from "@/data";
import { FaRegHandshake, FaGavel, FaBriefcase } from "react-icons/fa"; // Importando os ícones

const Hero = () => {
  return (
    <div className="mb-16 ">
      <div
        className="relative bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${vitoriaImg.src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue opacity-60"></div>

        <div className="relative z-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xl tracking-wider text-white font-bold uppercase rounded-full">
                LS Advocacia | Espírito Santo
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              Soluções jurídicas personalizadas para garantir o melhor
              resultado.
            </h2>
            <p className="text-base text-gray-200 md:text-lg">
              Advocacia especializada nas mais diversas áreas do Direito,
              proporcionando maior segurança jurídica e solução de conflitos de
              maneira ágil e eficiente.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <CustomButton
              link
              secondary
              label="Fale com um advogado"
              href={contactInfo.whatsappLink}
            />
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <FaBriefcase className="w-10 h-10 text-deep-purple-accent-400" />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Consultoria Jurídica
            </p>
            <p className="text-gray-600">
              Assessoria completa para seu negócio ou caso pessoal.
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <FaGavel className="w-10 h-10 text-deep-purple-accent-400" />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Litígios e Defesa
            </p>
            <p className="text-gray-600">
              Defesa em processos judiciais e resolução de disputas.
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <FaRegHandshake className="w-10 h-10 text-deep-purple-accent-400" />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Acordos e Mediação
            </p>
            <p className="text-gray-600">
              Busca por soluções rápidas e eficientes fora do tribunal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
