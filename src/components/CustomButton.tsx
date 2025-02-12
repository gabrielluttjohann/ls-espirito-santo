import Link from "next/link";
import React from "react";

type CustomButtonProps = {
  label: string;
  title?: string;
  ariaLabel?: string;
  secondary?: boolean;
  button?: boolean;
  link?: boolean;
  href?: string;
  customStyle?: string;
};

const CustomButton = ({
  title,
  secondary,
  ariaLabel,
  button,
  label,
  link,
  href = "#",
  customStyle = "",
}: CustomButtonProps) => {
  const primaryStyle = "bg-blue hover:bg-lightBlue";
  const secondaryStyle = "bg-golden hover:bg-lightGolden";

  const baseStyle = secondary ? secondaryStyle : primaryStyle;
  const className = `${baseStyle} text-white inline-flex items-center justify-center h-12 px-6  text-white font-medium tracking-wide rounded shadow-md transition duration-200 focus:shadow-outline focus:outline-none ${customStyle} `;

  if (!button && !link) {
    console.warn("CustomButton requires either the 'button' or 'link' prop.");
  }

  if (button) {
    return (
      <button
        className={className}
        aria-label={ariaLabel || title}
        title={title}
      >
        {title}
      </button>
    );
  }

  if (link) {
    const isExternalLink = href.startsWith("http");

    return (
      <Link
        href={href}
        className={className}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        target={isExternalLink ? "_blank" : undefined}
        aria-label={ariaLabel || label}
        title={title}
      >
        {label}
      </Link>
    );
  }

  return null;
};

export default CustomButton;
