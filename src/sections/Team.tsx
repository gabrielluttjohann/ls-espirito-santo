import Image from "next/image";
import { contactInfo, teamMembers } from "@/data";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

const Team = () => {
  return (
    <div
      id="team"
      className="scroll-mt-28 px-6 py-16 mx-auto max-w-7xl lg:py-20 flex flex-col items-center justify-center"
    >
      <div className="text-center flex flex-col justify-center items-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Conheça nossa equipe
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-4xl text-center">
          Nossa equipe é formada por profissionais altamente qualificados,
          comprometidos com a excelência e o sucesso dos nossos clientes.
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
              <p className="text-sm text-gray-700 font-medium">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600 px-4">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <CustomButton
        link
        href={contactInfo.whatsappLink}
        label="Fale com um advogado"
        customStyle="mt-12"
      />
    </div>
  );
};

export default Team;
