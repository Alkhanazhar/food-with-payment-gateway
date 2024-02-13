import React from "react";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#fee7ff] shadow-2xl ">
        <footer className="container mx-auto footer p-10 bg-neutral text-neutral-content">
          <aside className="mx-auto">
            <Link className="text-6xl" to={"/"}>
              FoodVilla
            </Link>
            <p>
              <br />
              Providing reliable in food service since 1992
            </p>
          </aside>
          <nav className="mx-auto">
            <div className="grid grid-flow-col gap-4 text-4xl">
              <a href="" target="_blank">
                <RiFacebookBoxFill />
              </a>
              <a href="" target="_blank">
                <RiTwitterFill />
              </a>
              <a href="" target="_blank">
                <RiInstagramFill />
              </a>
            </div>
          </nav>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
