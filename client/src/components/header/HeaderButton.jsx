import React from "react";

const HeaderButton = ({ item, color, position }) => {
  return (
    <button
      className={`px-4 right-0 h-[3rem] active:shadow-xl btn btn-secondary bg-red-500 hover:bg-red-500 hover:border-red-500 active:scale-110 duration-200 rounded-full text-white shadow-md bg-${color}-500 ${position}`}
    >
      {item}
    </button>
  );
};

export default HeaderButton;
