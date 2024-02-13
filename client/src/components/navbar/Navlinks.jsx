import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../utils/context/AuthContext";

const Navlinks = () => {
  const { user, setUser } = useAuthContext();

  return (
    <>
      <Link to={"/menu"} className="hover:text-red-500 duration-300 text-xl">
        our menu
      </Link>
      <Link to={"/randoms"} className="hover:text-red-500 duration-300 text-xl">
        Random picker
      </Link>
    
      <Link
        to={"/favourites"}
        className="hover:text-red-500 duration-300 text-xl"
      >
        Your Favourite
      </Link>
      {user?.role == "admin" && (
        <Link
          to={"/addfood"}
          className="hover:text-red-500 duration-300 text-xl"
        >
          add food
        </Link>
      )}
    </>
  );
};

export default Navlinks;
