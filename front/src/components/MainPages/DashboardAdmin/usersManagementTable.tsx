"use client";
import React, { useContext, useEffect, useState } from "react";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { getAllUsers, updateUserCategory } from "@/Server/Users/getUsers";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { getCategories } from "@/Server/Category/getCategories";
import Swal from "sweetalert2";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import StadisticsView from "../DashboardUser/StadisticsSection/StadisticsView";
import { AuthContext } from "@/context/GlobalContext";

interface UserProp {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  category: Category | undefined;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

const UsersManagement: React.FC = () => {
  const [users, setUsers] = useState<UserProp[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<{
    [key: string]: string;
  }>({});
  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState<string>(""); // Estado para la categoría seleccionada
  const [searchQuery, setSearchQuery] = useState<string>(""); // Nuevo estado para el texto de búsqueda
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blurBackground, setBlurBackground] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const { token } = useContext(AuthContext);

  const openModal = (userId: string) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchUsers = async () => {
      if (!token) return;
      try {
        const response = await getAllUsers(token);
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchCategories();
    fetchUsers();
  }, [token]);

  const handleCategoryChange = (userId: string, newCategoryId: string) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [userId]: newCategoryId,
    }));
  };

  const handleSaveCategory = async (userId: string) => {
    const newCategoryId = selectedCategories[userId];
    if (!newCategoryId) return;

    try {
      if (!token) return;
      await updateUserCategory(userId, newCategoryId, token);

      const updatedUsers = await getAllUsers(token);
      setUsers(updatedUsers);

      Swal.fire({
        title: "Categoría actualizada con éxito.",
        width: 400,
        padding: "3em",
      });
    } catch (error) {
      console.error("Error al actualizar la categoría:", error);
      Swal.fire({
        title: "Error al actualizar categoría.",
        text: "Comprueba que la categoría que seleccionaste es diferente a la que ya tiene asignada el usuario.",
        width: 400,
        padding: "3em",
      });
    }
  };

  const handleFilterChange = (categoryId: string) => {
    setSelectedFilterCategory(categoryId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const filteredUsers = users?.filter((user) => {
    const matchesCategory = selectedFilterCategory
      ? user.category?.id === selectedFilterCategory
      : true;
    const matchesSearchQuery = `${user.name} ${user.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl text-[#f8fafc] uppercase radhiumz">
          Tabla de Usuarios
        </h1>
        <h2 className="text-lg md:text-xl text-[#f8fafc] sfRegular">
          Seguimiento de todos los usuarios registrados.
        </h2>

        <div className="flex flex-col w-full max-w-2xl px-4 py-6 mt-10 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass space-y-4">
          <div className="w-full relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Buscar por nombre"
              className="w-full px-2 py-2 bg-white border-2 border-slate rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 sfRegular"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-2 text-gray-500 hover:text-gray-700 bg-lime rounded-xl px-1"
              >
                &#10005;
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full">
            <label
              htmlFor="category-filter"
              className="w-full sm:w-1/3 px-2 py-2 bg-lime rounded-t-lg sm:rounded-t-none sm:rounded-l-lg sfBold text-center"
            >
              Filtrar por Categoría:
            </label>
            <select
              id="category-filter"
              value={selectedFilterCategory}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="w-full sm:w-2/3 px-2 py-2 bg-white border-2 border-slate rounded-b-lg sm:rounded-b-none sm:rounded-r-lg focus:outline-none focus:ring-1 focus:ring-blue-500 sfBold text-center"
            >
              <option value="">Todas las categorías</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <CustomTable
        headers={[
          "NOMBRE",
          "EMAIL",
          "TELÉFONO",
          "DIRECCIÓN",
          "CATEGORÍA",
          "ACCIONES",
          "ESTADISTICAS",
        ]}
      >
        {filteredUsers?.length > 0 ? (
          filteredUsers.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <h5 className="font-medium text-black">{`${user.name} ${user.lastName}`}</h5>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <p className="text-gray-500">{user.email}</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <p className="text-gray-500">{user.phone}</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <p className="text-gray-500">{`${user.city}, ${user.country}.`}</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <select
                  value={selectedCategories[user.id] || user.category?.id || ""}
                  onChange={(e) =>
                    handleCategoryChange(user.id, e.target.value)
                  }
                  className="hover:text-primary text-black font-bold text-center p-1 rounded-lg bg-customBlue/10"
                >
                  <option value="" disabled>
                    Seleccione una categoría
                  </option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <ActionButton
                  onClick={() => handleSaveCategory(user.id)}
                  className="bg-lime text-black sfBold px-4 rounded-lg hover:text-white py-2 hover:bg-blue-600 radhiumz"
                >
                  <p className="radhiumz text-xs">GUARDAR</p>
                </ActionButton>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <ActionButton
                  onClick={() => openModal(user.id)}
                  className="bg-lime text-black sfBold px-4 rounded-lg hover:text-white py-2 hover:bg-blue-600 radhiumz"
                >
                  <p className="radhiumz text-xs">VER</p>
                </ActionButton>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={6}
              className="border-b border-[#eee] px-4 py-5 dark:border-strokedark text-center"
            >
              No se encontraron resultados para la búsqueda.
            </td>
          </tr>
        )}
      </CustomTable>
      {isModalOpen && (
        <ReusableModal
          isOpen={isModalOpen}
          onClose={closeModal}
          blurBackground
          backgroundColor="bg-blue-700/30"
          textColor="text-black"
          className="w-2/3"
        >
          {selectedUserId && token && (
            <StadisticsView userId={selectedUserId} token={token} />
          )}
        </ReusableModal>
      )}
    </>
  );
};

export default UsersManagement;
