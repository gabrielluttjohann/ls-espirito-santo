import Image from "next/image";
import office from "../../public/office.jpg";
import Link from "next/link";
import { contactInfo } from "@/data";

const About = () => {
  return (
    <div
      id="about"
      className="responsive-container section-spacing scroll-mt-28"
    >
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2 items-center">
        <div className="responsive-flex-center">
          <div className="">
            <h2 className="responsive-h2  text-center md:text-left responsive-mb">
              O Escritório | OAB/RS 11.161
            </h2>
            <p className="responsive-mb text-center md:text-left lg:text-justify  lg:pr-20  ">
              LS Advogados Associados é um escritório dedicado a oferecer
              soluções jurídicas personalizadas com ética, estratégia e
              excelência. Com sede no Rio Grande do Sul e filial no Espírito
              Santo, atendemos clientes em diversos estados e contamos com mais
              de 1.200 ações em andamento. Nossa equipe altamente especializada
              garante um atendimento exclusivo, ágil e eficaz, proporcionando
              segurança e tranquilidade na resolução de demandas jurídicas.
            </p>
            <div className="responsive-flex-center  md:justify-start">
              <Link
                href={contactInfo.whatsappLink}
                className="btn gradient-bg text-white text-center  "
              >
                Fale com um Advogado
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            width={500} // Defina como 0 para usar largura automática
            height={500} // Defina como 0 para usar altura automática
            className="object-cover w-full h-full shadow-lg rounded-xl"
            src={office.src}
            alt="Escritório LS Advogados"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
