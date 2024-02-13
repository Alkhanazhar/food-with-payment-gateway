import React from "react";
import { TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";

const NavUser = ({ user }) => {
  return (
    <>
      <div className="dropdown dropdown-end z-50 my-2 flex items-center justify-center">
          <div className="w-10 rounded-full flex items-center">
            <img
              alt="foods"
              className="rounded-full aspect-square"
              src={user.image}
            />
          </div>
          
      </div>
    </>
  );
};

export default NavUser;
