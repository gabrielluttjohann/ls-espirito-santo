import { contactInfo } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import whatsappLogo from "../../public/Digital_Glyph_Green.png"


const WhatsappButton = () => {
  return (
    <section className="fixed z-50 bottom-7 right-7">
      <Link href={contactInfo.whatsappLink}>
        <Image width={50} height={50} src={whatsappLogo}  alt="Botão do WhatsApp" />
      </Link>
    </section>
  );
};

export default WhatsappButton;
