import React, { useEffect } from "react";
import { useCartContext } from "../utils/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../utils/context/AuthContext";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Order = () => {
  const { user } = useAuthContext();
  const stripe = useStripe();
  const navigate = useNavigate();

  const { cartItems, removeFromCart, addToCart } = useCartContext();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const tax = totalPrice * 0.18;
  const shipping = totalPrice > 600 ? 0 : 50;

  const handlePayment = async () => {
    const orderItems = await cartItems.map((item) => {
      return {
        food: item._id,
        qty: item.qty,
      };
    });
    console.log(orderItems);
    try {
      const { data } = await axios.post("/orders", {
        userId: user._id,
        items: orderItems,
        totalPrice: totalPrice + tax + shipping,
      });
      console.log(data);
      if (data.success) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.session.id,
        });
        console.log(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (!user) return navigate("/login");
  }, []);

  return (
    <div className="relative mx-auto w-full bg-rose-100/10">
      <div className="min-h-screen grid-cols-10">
        <div className="col-span-full py-10 px-4 sm:py-20 lg:py-24">
          <div className="mx-auto  w-full  bg-red-100/20 hover:bg-rose-200 duration-200 rounded-lg shadow-xl p-4 max-w-lg">
            <h1 className="relative px-6 text-4xl font-medium  text-gray-900 sm:text-3xl">
              Secure Checkout
              <span className="mt-2 block h-1 w-10 bg-red-500  sm:w-20"></span>
            </h1>
            <div className="my-5">
              <div
                className={
                  cartItems?.length === 0
                    ? "mx-auto hidden items-end justify-center px-6 flex-col"
                    : "mx-auto justify-center px-6 flex-col mt-2"
                }
              >
                <div className="text-right my-2  text-red-900">
                  {cartItems.length} items you purachased
                </div>
                <div className="text-right mb-2 font-semibold text-red-900">
                  Shipping:{shipping} INR
                </div>
                <div className="text-right  text-red-900">Gst:{tax} INR</div>
                <div className="text-right mb-2 font-semibold text-red-900 text-xl">
                  Total Price : {totalPrice + Math.floor(tax) + shipping} INR{" "}
                  <span className="text-sm">gst included 18%</span>
                </div>
              </div>
            </div>
            <p className="mt-10 text-center text-sm font-semibold text-gray-500">
              By placing this order you agree to the{" "}
              <a
                href="#"
                className="whitespace-nowrap text-red-400 underline hover:text-red-600"
              >
                Terms and Conditions
              </a>
            </p>
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded bg-red-500 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-red-500 sm:text-lg"
              onClick={handlePayment}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
