"use client";
import React from "react";
import { useState } from "react";

interface ISearchBarProps {
  onSearch?: (searchTerm: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex items-center w-full gap-2 border-2 border-black">
      <input
        type="text"
        className="w-full p-2 text-black border border-gray-300 rounded-md sfRegular"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="p-2 text-black bg-blue-500 rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
