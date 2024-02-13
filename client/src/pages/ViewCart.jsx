import React from "react";
import { useCartContext } from "../utils/context/CartContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const { cartItems, removeFromCart, addToCart } = useCartContext();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const tax = totalPrice * 0.18;
  const shipping = totalPrice > 600 ? 0 : 50;

  return (
    <div className="pt-16">
      <div
        className={`${cartItems?.length === 0 ? "bg-red-100 " : "bg-red-200"} `}
      >
        <div className="container mx-auto py-6">
          <div className="w-full bg-white px-10 py-5 text-black rounded-sm">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">My Food Cart</h1>
              <h2 className=" text-2xl">{cartItems?.length || 0}</h2>
            </div>
            <div className="mt-10 flex mb-5">
              <h3 className="font-semibold text-gray-900 text-xs uppercase w-2/5">
                food details
              </h3>
              <h3 className="font-semibold text-gray-900 text-xs uppercase w-2/5">
                category
              </h3>{" "}
              <h3 className="font-semibold text-gray-900 text-xs uppercase w-2/5">
                qty
              </h3>{" "}
              <h3 className="font-semibold text-gray-900 text-xs uppercase w-2/5">
                price
              </h3>{" "}
              <h3 className="font-semibold text-gray-900 text-xs uppercase w-2/5">
                total price
              </h3>
            </div>
            {cartItems?.map((item) => {
              return <CardFood key={item._id} food={item} />;
            })}
          </div>
          <div
            className={
              cartItems?.length === 0
                ? "mx-auto hidden items-end justify-center px-6 flex-col"
                : "mx-auto justify-center px-6 flex-col mt-2"
            }
          >
            <div className="text-right mb-2 font-semibold text-red-900">
              Shipping:{shipping}
            </div>
            <div className="text-right mb-2 font-semibold text-red-900 text-xl">
              Total Price : {totalPrice + Math.floor(tax) + shipping} INR{" "}
              <span className="text-sm">gst included 18%</span>
            </div>
            <Link to={"/order"}>
              <div className="btn flex-end text-white border-none hover:bg-red-600 hover:border-red-600 btn-sm bg-red-500">
                Check out
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;

const CardFood = ({ food }) => {
  const { cartItems, removeFromCart, addToCart } = useCartContext();
  return (
    <div className="flex items-center justify-between hover:bg-slate-100 rounded-md duration-150 -mx-8 px-6 py-5">
      <div className="flex  w-2/5">
        <div className="w-24">
          <img
            src={food?.image}
            alt="food"
            className="aspect-square h-24 rounded-sm"
          />
        </div>
      </div>
      <span className=" w-2/5">
        <span>{food.category}</span>
      </span>{" "}
      <span className="flex items-center space-x-4 w-2/5">
        <div className="shadow-sm Itext-white bg-red-500 hover:bg-red-700 cursor-pointer p-4 rounded-full relative">
          <AiOutlineMinus
            size={20}
            onClick={() => removeFromCart(food)}
            className=" absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </div>
        <span className="text-red-500 px-3 py-2 text-lg font-medium">
          {food.qty}
        </span>
        <span className="shadow-sm Itext-white bg-red-500 hover:bg-red-700 cursor-pointer p-4 rounded-full relative">
          <AiOutlinePlus
            size={20}
            onClick={() => addToCart(food)}
            className=" absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </span>
      </span>
      <span className="w-2/5">
        {food?.qty}&nbsp;X&nbsp;{food?.price} INR
      </span>
      <span className="w-2/5">{food?.qty * food?.price} INR</span>
    </div>
  );
};
