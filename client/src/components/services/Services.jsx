import React from "react";
import Heading from "../recommendation/Heading";
import HeaderButton from "../header/HeaderButton";

const Services = () => {
  return (
    <div className="lg:px-10 px-6 py-[4rem] ">
      <Heading text={"our services"} />
      <div className="container mx-auto flex gap-4 ">
        <div className="flex-[1.5] my-auto">
          <p className="lg:mr-[15rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            necessitatibus dolorem asperiores error corporis ea. Perspiciatis
            iure repudiandae consectetur architecto soluta libero nesciunt hic,
            iste fuga, voluptatibus doloribus mollitia atque!
          </p>
          <h2 className="text-xl my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            amet.
          </h2>

          <a href="tel:+1234567890">
            <HeaderButton color={"red"} item={"Call Us"} />
          </a>
          <a href="tel:+1234567890" className="ms-4">
            <HeaderButton color={"red"} item={"order Us"} />
          </a>
        </div>
        <div className="flex-[.7] px-4">
          <img
            src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
            alt=""
            className="aspect-square object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
