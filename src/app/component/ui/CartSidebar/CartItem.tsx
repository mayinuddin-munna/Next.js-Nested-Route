// import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import useCart from "../../../hooks/cart/useCart";
// import LoadingCartItem from "../../Loading/LoadingCartItem/LoadingCartItem";
// import "./CartItem.css";
// import Image from "next/image";

const CartItem = () => {
//   const {
//     bagItems,
//     totalAmount,
//     isLoading,
//     isError,
//     handleIncrementQuantity,
//     handleDecrementQuantity,
//     handleRemoveFromCart,
//   } = useCart();

//   if (isLoading) {
//     return (
//       <div>
//         {Array.from({ length: 4 }).map((_, index) => (
//           <LoadingCartItem key={index} />
//         ))}
//       </div>
//     );
//   }

//   if (!isLoading && isError) {
//     return <div className="text-center font-bold">Something went wrong!</div>;
//   }

  return (
    <div className="flex flex-col w-full px-6 text-gray-900">
      <ul className="flex flex-col divide-y max-h-[calc(100vh-180px)] overflow-y-auto no-scrollbar">
        {/* {bagItems?.map((item) => (
          <li
            key={item?._id + item?.selectedSize}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              {item?.images && item.images.length > 0 && (
                <Image
                  className=" object-contain w-20 h-20 sm:w-32 sm:h-32"
                  src={item.images[0].url}
                  alt="product-image"
                />
              )}
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold sm:pr-8">
                      {item?.productName}
                    </h3>
                    <p className="text-sm font-medium text-gray-500">
                      Category: {item?.category}
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                      Size : {item?.selectedSize}
                    </p>
                  </div>
                  <div className="text-right mt-1">
                    <p className="text-sm font-semibold text-gray-500 font-header">
                      BDT {item?.basePrice}
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x items-center">
                  <button
                    className="flex items-center mr-1 px-2 space-x-1 font-semibold hover:bg-[#1F1F1F] hover:text-white transition-all duration-500 h-8"
                    onClick={() =>
                      handleRemoveFromCart({
                        _id: item?._id,
                        selectedSize: item?.selectedSize,
                      })
                    }
                  >
                    <AiOutlineDelete />
                    <span>Remove</span>
                  </button>
                  <div className="flex items-center space-x-1">
                    <button
                      className="cursor-pointer font-semibold h-8 w-8 ml-3 flex justify-center items-center bg-gray-100 hover:bg-[#1F1F1F] hover:text-white transition-all duration-500"
                      onClick={() =>
                        handleDecrementQuantity({
                          _id: item?._id,
                          selectedSize: item?.selectedSize,
                        })
                      }
                    >
                      <AiOutlineMinus />
                    </button>
                    <p className="h-8 w-8 flex justify-center items-center border-t border-b bg-white text-center font-semibold cursor-default">{item.quantity}</p>
                    <button
                      className="cursor-pointer font-semibold h-8 w-8 ml-3 flex justify-center items-center bg-gray-100 hover:bg-[#1F1F1F] hover:text-white transition-all duration-500"
                      onClick={() =>
                        handleIncrementQuantity({
                          _id: item?._id,
                          selectedSize: item?.selectedSize,
                        })
                      }
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))} */}
      </ul>
      {/* {bagItems && bagItems.length > 0 ? (
        <div className="space-y-1 text-right absolute bottom-14 right-6">
          <p className="font-semibold">
            Total amount:
            <span className="font-bold font-header"> {totalAmount} BDT</span>
          </p>
          <p className="text-sm">Not including taxes and shipping costs</p>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default CartItem;
