import React from "react";
import Image from "next/image";

interface IBlogCard {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
  link: string;
}
const BlogCard: React.FC<IBlogCard> = ({
  image,
  category,
  date,
  title,
  description,
  authorName,
  authorAvatar,
  link,
}) => {
  return (
    <article className="p-6  rounded-lg border border-gray-200 shadow-md bg-zinc-800 ">
      <Image
        className="rounded-lg mb-4 object-cover"
        src={image}
        alt={title}
        height={300}
        width={500}
      />
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800">
          <svg
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
          </svg>
          {category}
        </span>
        <span className="text-sm">{date}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href={link}>{title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            className=" rounded-full"
            src={authorAvatar}
            alt={authorName}
            width={28}
            height={28}
          />
          <span className="font-medium dark:text-white">{authorName}</span>
        </div>
        <a
          href={link}
          className="inline-flex items-center font-medium text-green-600 dark:text-green-500 hover:underline"
        >
          Leer más
          <svg
            className="ml-2 w-4 h-4"
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
    </article>
  );
};

export default BlogCard;
