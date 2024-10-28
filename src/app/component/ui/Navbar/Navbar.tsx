"use client";
import React, { useState } from "react";
import logo from "./../../../../assets/logo/logo.png";
import { useSelector } from "react-redux";
import {
  AiOutlineMenuUnfold,
  AiFillCloseSquare,
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { navCategories } from "./navItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //   const userInfo = useSelector((state) => state?.userSlice?.userInfo);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="w-full bg-black bg-opacity-40 backdrop-blur-xl fixed z-50">
      <div
        className="container mx-auto h-8 md:h-16 flex justify-between items-center"
        onMouseLeave={() => setMenuOpen(false)}
      >
        <div className="flex items-center justify-start md:space-x-6 lg:space-x-20 pl-4">
          <Link href="/">
            {!isSidebarOpen && (
              <Image src={logo} alt="logo" className="w-24 lg:w-28 h-" />
            )}
          </Link>
          <div className="hidden md:flex md:space-x-2 lg:space-x-4">
            {navCategories.map((category, index) => (
              <div
                key={index}
                className="text-gray-100 hover:text-white hover:scale-105 cursor-pointer transition-all duration-300 border-b-2 border-transparent hover:border-white"
                onMouseEnter={() => {
                  setMenuOpen(true), setActiveCategory(category);
                }}
              >
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-200 pr-4">
          <div className="hidden md:flex items-center space-x-4 text-gray-200">
            <div className="cursor-pointer hover:text-white">
              <AiOutlineSearch size={24} />
            </div>
            <div className="cursor-pointer hover:text-white">
              {/* {userInfo ? (
                <Link href="/profile">
                  <Image
                    src={userInfo?.profilePicture}
                    alt="profile"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                </Link>
              ) : (
                <Link href="/login">
                  <AiOutlineUser size={24} />
                </Link>
              )} */}
              login
            </div>
            <div className="cursor-pointer hover:text-white">
              <AiOutlineShopping size={24} />
            </div>
          </div>
          <div>
            {!isSidebarOpen ? (
              <button
                onClick={() => toggleSidebar()}
                className="md:hidden text-white cursor-pointer"
              >
                <AiOutlineMenuUnfold size={24} />
              </button>
            ) : (
              <button
                onClick={() => {
                  toggleSidebar(), setIsDrawerOpen(false);
                }}
                className="md:hidden text-white cursor-pointer"
              >
                <AiFillCloseSquare size={24} />
              </button>
            )}
          </div>
        </div>
      </div>
      <Menu
        isMenuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setActiveCategory={setActiveCategory}
        category={activeCategory}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        categories={navCategories}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </nav>
  );
};

export default Navbar;
