import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import Image from "next/image";

const BlogSection: React.FC = () => {
  return (
    <div>
      <section className="bg-white mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight uppercase radhiumz text-black">
              Padel-Arena Blog
            </h2>
            <p className="font-light text-black sm:text-xl">
              Últimas noticias y consejos sobre el mundo del pádel
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <BlogCard
              image="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2024/3/6/iz397adpekntfkcjquxq/bea-gonzalez-action-portrait"
              category="Torneo"
              date="Hace 2 días"
              title="Campeonato de Pádel 2024: Todo lo que debes saber"
              description="Descubre todos los detalles sobre el próximo campeonato de pádel, incluyendo fechas, inscripciones y los favoritos para ganar."
              authorName="Agustin Repetto"
              authorAvatar="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              link="#"
            />
            <BlogCard
              image="https://www.2playbook.com/uploads/s1/82/19/world-padel-tour.jpeg"
              category="Consejos"
              date="Hace 5 días"
              title="Mejora tu juego: Consejos para jugadores de pádel"
              description="Aprende algunos trucos y consejos de los profesionales para llevar tu juego de pádel al siguiente nivel."
              authorName="Pilar Carranza"
              authorAvatar="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              link="#"
            />
            <BlogCard
              image="https://resizer.glanacion.com/resizer/v2/en-las-canchas-que-utilizan-los-profesionales-la-THZC252CYFH4NGKLIVTQAHKYFE.JPG?auth=eb498937c70eea50765e941bd67f887c5f3d9dc9ae33dfaa77f2d8e66f70b228&width=880&height=586&quality=70&smart=true"
              category="Torneo"
              date="Hace 2 días"
              title="Campeonato de Pádel 2024: Todo lo que debes saber"
              description="Descubre todos los detalles sobre el próximo campeonato de pádel, incluyendo fechas, inscripciones y los favoritos para ganar."
              authorName="Rosario Kuen"
              authorAvatar="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              link="#"
            />
            {/* Puedes agregar más <BlogCard /> aquí */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
