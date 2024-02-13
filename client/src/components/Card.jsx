import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../utils/context/CartContext";
import { useAuthContext } from "../utils/context/AuthContext";

const Card = ({ image, name, price, description, category, id, food }) => {
  const { addToCart } = useCartContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="card m-2 bg-base-100 shadow-xl overflow-hidden">
      <Link to={"/foods/" + id}>
        <figure className="h-72">
          <img src={image} alt={name} className="aspect-square object-cover" />
        </figure>
      </Link>
      <div className="card-body p-2 px-4">
        <h2 className="card-title text-2xl">{name}</h2>
        <h2 className="card-normal text-bold text-xl">{price} INR</h2>
        <h2 className="card-normal text-sm">{category}</h2>
        <p>{description}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-secondary bg-red-500 text-white hover:bg-red-500 hover:border-red-500">
            order now
          </button>{" "}
          <button
            className="btn btn-sm btn-secondary bg-cyan-500 text-white hover:bg-red-500 hover:border-red-500"
            onClick={() => {
              if (user) {
                addToCart(food);
              } else {
                navigate("/login");
              }
            }}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
