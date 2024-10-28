import { AiOutlineClose } from "react-icons/ai";
import Listing from "./Listing";
import Image from "next/image";

type NavItem = {
  name: string;
  items: string[];
};

type Category = {
  navItems: NavItem[];
  images: string[];
};

interface DrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  category?: Category | null;
}

const Drawer: React.FC<DrawerProps> = ({ isDrawerOpen, toggleDrawer, category }) => {
  const { navItems, images } = category || {};

  return (
    <div
      className={`block md:hidden fixed z-50 h-screen bg-theme backdrop-blur-xl inset-y-0 right-0 w-full py-4 transform ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      } transition duration-700 ease-in-out overflow-y-auto no-scrollbar`}
    >
      <div className="flex flex-col justify-center space-y-3 mt-8">
        {navItems?.map((list, index) => (
          <div
            key={index}
            className="text-gray-200 hover:text-white transition duration-300 px-8"
            onClick={toggleDrawer}
          >
            <p className="text-lg font-medium text-gray-100 my-title-font">
              {list.name}
            </p>
            <Listing items={list.items} />
            <div className="border-b border-gray-400"></div>
          </div>
        ))}
      </div>
      <div className="relative mt-10">
        <div className="flex flex-col items-center justify-center gap-6">
          {images?.[0] && (
            <Image
              src={images[0]}
              alt="Category Image 1"
              className="w-32 h-32 object-cover cursor-pointer"
            />
          )}
          {images?.[1] && (
            <Image
              src={images[1]}
              alt="Category Image 2"
              className="w-32 h-32 object-cover cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="absolute top-2 left-2 cursor-pointer">
        <button onClick={toggleDrawer} className="text-white">
          <AiOutlineClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default Drawer;
