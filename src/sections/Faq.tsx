"use client";
import Link from "next/link";
import { useState } from "react";
import { faqItems } from "@/data";
import CustomButton from "@/components/CustomButton";

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
        className="flex items-start justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-start justify-center w-8 h-8 border rounded-full">
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
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div id="faq" className="scroll-my-28 py-16 lg:py-20 responsive-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Perguntas frequentes sobre nossos serviços jurídicos
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Aqui você encontra respostas para as principais dúvidas sobre nossos serviços jurídicos e como podemos ajudá-lo.
          </p>
          <Link href="" className="bg-gradient-to-r from-wine to-wineLight px-7 py-4 rounded-full font-bold text-white inline-block my-4">Fale com um Advogado</Link>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Item key={index} question={item.question}>
              {item.answer}
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
