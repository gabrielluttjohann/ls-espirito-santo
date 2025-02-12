import lawyerWriting from "../../public/lawyer-writing.jpg";

const About = () => {
  return (
    <div id="about" className="scroll-mt-28 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              O Escritório | OAB/RS 11.161
            </h2>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              Com sede no estado do Rio Grande do Sul e filial no Estado do
              Espírito Santo, à LS ADVOGADOS ASSOCIADOS é um escritório dedicado
              a oferecer soluções jurídicas personalizadas e de excelência.
              Nosso objetivo é proteger seus direitos com ética, estratégia e
              dedicação.Atualmente contamos com mais de 1.200 ações
              judiciais em andamento e atendemos clientes em diversos estados,
              como Santa Catarina, Paraná, São Paulo, Espírito Santo e Pará.
              Buscamos sempre a excelência no atendimento, oferecendo soluções
              rápidas e objetivas para os conflitos de nossos clientes. Contamos
              com uma equipe especializada nas mais diversas áreas do direito,
              garantindo um atendimento exclusivo e personalizado. Confie em nós
              para resolver suas demandas jurídicas com segurança e
              tranquilidade.
            </p>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96 bg-gray-200"
            src={lawyerWriting.src}
            alt="Escritório LS Advogados"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
