import Link from "next/link";

const Listing = ({ items }) => {
  return (
    <div className="flex flex-col justify-start space-y-1 pt-2">
      {items &&
        items.map((item, index) => (
          <Link key={index} href={`/${item.address}`}>
            <p className="text-gray-300 hover:text-white cursor-pointer hover:underline underline-offset-4 hover:scale-105 transition-all duration-300 my-paragraph-font">
              {item.label}
            </p>
          </Link>
        ))}
    </div>
  );
};

export default Listing;
