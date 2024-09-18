"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Tick } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TournamentLineChart = ({
  gano,
  perdio,
}: {
  gano: number[];
  perdio: number[];
}) => {
  const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Torneos Ganados",
        data: gano,
        borderColor: "#00FF00", // Lime
        backgroundColor: "rgba(0, 255, 0, 0.2)", // Lime con transparencia
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#00FF00", // Lime
        pointBorderColor: "#00FF00", // Lime
        pointRadius: 8, // Tamaño de los puntos
        pointHoverRadius: 10, // Tamaño de los puntos al hacer hover
      },
      {
        label: "Torneos Perdidos",
        data: perdio,
        borderColor: "#0000FF", // Blue
        backgroundColor: "rgba(0, 0, 255, 0.2)", // Blue con transparencia
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#0000FF", // Blue
        pointBorderColor: "#0000FF", // Blue
        pointRadius: 8, // Tamaño de los puntos
        pointHoverRadius: 10, // Tamaño de los puntos al hacer hover
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "white",
          font: {
            size: 14,
            family: "sfRegular",
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Estadísticas de Torneos Ganados y Perdidos",
        color: "white",
        font: {
          size: 20,
          family: "radhiumz",
          weight: "bold" as const,
        },
        padding: {
          top: 20,
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          family: "sfRegular",
          size: 16,
          weight: "bold" as const,
        },
        bodyFont: {
          size: 14,
        },
        padding: 10,
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          font: {
            size: 12,
            family: "sfRegular",
          },
        },
      },
      y: {
        grid: {
          borderDash: [8, 8],
          color: "#D1D5DB",
        },
        min: 0, // Valor mínimo del eje y
        max: 10, // Valor máximo del eje y ajustado para reducir el espacio
        ticks: {
          color: "white",
          font: {
            size: 12,
            family: "sfRegular",
          },
          padding: 12,
          stepSize: 1,
          callback: (
            tickValue: string | number,
            index: number,
            ticks: Tick[]
          ) => Math.floor(tickValue as number),
        },
      },
    },
  };

  return (
    <div className="w-full h-[500px] max-w-2xl mx-auto p-4 bg-black/30 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default TournamentLineChart;
