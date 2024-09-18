import moment from "moment";
import "moment/locale/es"; // Importa el locale en español

// Configura Moment.js para usar el locale en español
moment.locale("es");

// Formatea la fecha en español
export const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "Fecha no disponible";
  try {
    return moment(dateString).format("DD MMMM YYYY");
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Fecha no disponible";
  }
};

// Formatea la hora en español
export const formatTime = (timeString: string | undefined) => {
  if (!timeString) return "Hora no disponible";
  try {
    return moment(timeString, "HH:mm:ss").format("HH:mm");
  } catch (error) {
    console.error("Error formatting time:", error);
    return "Hora no disponible";
  }
};
