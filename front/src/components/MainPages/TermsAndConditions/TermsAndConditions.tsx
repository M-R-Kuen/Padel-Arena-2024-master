import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <div className="mt-20 justify-start items-center flex-col flex">
        <h1 className="radhiumz text-3xl mx-4 md:mx-0 md:text-4xl text-center uppercase text-white">
          Términos y condiciones
          <hr className="h-2 w-full text-white"></hr>
        </h1>
        <h2 className="sfRegular text-md md:text-xl text-white mt-8">
          Conocé la letra chica detrás de la web:
        </h2>
      </div>
      <div className="max-w-4xl p-8 shadow-md  bg-white py-2 md:py-6 my-14 w-[90%] mx-auto rounded-3xl">
        <div className="overflow-auto w-full h-96 bg-white m-2">
          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Alcance
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Estos Términos y Condiciones regulan el acceso y uso de nuestra
              página web de gestión de torneos de pádel por eliminatorias. Al
              utilizar el sitio, aceptas cumplir con los términos aquí
              establecidos.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Usuarios, Obligaciones y Responsabilidad
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Como usuario, debes proporcionar información veraz y utilizar el
              sitio de manera responsable. El incumplimiento de estas
              obligaciones puede resultar en la suspensión o cancelación de tu
              cuenta.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Actividades Prohibidas
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Está prohibido el uso del sitio para cualquier actividad ilegal,
              incluyendo pero no limitado a la distribución de contenido
              inapropiado o la violación de derechos de terceros.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Propiedad Intelectual
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Todos los derechos de propiedad intelectual sobre el contenido del
              sitio, incluyendo textos, imágenes, y software, son de nuestra
              propiedad o de nuestros licenciantes. No se permite la
              reproducción sin autorización previa.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Modificación de los Términos y Condiciones
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Nos reservamos el derecho de modificar estos Términos y
              Condiciones en cualquier momento. Las modificaciones entrarán en
              vigor una vez publicadas en el sitio.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Enlaces con Otros Sitios, Productos y Servicios
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              El sitio puede contener enlaces a otros sitios web o servicios. No
              somos responsables del contenido o prácticas de estos sitios
              externos.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Política de Privacidad
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              La protección de tus datos personales es importante para nosotros.
              Consulta nuestra Política de Privacidad para más detalles sobre
              cómo recopilamos, usamos y protegemos tu información.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Seguridad
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Implementamos medidas de seguridad para proteger tus datos. Sin
              embargo, no podemos garantizar la seguridad absoluta de la
              información transmitida a través de internet.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Uso General del Sitio
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Puedes navegar en nuestro sitio sin necesidad de registro. Sin
              embargo, para acceder a ciertas funcionalidades, es posible que
              debas crear una cuenta.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Datos de Registro y Ubicación
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Recopilamos datos de registro y ubicación para mejorar tu
              experiencia en el sitio. Consulta nuestra Política de Privacidad
              para más detalles.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Cookies e Identificadores Anónimos
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Utilizamos cookies para personalizar el contenido y los anuncios,
              proporcionar funciones de redes sociales y analizar el tráfico.
              Puedes ajustar la configuración de cookies en tu navegador.
            </p>
          </section>

          <section className="mb-6">
            <h2
              className="text-2xl font-thin mb-4 underline"
              style={{ fontFamily: "Radhiumz" }}>
              Modificaciones y Responsabilidad
            </h2>
            <p style={{ fontFamily: "sfRegular" }}>
              Nos reservamos el derecho de modificar o descontinuar cualquier
              servicio ofrecido en el sitio en cualquier momento. No seremos
              responsables por cualquier daño resultante de estas
              modificaciones.
            </p>
          </section>
        </div>
        <div className="flex justify-center my-6">
          <NavigateButton
            href="/"
            className="bg-lime text-black sfBold px-4 rounded-lg hover:bg-customBlue hover:text-white py-2 Radhiumz">
            Entendido
          </NavigateButton>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
