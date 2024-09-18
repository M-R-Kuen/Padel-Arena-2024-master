"use client";

import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import React, { useState } from "react";

interface ISearchBarDropProps {
  onSearch: (category: string) => void;
  categorias: string[];
  onClear: () => void;
}

const SearchBarDrop: React.FC<ISearchBarDropProps> = ({
  onSearch,
  categorias,
  onClear,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);

    if (newCategory) {
      setSearchTerm(newCategory);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setSelectedCategory(undefined); // Reset the selected category when typing manually
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSelectedCategory(undefined);
    onClear();
  };

  const handleSearch = () => {
    const categoryToSearch = searchTerm || categorias[0] || "";
    const lowerCaseCategoryToSearch = categoryToSearch.toLowerCase();
    const lowerCaseCategorias = categorias.map((category) =>
      category.toLowerCase()
    );

    if (!lowerCaseCategorias.includes(lowerCaseCategoryToSearch)) {
      setIsModalOpen(true);
      return;
    }

    onSearch(categoryToSearch);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="flex w-full mb-4">
        <div className="flex bg-white border-none rounded-xl">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Buscar..."
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>

          <ActionButton
            onClick={handleClearSearch}
            className="px-4 py-2 text-black rounded-full hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
              viewBox="0 0 384 512"
            >
              <path
                fill="#000000"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </ActionButton>

          <div>
            <select
              value={selectedCategory || ""}
              onChange={handleCategoryChange}
              className="px-4 py-4 bg-white border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sfBold"
            >
              <option value="" disabled>
                Categorías
              </option>
              {categorias.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="px-6 py-2 text-black rounded-lg bg-lime sfBold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Buscar
      </button>
      {/* Modal para mostrar alerta */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        backgroundColor="bg-red-500" // Color de fondo del modal
        textColor="text-white" // Color del texto del modal
      >
        <p>Por favor, ingresa una categoría válida.</p>
        <button
          className="mt-4 px-4 py-2 bg-white text-red-500 rounded-lg"
          onClick={() => setIsModalOpen(false)}
        >
          Cerrar
        </button>
      </ReusableModal>
    </div>
  );
};

export default SearchBarDrop;
