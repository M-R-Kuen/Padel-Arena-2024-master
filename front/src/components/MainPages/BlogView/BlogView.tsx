import BlogArticle from "@/components/SinUso-Piolas/Blog/BlogArticles/BlogArticle";
import BlogSection from "@/components/SinUso-Piolas/Blog/BlogSection/BlogSection";
import SuscribeNews from "@/components/SinUso-Piolas/SuscribeNews/SuscribeNews";
import React from "react";

const BlogView: React.FC = () => {
  const articles = [
    {
      category: "Artículo",
      date: "Hace 2 semanas",
      title: "Estrategias avanzadas para mejorar tu juego en pádel",
      description:
        "Explora técnicas y consejos avanzados que te ayudarán a dominar la pista de pádel y a superar a tus rivales.",
      authorName: "Samuel Castrillon",
      authorAvatar: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      category: "Artículo",
      date: "Hace 1 mes",
      title: "Las reglas básicas del pádel que todo principiante debe conocer",
      description:
        "Conoce las reglas fundamentales del pádel, desde el servicio hasta el sistema de puntuación, para empezar a jugar como un profesional.",
      authorName: "Laura Gómez",
      authorAvatar: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      category: "Artículo",
      date: "Hace 1 mes",
      title: "Las reglas básicas del pádel que todo principiante debe conocer",
      description:
        "Conoce las reglas fundamentales del pádel, desde el servicio hasta el sistema de puntuación, para empezar a jugar como un profesional.",
      authorName: "Laura Gómez",
      authorAvatar: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      category: "Artículo",
      date: "Hace 1 mes",
      title: "Las reglas básicas del pádel que todo principiante debe conocer",
      description:
        "Conoce las reglas fundamentales del pádel, desde el servicio hasta el sistema de puntuación, para empezar a jugar como un profesional.",
      authorName: "Laura Gómez",
      authorAvatar: "https://via.placeholder.com/150",
      link: "#",
    },
    // Agrega más artículos aquí
  ];
  return (
    <div>
      <div>
        <BlogSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full bg-white mb-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className=" p-8 border border-gray-200 rounded-lg shadow-lg mb-10"
            >
              <BlogArticle
                category={article.category}
                date={article.date}
                title={article.title}
                description={article.description}
                authorName={article.authorName}
                authorAvatar={article.authorAvatar}
                link={article.link}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <SuscribeNews />
      </div>
    </div>
  );
};

export default BlogView;
