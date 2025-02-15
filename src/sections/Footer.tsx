import { contactInfo, logo } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  const contactDetails = [
    {
      label: "Telefone",
      value: contactInfo.contactNumber,
      href: contactInfo.whatsappLink,
    },
    {
      label: "Email",
      value: contactInfo.email,
      href: "mailto:lorem@lorem.mail",
    },
    {
      label: "Endereço",
      value: contactInfo.address,
      href: contactInfo.mapAddress,
    },
  ];

  return (
    <footer className=" bg-gradient-to-r from-wine via-wine to-wineLight">
      <div className="px-4 pt-16 mx-auto container md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 ">
            <Link
              href={logo.href}
              className="text-white font-bold inline-flex items-center transform transition duration-300 hover:scale-110 "
            >
              <Image
                src={logo.white.src}
                width={100}
                height={80}
                className="w-full h-20"
                alt="Logo"
              />
            </Link>
            <div className="mt-6 lg:max-w-sm text-white text-sm">
              <p>
                Confiança, excelência e comprometimento em cada passo jurídico.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-white">
            <p className="text-base font-bold">Contato</p>
            {contactDetails.map((item, index) => (
              <p key={index}>
                {item.label}:{" "}
                <Link
                  href={item.href}
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {item.value}
                </Link>
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row text-white">
          <p className="text-sm font-bold">
            © Copyright {year} LS Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
