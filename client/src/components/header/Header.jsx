import React from "react";
import { RiSearchEyeFill } from "react-icons/ri";
import HeaderButton from "./HeaderButton";
import { headerData } from "./HeaderConstants";

const Header = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
      <div className="container mx-auto py-[16vh]">
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-1 flex-col gap-2">
            <h1 className="lg:text-7xl md:text-4xl text-4xl font-bold">
              {headerData.heading}
            </h1>
            <p className="md:py-[2rem] md:text-sm lg:text-xl text-sm py-[2rem] mr-[1rem] md:mr-[4rem]">
              {headerData.description}
            </p>
            <div className="relative">
              <input
                type="text"
                className="border w-full rounded-full px-2 h-[3rem] outline-none active:shadow-lg duration-200 shadow-md"
                placeholder="search for foods"
              />

              <HeaderButton
                item={<RiSearchEyeFill className="mx-auto" />}
                color={"red"}
                position="absolute"
              />
            </div>
            <div className="my-[2rem] flex gap-8">
              <HeaderButton
                item={"explore now"}
                color={"red"}
                position="relative"
              />
              <HeaderButton
                item={"watch now"}
                color={"red"}
                position="relative"
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="overflow-hidden p-4 ">
              <div className="h-96 carousel carousel-vertical rounded-box">
                <div className="carousel-item h-full">
                  <img
                    src={headerData?.image[0]}
                    className="aspect-square object-cover rounded-2xl h-96 hover:scale-110 duration-200"
                    alt=""
                  />
                </div>{" "}
                <div className="carousel-item h-full">
                  <img
                    src={headerData?.image[1]}
                    className="aspect-square object-cover rounded-2xl h-96 hover:scale-110 duration-200"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
