import Link from "next/link";
import {
  FaBalanceScale,
  FaGavel,
  FaUserShield,
  FaHandHoldingUsd,
  FaBuilding,
  FaLandmark,
  FaShieldAlt,
  FaUsers,
  FaFileContract,
  FaBriefcase,
  FaHospital,
  FaHardHat,
  FaUniversity,
  FaLock,
} from "react-icons/fa";

const Services = () => {
  const areas = [
    {
      name: "Assessoria Empresarial",
      icon: <FaBriefcase className="text-blue" />,
    },
    { name: "Direito Civil", icon: <FaGavel className="text-blue" /> },
    { name: "Direito da Família", icon: <FaUsers className="text-blue" /> },
    {
      name: "Sucessões e Inventários",
      icon: <FaFileContract className="text-blue" />,
    },
    {
      name: "Direito das Obrigações e Contratos",
      icon: <FaHandHoldingUsd className="text-blue" />,
    },
    {
      name: "Direito Bancário",
      icon: <FaBalanceScale className="text-blue" />,
    },
    { name: "Direito Imobiliário", icon: <FaBuilding className="text-blue" /> },
    {
      name: "Responsabilidade Civil",
      icon: <FaShieldAlt className="text-blue" />,
    },
    {
      name: "Direito do Consumidor",
      icon: <FaUserShield className="text-blue" />,
    },
    {
      name: "Direito Administrativo",
      icon: <FaLandmark className="text-blue" />,
    },
    { name: "Direito da Saúde", icon: <FaHospital className="text-blue" /> },
    { name: "Direito do Trabalho", icon: <FaHardHat className="text-blue" /> },
    {
      name: "Direito Previdenciário",
      icon: <FaUniversity className="text-blue" />,
    },
    { name: "Direito Penal", icon: <FaLock className="text-blue" /> },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
        {areas.map((area, index) => (
          <div
            key={index}
            className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-50 text-deep-purple-accent-400 text-2xl">
              {area.icon}
            </div>
            <h6 className="mb-2 font-semibold leading-5">{area.name}</h6>
            <p className="text-sm text-gray-900">
              Entre em contato para saber mais sobre como podemos ajudar nessa
              área do Direito.
            </p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/contato"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-blue transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Fale Conosco
        </Link>
      </div>
    </div>
  );
};

export default Services;
