import React from "react";

interface HoverBadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primaryText?: string; // Texto principal del botón
  secondaryText?: string; // Texto del tooltip
}

const HoverButton: React.FC<HoverBadgeProps> = ({
  primaryText,
  secondaryText,
  children, // Contenido adicional como SVG u otros elementos
  className = "bg-transparent",
  onClick,
  ...rest
}) => {
  return (
    <div className="relative group">
      {/* Botón con estilo y efectos */}
      <button
        data-ripple-light="true"
        className={`select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${className}`}
        onClick={onClick}
        {...rest}
      >
        {children} {/* Renderiza el contenido pasado como hijos, como el SVG */}
        {primaryText && <span className="ml-2">{primaryText}</span>}{" "}
        {/* Muestra el primaryText al lado del contenido de los hijos */}
      </button>

      {/* Tooltip que aparece al hacer hover sobre el botón */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
        {secondaryText}
      </div>
    </div>
  );
};

export default HoverButton;
