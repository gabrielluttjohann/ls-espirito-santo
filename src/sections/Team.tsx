import Image from "next/image";
import { teamMembers } from "@/data";


const Team = () => {
  return (
    <div
      id="team"
      className="scroll-mt-28 responsive-container py-16  lg:py-20 flex flex-col "
    >
      <div className="flex flex-col lg:flex-row justify-between items-center mb-14">
        <h2 className="my-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Conheça Nossa Equipe de Especialistas
        </h2>
        <p className=" text-gray-600 max-w-4xl text-justify ">
          Formada por profissionais altamente qualificados e dedicados, nossa
          equipe está comprometida em oferecer soluções de excelência para
          garantir o sucesso e a satisfação de nossos clientes.
        </p>
      </div>

      <div className="grid gap-10 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              width={120}
              height={120}
              className="object-cover w-28 h-28 rounded-full shadow-lg"
              src={member.imageUrl}
              alt={member.name}
            />
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-900">
                {member.name}
              </p>
              <p className="text-sm text-gray-700 font-medium ">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-gray-600 px-4 text-justify">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
