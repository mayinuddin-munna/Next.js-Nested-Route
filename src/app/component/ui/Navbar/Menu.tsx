import Link from "next/link";
import Image from "next/image";
import Listing from "./Listing";

const Menu = ({ category, isMenuOpen, setMenuOpen, setActiveCategory }) => {
  const { navItems, images } = category || {};

  return (
    <div
      className={`fixed -z-50 h-[50vh] top-0 w-full bg-black bg-opacity-90 backdrop-blur-2xl transform ${
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      } transition duration-700 ease-in-out`}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => {
        setMenuOpen(false), setActiveCategory(null);
      }}
    >
      <div className="container mx-auto flex justify-between px-8 mt-20">
        <div className="flex flex-wrap space-x-16 max-w-6xl">
          {navItems &&
            navItems?.map((list, index) => (
              <div key={index}>
                <Link href={`/${list.catAddress}`}>
                  <h2 className="text-lg font-medium text-gray-100 my-title-font">
                    {list.name}
                  </h2>
                </Link>
                <Listing items={list.items} />
              </div>
            ))}
        </div>
        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            {images && (
              <Image
                src={images[0]}
                alt="Category Image 1"
                className="w-32 h-32 object-cover cursor-pointer"
              />
            )}
            {images && (
              <Image
                src={images[1]}
                alt="Category Image 2"
                className="w-32 h-32 object-cover cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
