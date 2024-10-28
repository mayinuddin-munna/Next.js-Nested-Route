import React, { useState } from "react";
import logo from "./../../../../assets/logo/logo.png";
import Image from "next/image";
import Drawer from "./Drawer";

type Category = {
  name: string;
  navItems: { name: string; items: string[] }[];
  images: string[];
};

interface SidebarProps {
  isSidebarOpen: boolean;
  categories: Category[];
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, categories, isDrawerOpen, toggleDrawer }) => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <div
      className={`block md:hidden fixed z-50 h-screen bg-black bg-opacity-95 backdrop-blur-xl inset-y-0 left-0 w-3/4 py-4 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-700 ease-in-out overflow-y-auto no-scrollbar`}
    >
      <div>
        <figure className="px-8">
          <Image src={logo} alt="logo" className="w-24 lg:w-28" />
        </figure>
        <div className="flex flex-col space-y-4 items-start mt-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-gray-200 hover:text-white cursor-pointer transition duration-300"
              onClick={() => {
                setActiveCategory(category);
                toggleDrawer();
              }}
            >
              <p className="px-8">{category.name}</p>
              <div className="border-b border-gray-400"></div>
            </div>
          ))}
        </div>
      </div>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        category={activeCategory}
      />
    </div>
  );
};

export default Sidebar;
