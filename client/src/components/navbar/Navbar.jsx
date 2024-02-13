import React from "react";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { TbShoppingCart } from "react-icons/tb";

import Navlinks from "./Navlinks";
import NavButton from "./NavButton";
import { useAuthContext } from "../../utils/context/AuthContext";
import NavUser from "./NavUser";
import { useCartContext } from "../../utils/context/CartContext";

const Navbar = () => {
  const { cartItems } = useCartContext();
  const { user, setUser } = useAuthContext();
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 bg-white">
      <div className="flex items-center  justify-between w-full  px-10 md:px-6 text-xl h-[2rem]">
        <Link
          className="hover:text-red-500 duration-300 font-bold text-2xl md:text-3xl relative"
          to={"/"}
        >
          Food-Villa
        </Link>
        <ul className="hidden md:flex gap-4 md:text-md text-[16px]">
          <Navlinks />
        </ul>

        {user ? (
          <div className="hidden md:flex gap-4">
            {user && <NavUser user={user} />}
            <div className="flex items-center gap-1">
              <Link to={"/cart"}>
                <TbShoppingCart className="my-auto" size={24} />
              </Link>
              <div className="badge badge-ghost my-auto">
                {cartItems?.length || 0}
              </div>
            </div>
            <div onClick={handleLogout}>
              <NavButton name={"logout"} />
            </div>
          </div>
        ) : (
          <div className="hidden md:flex gap-4">
            <NavButton name={"login"} link={"/login"} />
            <NavButton name={"register"} link={"/register"} />
          </div>
        )}

        <div className="md:hidden block drawer w-12">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button flex items-center  md:hidden w-12 rounded-full border border-none"
            >
              <RiMenu2Fill size={30} className="absolute" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full text-base-content  bg-white">
              <Navlinks />
              {user ? (
                <NavButton name={"logout"}></NavButton>
              ) : (
                <div className="flex gap-2 my-2">
                  <NavButton name={"login"} link={"/login"} />
                  <NavButton name={"register"} link={"/register"} />
                </div>
              )}
              {user && <NavUser user={user} />}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
