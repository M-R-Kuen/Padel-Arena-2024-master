// useAuth.ts
"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import {
  IUserGoogle,
  IUserLoginReq,
  IUserLoginRes,
} from "@/interfaces/RequestInterfaces";
import { AuthContext } from "@/context/GlobalContext";
import { postNextAuthSession } from "@/Server/User/postNextAuthSession";
import {
  IUpdateUser,
  updateUserProfile,
} from "@/Server/User/updateUserProfile";
import HandlerLogIn from "@/Server/HandlerFormsFuctions/HandlerLogIn";
import { useUserCookies } from "@/hooks/useUserCookies";
import useTournamentData from "./fetchTournamentData";
import { AxiosError } from "axios";

const useAuth = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const { categories } = useTournamentData();
  const { setCurrentUser, setUserIdGoogle, userIdGoogle, setToken, token } =
    useContext(AuthContext);
  const { saveGoogleUser, saveRegularUser, saveUserToken } = useUserCookies();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<IUpdateUser>({
    phone: "",
    country: "",
    city: "",
    address: "",
    category: "",
  });

  useEffect(() => {
    if (session) {
      handlePostSession();
    }
  }, [session]);

  const handlePostSession = async () => {
    const userGoogleData = session?.user as IUserGoogle;
    if (!userGoogleData) {
      Swal.fire({
        title: "No eres un usuario registrado. Por favor completa el registro.",
        width: 400,
        padding: "3em",
      });
      console.error("userGoogleData no existe");
      return;
    }

    try {
      const response = await postNextAuthSession(userGoogleData);

      const newUser =
        response.newGoogleUser || response.googleUserWithoutPassword;

      if (
        response &&
        response.message &&
        typeof response.message === "string" &&
        response.message.includes("realizado con exito")
      ) {
        if (newUser.profileImg && !isValidUrl(newUser.profileImg)) {
          newUser.profileImg = "/images/default-image.jpg";
        }
        saveUserToken(response.token);
        setToken(response.token);

        setUserIdGoogle(newUser.id);

        const { city, country, address, phone, category } = newUser;

        if (!city && !country && !address && !phone && !category) {
          setIsModalOpen(true);
        } else {
          saveGoogleUser(newUser);
          setCurrentUser(newUser);
          router.push("/dashboard/user/profile");
        }
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error al autenticar con Google.",
        text: `Prueba iniciar sesión desde el formulario.`,
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      console.error(error);
    }
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  // const handleUpdateProfile = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   try {
  //     const userId = userIdGoogle;

  //     if (userId) {
  //       if (!formData.category) {
  //         Swal.fire({
  //           title: "Por favor selecciona una categoría válida.",
  //           width: 400,
  //           padding: "3em",
  //         });
  //         return;
  //       }

  //       const updatedUser = await updateUserProfile(userId, formData);

  //       if (updatedUser) {
  //         saveGoogleUser(updatedUser);
  //         setCurrentUser(updatedUser);
  //         handleCloseModal();
  //         Swal.fire({
  //           title: "Tu perfil se actualizó correctamente.",
  //           width: 400,
  //           padding: "3em",
  //         });
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error al actualizar el perfil:", error);
  //   }
  // };

  const handleUpdateProfile = async (values: IUpdateUser) => {
    try {
      const userId = userIdGoogle;
      const tokenUser = token;

      if (userId) {
        if (!values.category) {
          Swal.fire({
            title: "Por favor selecciona una categoría válida.",
            width: 400,
            padding: "3em",
          });
          return;
        }

        const updatedUser = await updateUserProfile(userId, values, tokenUser);

        if (updatedUser) {
          saveGoogleUser(updatedUser);
          setCurrentUser(updatedUser);
          handleCloseModal();
          Swal.fire({
            title: "Tu perfil se actualizó correctamente.",
            width: 400,
            padding: "3em",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (name === "category") {
      const selectedCategory = categories.find(
        (category) => category.name === value
      );

      setFormData({
        ...formData,
        category: selectedCategory?.id || "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const logIn = async (data: IUserLoginReq) => {
    try {
      const response: IUserLoginRes = await HandlerLogIn(data);

      if (response?.token) {
        const responseUser = { ...response.userClean, token: response.token };

        saveRegularUser(responseUser);
        setCurrentUser(responseUser);
        saveUserToken(response.token);
        setToken(response.token);
        Swal.fire({
          title: "Has iniciado sesión con éxito.",
          width: 400,
          padding: "3em",
        });
        router.push("/dashboard/user/profile");
      }
    } catch (error) {
      Swal.fire({
        title: "Error al iniciar sesión.",
        width: 400,
        padding: "3em",
      });
      router.push("/register");
      console.error(error);
    }
  };

  return {
    isModalOpen,
    formData,
    handleCloseModal,
    handleUpdateProfile,
    handleInputChange,
    logIn,
  };
};

export default useAuth;
