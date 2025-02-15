import Link from "next/link";
import { FaStar } from "react-icons/fa";
import heroImage from "../../public/lawyer.png";
import heroBg from "../../public/wood.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg-wine pt-8"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      {/* Fundo da imagem */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      </div>

      {/* Right and Left content wrapper */}
      <div className="relative z-20 responsive-container flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        {/* Right Content */}
        <div className="my-8 w-full md:w-1/2 ">
          <h2 className="text-xl">
            <span className="text-slate-300">Seja bem vindo à</span>{" "}
            <span className="text-white font-bold">LS Advocacia</span>
          </h2>

          <h1 className="my-4 md:my-8 lg:my-10 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white">
            Soluções jurídicas personalizadas para garantir o melhor resultado.{" "}
          </h1>

          <p className="text-sm md:text-md lg:text-lg my-4 md:my-6 lg:my-8 text-slate-300">
            Advocacia especializada nas mais diversas áreas do Direito,
            proporcionando maior segurança jurídica e solução de conflitos de
            maneira ágil e eficiente.
          </p>

          <div className="my-4 md:my-6 lg:my-10 flex items-center gap-6">
            <Link
              href=""
              className="flex items-center font-bold gap-2 bg-gradient-to-r from-wine to-wineLight py-4 px-7 rounded-full text-white"
            >
              <span>Fale com um Advogado</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </Link>
            <Link href="" className="inline-block border-b-2 border-black">
              Período de Teste
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <FaStar className="text-yellow-500" />
            <div>
              <p className="text font-semibold text-white">Classificação de 5.0 estrelas</p>
              
            </div>
          </div>
        </div>
        {/* End of Right Content */}

        {/* Left Content */}
        <div className="w-full md:w-[50%] lg:w-[60%] flex justify-center relative z-20">
          <img
            src={heroImage.src}
            alt=""
            className=" object-cover rounded-xl w-[450] h-[700]"
          />
        </div>
        {/* End of Left Content */}
      </div>
      {/* End of Left content wrapper */}
    </section>
  );
};

export default Hero;
