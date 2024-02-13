import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center py-10">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
