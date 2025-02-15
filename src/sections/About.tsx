import Image from "next/image";
import office from "../../public/office.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="responsive-container scroll-mt-28 px-4 py-16 xl:px-6 lg:px-8 lg:py-20 my-12"
    >
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="lg:max-w-xl mb-6">
            <h2 className="inline-block  text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:leading-none border-b-2 border-wine">
              O Escritório | OAB/RS 11.161
            </h2>
            <p className="responsive-text text-slate-600 my-4 md:my-6 lg:my-8 text-justify ">
              Com sede no estado do Rio Grande do Sul e filial no Estado do
              Espírito Santo, à LS Advogados Associados é um escritório dedicado
              a oferecer soluções jurídicas personalizadas e de excelência.
              Nosso objetivo é proteger seus direitos com ética, estratégia e
              dedicação.Atualmente contamos com mais de 1.200 ações judiciais em
              andamento e atendemos clientes em diversos estados, como Santa
              Catarina, Paraná, São Paulo, Espírito Santo e Pará. Buscamos
              sempre a excelência no atendimento, oferecendo soluções rápidas e
              objetivas para os conflitos de nossos clientes. Contamos com uma
              equipe especializada nas mais diversas áreas do direito,
              garantindo um atendimento exclusivo e personalizado. Confie em nós
              para resolver suas demandas jurídicas com segurança e
              tranquilidade.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image
            width={500} // Defina como 0 para usar largura automática
            height={500} // Defina como 0 para usar altura automática
            className="object-cover w-full h-auto shadow-lg rounded-xl"
            src={office.src}
            alt="Escritório LS Advogados"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
