import Link from "next/link";
import { FaStar } from "react-icons/fa";
import heroImage from "../../public/lawyer.png";
import heroBg from "../../public/wood.png";
import { contactInfo } from "@/data";

const Hero = () => {
  return (
    <section
      className="relative"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      {/* Right and Left content wrapper */}
      <div className="relative z-20 responsive-container responsive-flex-center max-lg:flex-col gap-6 w-full">
        {/* Right Content */}
        <div className="my-8 w-full lg:w-3/4 ">
          <div className="responsive-mb">
            <span className=" text-slate-300 font-bold">
              Seja bem vindo à LS Advocacia
            </span>
          </div>

          <h1 className="responsive-h1 responsive-mb text-white">
            Soluções jurídicas personalizadas para garantir o melhor resultado.{" "}
          </h1>

          <p className="responsive-mb text-slate-300">
            Advocacia especializada nas mais diversas áreas do Direito,
            proporcionando maior segurança jurídica e solução de conflitos de
            maneira ágil e eficiente.
          </p>

          <div className="responsive-my gap-6">
            <Link
              href={contactInfo.whatsappLink}
              className="btn g inline-flex items-center justify-center gradient-bg text-white responsive-mb"
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
          </div>

          <div className="flex items-center gap-3">
            <FaStar className="text-yellow-500" />
            <div>
              <p className="text font-semibold text-white">
                Classificação de 5.0 estrelas
              </p>
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
        {/* End of Left content wrapper */}
      </div>
      {/* End of Right and Left content wrapper */}
    </section>
  );
};

export default Hero;
