import Image from "next/image";
import { teamMembers } from "@/data";

const Team = () => {
  return (
    <section id="team" className="section-spacing scroll-mt-28">
      <div className="responsive-container responsive-mb flex flex-col ">
        <div className="responsive-flex-between items-center flex-col lg:flex-row responsive-mb lg:gap-8">
          <h2 className="responsive-h2 responsive-mb w-full">
            Conheça Nossa Equipe de Especialistas
          </h2>
          <p className="max-w-4xl responsive-my">
            Formada por profissionais altamente qualificados e dedicados, nossa
            equipe está comprometida em oferecer soluções de excelência para
            garantir o sucesso e a satisfação de nossos clientes.
          </p>
        </div>

        <div className="responsive-grid-3col gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                width={120}
                height={120}
                className="object-cover w-28 h-28 rounded-full shadow-lg"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="my-2">
                <p className="mb-2 text-black font-semibold">{member.name}</p>
                <p className="mb-2"> {member.role}</p>
                <p className="mb-2 text-base text-center md:text-justify">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
