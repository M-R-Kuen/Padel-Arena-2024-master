"use client";
import React, { useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { AuthContext } from "@/context/GlobalContext";

interface Message {
  sender: string;
  content: string;
}

const ChatView: React.FC = () => {
  const { currentUser, token } = useContext(AuthContext);

  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  // Función para traer los últimos mensajes
  const fetchMessages = async () => {
    try {
      const host = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${host}/chat`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al traer los mensajes");
      }
      const data: Message[] = await response.json();
      setMessages(data); // Actualizar el estado con los mensajes obtenidos
    } catch (error) {
      console.error("Error al obtener los mensajes:", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Traer mensajes cuando el componente se monta
    const host = process.env.NEXT_PUBLIC_API_URL;

    if (currentUser?.id) {
      const newSocket: Socket = io(`${host}`, {
        query: { userid: currentUser.id }, // Enviar el userID en la query
      });

      setSocket(newSocket);

      const handleMessage = (data: { message: string; from: string }) => {
        const newMessage: Message = {
          content: data.message,
          sender: data.from,
        };

        setMessages((state) => [...state, newMessage]);
      };

      newSocket.on("message", handleMessage);

      return () => {
        newSocket.off("message", handleMessage); // Elimina el manejador del evento
        newSocket.disconnect();
        console.log("Socket desconectado");
      };
    }
  }, [currentUser]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (socket) {
      const newMessage: Message = {
        content: message,
        sender: "Yo", // El remitente debería ser una cadena de texto
      };
      socket.emit("message", newMessage.content); // Solo el contenido se envía al servidor
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Agregar el mensaje localmente
      setMessage(""); // Vacía el input después de enviar el mensaje
    }
  };

  return (
    <>
      <div className="mt-20 justify-start items-center flex-col flex">
        <h1 className="radhiumz text-3xl mx-4 md:mx-0 md:text-4xl text-center uppercase text-white">
          Bienvenido a nuestro chat
          <hr className="h-2 w-full text-white"></hr>
        </h1>
        <h2 className="sfRegular text-md md:text-xl text-white mt-8">
          ¡Escribe para participar!
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen z-10">
        <div className="flex h-[500px] max-w-screen-md w-full rounded-glass m-10 shadow-md p-4 bg-glass border-glass border-2">
          <div className="flex-1 flex flex-col text-white rounded-t-glass rounded-b-xl bg-black/30">
            <div className="p-4 rounded-t-glass bg-customBlue bg-blur text-white flex items-center">
              <img
                src="/avatarJugador.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-bold">CLUB PADEL ARENA</p>
                <p className="text-sm">Chat comunitario</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <ul className="space-y-2">
                {messages.map((msg, i) => (
                  <li key={i} className="p-2 bg-black/30 rounded">
                    <p>
                      {typeof msg.sender === "string" ? msg.sender : "Anónimo"}:{" "}
                      {typeof msg.content === "string"
                        ? msg.content
                        : "No se pudo encontrar el mensaje"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 border border-gray-600 rounded-l-xl bg-glass backdrop-filter backdrop-blur-lg bg-black/20 text-white"
                placeholder="Escribe tu mensaje..."
              />
              <button
                type="submit"
                className="p-2 bg-lime text-xs text-black rounded-r hover:bg-customBlue hover:text-slate radhiumz uppercase"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatView;
