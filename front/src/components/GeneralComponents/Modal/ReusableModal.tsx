import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  blurBackground?: boolean; // Controlar el desenfoque del fondo
  backgroundColor?: string; // Color de fondo del modal
  textColor?: string; // Color del texto del modal
  className?: string;
  bgImageUrl?: string; // URL de la imagen de fondo opcional
}

const ReusableModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  blurBackground = false,
  backgroundColor = "bg-white",
  textColor = "text-black",
  className = "",
  bgImageUrl, // Imagen de fondo opcional
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center  justify-center  ${
        blurBackground ? "backdrop-blur-md" : ""
      }`}
      onClick={onClose}
    >
      <div
        className={`${backgroundColor} ${textColor} p-8 rounded-lg max-w-screen-lg w-full max-h-[75vh] h-auto relative overflow-hidden ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen de fondo opcional con animación */}
        {bgImageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm grayscale opacity-80"
            style={{
              backgroundImage: `url(${bgImageUrl})`,
            }}
          >
            {/* Capa de superposición para el efecto de gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>
          </div>
        )}
        <button
          className="absolute top-4 right-4 z-10 text-white"
          onClick={onClose}
        >
          X
        </button>
        <div className="relative z-10 overflow-y-auto max-h-[65vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ReusableModal;
