"use client";
import React, { useState } from "react";

import { AiOutlineClose, AiOutlineVerticalLeft } from "react-icons/ai";

// import useCart from "../../../hooks/cart/useCart";

import Link from "next/link";
import CartItem from "./CartItem";
import { IoBasketSharp } from "react-icons/io5";

const CartSidebar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  // const { bagItems } = useCart();

  const handleSidebar = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <section
      className={`fixed z-50 h-screen right-0 w-full md:w-7/12 lg:w-6/12 xl:w-96 transform ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      } transition duration-300 ease-in`}
    >
      {cartOpen ? (
        <button
          className="absolute top-1/2 -left-8 h-16 w-8 rounded-s-sm text-gray-200 bg-purple bg-opacity-50 backdrop-blur-3xl"
          onClick={() => handleSidebar()}
        >
          <AiOutlineVerticalLeft size={25} />
        </button>
      ) : (
        <div
          className="bg-red-600 bg-opacity-50 backdrop-blur-3xl text-gray-200 hover:text-gray-300 h-14 w-14 absolute top-[90%] -left-20 flex flex-col justify-center items-center cursor-pointer"
          onClick={() => handleSidebar()}
        >
          <IoBasketSharp size="2rem" />

          {/* <p className="absolute z-10 top-2 right-1 h-4 w-4 text-gray-100 bg-gray-100 bg-opacity-30 rounded-full flex justify-center items-center">
            {bagItems ? bagItems?.length : 0}
          </p> */}
        </div>
      )}

      <div className="bg-red-500 h-full">
        <div className="flex justify-between items-center h-16 bg-black px-4">
          <p className="my-title-font text-md font-semibold">
            <p> YOUR CART</p>
            {/* Shopping Bag ({bagItems ? bagItems?.length : 0}) */}
          </p>
          <button
            className="cursor-pointer text-gray-600 hover:text-gray-800  rotate-0 hover:rotate-180"
            onClick={() => handleSidebar()}
          >
            <AiOutlineClose size={20} className="font-bold" />
          </button>
        </div>
        <div>
          <CartItem />
        </div>
        {/* <div className="mx-10">
          <Link href="/checkout" className="font-semibold">
            <div className="bottom-2 mt-2 border border-black bg-black text-center w-ful lg:py-3 px-6 text-white w-full my-2">
              Place Order
            </div>
          </Link>
        </div> */}
        <div className="mx-10 flex flex-col justify-end h-5/6">
          <Link href="/checkout" className="font-semibold">
            <div className="border border-black bg-black text-center w-full lg:py-3 px-6 text-white my-2">
              Place Order
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartSidebar;
