"use client";
import React, { useState } from "react";
import SideMenu from "./UserSideMenu/UserSideMenu";
import DashboardContent from "./UserDashboardContent/UserDashboardContent";

const DashboardPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("dashboard");

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const navItems = [
    {
      label: "Dashboard",
      icon: "uil uil-estate",
      section: "dashboard",
      content: (
        <div className="bg-white p-6 mt-6 rounded shadow">
          <h2 className="text-2xl font-semibold">Welcome to your Dashboard</h2>
          <p className="mt-2">
            Hello John Doe, welcome to your awesome dashboard!
          </p>
        </div>
      ),
    },
    {
      label: "Estadísticas",
      icon: "uil uil-folder",
      section: "estadisticas",
      content: (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded shadow flex items-center">
            <i className="uil uil-envelope-shield text-3xl bg-primary p-3 rounded-full text-white mr-4"></i>
            <div>
              <h3 className="text-xl font-semibold">1,245</h3>
              <p className="text-gray-500">Torneos Ganados</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow flex items-center">
            <i className="uil uil-file text-3xl bg-danger p-3 rounded-full text-white mr-4"></i>
            <div>
              <h3 className="text-xl font-semibold">34</h3>
              <p className="text-gray-500">Torneos Perdidos</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow flex items-center">
            <i className="uil uil-users-alt text-3xl bg-success p-3 rounded-full text-white mr-4"></i>
            <div>
              <h3 className="text-xl font-semibold">5,245</h3>
              <p className="text-gray-500">Premios</p>
            </div>
          </div>
        </section>
      ),
    },
    {
      label: "Torneos",
      icon: "uil uil-calendar-alt",
      section: "torneos",
      content: (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Chart 1</h3>
            <canvas id="chart1"></canvas>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Chart 2</h3>
            <canvas id="chart2"></canvas>
          </div>
        </section>
      ),
    },
    {
      label: "Team",
      icon: "uil uil-envelope-download",
      section: "team",
      content: <div className="bg-white p-6 rounded shadow">Team Content</div>,
    },
    {
      label: "Ajustes",
      icon: "uil uil-setting",
      section: "ajustes",
      content: (
        <div className="bg-white p-6 rounded shadow">Ajustes Content</div>
      ),
    },
  ];

  return (
    <div className="flex">
      <SideMenu
        userImage="/images/foto-samu.webp"
        userName="John Doe"
        userDescription="Admin"
        navItems={navItems}
        onSectionChange={handleSectionChange}
      />
      <DashboardContent
        currentSection={currentSection}
        sections={navItems} // Pasar navItems como prop sections
      />
    </div>
  );
};

export default DashboardPage;
