"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { contactInfo, logo, navItems } from "@/data";
import CustomButton from "@/components/CustomButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Função para fechar o menu ao clicar em um item
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Fechar o menu automaticamente se a tela for redimensionada para um tamanho maior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false); // Fechar o menu em telas grandes
      }
    };

    // Escutar o evento de redimensionamento
    window.addEventListener("resize", handleResize);

    // Limpar o evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="px-4 py-5 mx-auto container lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center transform transition duration-300 hover:scale-110"
          >
            <Image
              src={logo.black.src}
              width={500}
              height={80}
              className="w-full h-20"
              alt="Logo"
            />
          </Link>

          {/* Botão Hamburger para dispositivos móveis */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-golden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-golden"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CustomButton
                link
                label="Fale conosco"
                href={contactInfo.whatsappLink}
              />
            </li>
          </ul>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden text-center absolute top-28 left-0 right-0 bg-white shadow-md py-4 px-6">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    title={item.label}
                    className="font-medium text-gray-700 hover:text-golden block"
                    onClick={closeMobileMenu} // Fecha o menu ao clicar no link
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
