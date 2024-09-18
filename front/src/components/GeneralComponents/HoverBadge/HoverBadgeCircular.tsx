// HoverBadge.tsx
import React from "react";

interface HoverBadgeProps {
  status: "abiertas" | "cerradas";
}

const HoverBadge: React.FC<HoverBadgeProps> = ({ status }) => {
  const isOpen = status === "abiertas";

  return (
    <div className="relative inline-block">
      {/* Círculo indicador */}
      <div
        className={`w-6 h-6 rounded-full ${
          isOpen ? "bg-lime" : "bg-red-500"
        } flex items-center justify-center text-white text-xs font-bold group relative`}
      >
        {/* Tooltip */}
        <div
          className={`absolute -right-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs rounded bg-black text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          {isOpen ? "Puedes inscribirte ahora." : "Inscripción no disponible."}
        </div>
      </div>
    </div>
  );
};

export default HoverBadge;
