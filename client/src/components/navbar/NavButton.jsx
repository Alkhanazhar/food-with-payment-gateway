import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ link, name }) => {
  return (
    <>
      <button className="btn btn-secondary bg-red-500 text-white hover:bg-red-500 hover:border-red-500 hover:scale-105 duration-300 my-2">
        <Link to={link}>{name}</Link>
      </button>
    </>
  );
};

export default NavButton;
