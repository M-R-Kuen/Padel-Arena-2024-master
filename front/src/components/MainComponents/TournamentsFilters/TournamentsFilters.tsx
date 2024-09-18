import { ICategories } from "@/interfaces/ComponentsInterfaces/TournamentCategorias";
import React, { useState } from "react";

export interface TournamentFiltersProps {
  categories: ICategories[];
  onApplyFilters: (filters: Filters) => void;
  onResetFilters: () => void;
}

export interface Filters {
  category: string;
  month: string;
  inscription: string;
}

const TournamentFilters: React.FC<TournamentFiltersProps> = ({
  categories = [],
  onApplyFilters,
  onResetFilters,
}) => {
  const [filters, setFilters] = useState<Filters>({
    category: "",
    month: "",
    inscription: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFilters({
      ...filters,
      [id]: value,
    });
  };

  const handleResetFilters = () => {
    setFilters({
      category: "",
      month: "",
      inscription: "",
    });
    onResetFilters();
  };

  return (
    <div className="m-4 max-w-screen-md mx-auto">
      <div className="rounded-xl border border-gray-300 bg-glass p-6 shadow-md shadow-lime">
        <h2 className="text-lime text-xl radhiumz uppercase">
          Filtrar Torneos
        </h2>
        <div className="my-2 h-1 w-full bg-lime"></div>
        <p className="mt-1 text-lg text-white sfRegular">
          Utiliza los filtros para refinar la búsqueda a tu gusto
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <label htmlFor="category" className="text-white text-lg sfBold">
              Categoría
            </label>
            <select
              id="category"
              value={filters.category}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              disabled={categories.length === 0} // Deshabilita si no hay categorías
            >
              <option value="">Selecciona una categoría</option>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))
              ) : (
                <option disabled>No hay categorías disponibles</option>
              )}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="month" className="text-white text-lg sfBold">
              Mes
            </label>
            <select
              id="month"
              value={filters.month}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="">Selecciona un mes</option>
              <option value="01">Enero</option>
              <option value="02">Febrero</option>
              <option value="03">Marzo</option>
              <option value="04">Abril</option>
              <option value="05">Mayo</option>
              <option value="06">Junio</option>
              <option value="07">Julio</option>
              <option value="08">Agosto</option>
              <option value="09">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="inscription" className="text-white sfBold text-lg">
              Estado de Inscripción
            </label>
            <select
              id="inscription"
              value={filters.inscription}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="">Selecciona un estado</option>
              <option value="abiertas">Abiertas</option>
              <option value="cerradas">Cerradas</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleResetFilters}
            className="rounded-lg bg-gray-200 px-6 py-2 font-medium text-black shadow-sm hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-lime"
          >
            Resetear
          </button>
          <button
            onClick={() => onApplyFilters(filters)}
            className="rounded-lg bg-lime px-6 py-2 font-medium text-black shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentFilters;
