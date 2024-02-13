import React from "react";

const Heading = ({ text }) => {
  return (
    <h1 className="text-center text-3xl lg:text-5xl font-bold pb-[3rem]">
      {text}
    </h1>
  );
};

export default Heading;
