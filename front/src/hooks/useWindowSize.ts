import { useState, useEffect } from "react";

// Hook personalizado para obtener el tamaño de la ventana
const useWindowSize = () => {
  // Estado para almacenar el tamaño de la ventana
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Función para manejar el redimensionamiento de la ventana
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Agregar el event listener para el redimensionamiento
    window.addEventListener("resize", handleResize);

    // Establecer tamaño de ventana al montar
    handleResize();

    // Limpieza al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Dependencia vacía para ejecutar solo al montar/desmontar

  return windowSize;
};

export default useWindowSize;
