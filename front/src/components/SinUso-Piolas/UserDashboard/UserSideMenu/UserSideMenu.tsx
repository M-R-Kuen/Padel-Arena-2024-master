"use client";
import React from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  icon: string;
  section: string;
}

interface SideMenuProps {
  userImage: string;
  userName: string;
  userDescription: string;
  navItems: NavItem[];
  onSectionChange: (section: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  userImage,
  userName,
  userDescription,
  navItems,
  onSectionChange,
}) => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center p-4">
        <Image
          className="rounded-full"
          src={userImage}
          alt="User"
          width={64}
          height={64}
        />
        <div className="ml-4">
          <h5 className="text-lg">{userName}</h5>
          <p className="text-sm">{userDescription}</p>
        </div>
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search here"
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
      <nav className="p-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.section} className="mb-4">
              <a
                href="#"
                onClick={() => onSectionChange(item.section)}
                className="flex items-center text-gray-400 hover:text-white"
              >
                <i className={`${item.icon} mr-2`}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
