"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MatchStatsChart = ({ won, loss }: { won: number; loss: number }) => {
  const data = {
    labels: ["Partidos Ganados", "Partidos Perdidos"],
    datasets: [
      {
        label: "Partidos",
        data: [won, loss],
        backgroundColor: ["blue", "lime"], // Azul para ganados, verde para perdidos
        hoverBackgroundColor: ["#45a049", "#e35d5b"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white", // Cambia el color de las etiquetas de la leyenda aquí
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-black/25 rounded-lg shadow-md">
      <h3 className="text-xl radhiumz mb-4 text-white text-center">
        Estadísticas de Partidos
      </h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default MatchStatsChart;
