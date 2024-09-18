import React from "react";
import Image from "next/image";
interface IBlogArticle {
  category: string;
  date: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
  link: string;
}

const BlogArticle: React.FC<IBlogArticle> = ({
  category,
  date,
  title,
  description,
  authorName,
  authorAvatar,
  link,
}) => {
  return (
    <div className="border-b border-gray-700 pb-6 mb-6 ">
      <div className="flex justify-between items-center text-black mb-2">
        <span className="bg-blue-900 text-blue-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          <svg
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clipRule="evenodd"
            ></path>
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
          </svg>
          {category}
        </span>
        <span className="text-sm">{date}</span>
      </div>
      <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
      <p className="text-black mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            className="rounded-full"
            width={30}
            height={30}
            src={authorAvatar}
            alt={authorName}
          />
          <span className="ml-3 text-black">{authorName}</span>
        </div>
        <a
          href={link}
          className="text-blue-400 hover:underline inline-flex items-center"
        >
          Leer más
          <svg
            className="ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogArticle;
