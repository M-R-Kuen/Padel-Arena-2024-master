import React from "react";

interface Section {
  section: string;
  content: React.ReactNode;
}

interface DashboardContentProps {
  currentSection: string;
  sections: Section[]; // Añadir sections como prop
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  currentSection,
  sections,
}) => {
  // Encontrar la sección actual
  const current = sections.find((s) => s.section === currentSection);

  return (
    <main className="flex-1 bg-gray-100 p-8">
      {current?.content} {/* Renderizar el contenido de la sección actual */}
    </main>
  );
};

export default DashboardContent;
