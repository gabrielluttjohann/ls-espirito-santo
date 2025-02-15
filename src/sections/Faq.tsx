"use client";
import Link from "next/link";
import { useState } from "react";
import { contactInfo, faqItems } from "@/data";

interface ItemProps {
  question: string;
  children: React.ReactNode;
}

const Item = ({ question: title, children }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label={isOpen ? "Close item" : "Open item"}
        title={isOpen ? "Close item" : "Open item"}
        className="responsive-flex-between items-start text-left w-full py-4 px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="responsive-h4">{title}</h4>
        <div className="responsive-flex-center items-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="">
          <p className="px-4 py-4">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <section id="faq" className="section-spacing bg-gray-100 scroll-my-28">
      <div className="responsive-container">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 ">
          <div className="lg:max-w-xl">
            <h2 className="text-center md:text-left responsive-h2 responsive-mb  ">
              Perguntas frequentes sobre nossos serviços jurídicos
            </h2>
            <p className="responsive-mb text-center md:text-left">
              Aqui você encontra respostas para as principais dúvidas sobre
              nossos serviços jurídicos e como podemos ajudá-lo.
            </p>
            <div className="responsive-flex-center md:items-start md:justify-start">
              <Link
                href={contactInfo.whatsappLink}
                className="btn gradient-bg text-white"
              >
                Fale com um Advogado
              </Link>
            </div>
          </div>
          <div className="">
            {faqItems.map((item, index) => (
              <Item key={index} question={item.question}>
                {item.answer}
              </Item>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
