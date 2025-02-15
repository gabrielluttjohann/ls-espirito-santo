import CustomButton from "@/components/CustomButton";
import { contactInfo } from "@/data";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="scroll-mt-28 relative z-10 overflow-hidden py-32 my-20 bg-gradient-to-r from-wine via-wine to-red-600">
      <div className="responsive-container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="text-center lg:text-left">
              <div className="mb-10 lg:mb-0">
                <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white">
                  Proteja seus direitos com assessoria especializada
                </h1>
                <p className="w-full text-base  leading-relaxed sm:text-lg sm:leading-relaxed text-slate-300">
                  Venha ter uma experiência diferenciada de um escritório de
                  advocacia personalizado para resolver o seu problema com
                  excelência. Clique em agende uma consulta e surpreenda-se.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-right ">
             <Link href="" className="bg-red-400 py-5 px-7 font-bold text-white rounded-full">Fale com um Advogado</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <span className="absolute top-0 right-0 -z-10">
        <svg
          width="388"
          height="250"
          viewBox="0 0 388 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6910)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_971_6910"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.520507" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute top-4 left-4 -z-10">
        <svg
          width="43"
          height="56"
          viewBox="0 0 43 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle cx="40.9984" cy="1.49626" r="1.49626" fill="white" />
            <circle cx="27.8304" cy="1.49626" r="1.49626" fill="white" />
            <circle cx="14.6644" cy="1.49626" r="1.49626" fill="white" />
            <circle cx="1.49642" cy="1.49626" r="1.49626" fill="white" />
            <circle cx="40.9984" cy="14.6642" r="1.49626" fill="white" />
            <circle cx="27.8304" cy="14.6642" r="1.49626" fill="white" />
            <circle cx="14.6644" cy="14.6642" r="1.49626" fill="white" />
            <circle cx="1.49642" cy="14.6642" r="1.49626" fill="white" />
          </g>
        </svg>
      </span>
    </section>
  );
};

export default Cta;
