import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState("all");
  const [value, setValue] = useState("all");
  const [foods, setFoods] = useState([]);
  const [filters, setFilters] = useState([]);
  const filterFoods = (value) => {
    const filterData = foods.filter((item) => {
      return item.category === value;
    });
    setFilters(filterData);
  };

  const handleSubmit = (item) => {
    setActive(item.name);
    setValue(item.value);
  };

  const getAllFoods = async () => {
    const { data } = await axios.get("/allfoods");
    setFoods(data.foods);
    setFilters(data.foods);
  };

  const menu = [
    { id: 0, name: "all", value: "all" },
    { id: 1, name: "indian", value: "indian" },
    { id: 2, name: "others", value: "others" },
    { id: 3, name: "fast-food", value: "fast-food" },
    { id: 4, name: "drinks", value: "drinks" },
    { id: 5, name: "chinese", value: "chinese" },
  ];
  useEffect(() => {
    value === "all" && setFilters(foods);
    value !== "all" && filterFoods(value);
  }, [value]);

  useEffect(() => {
    getAllFoods();
  }, []);

  return (
    <div className="py-[14vh]">
      <div className="flex container mx-auto">
        {menu.map((item) => {
          return (
            <button
              key={item.id}
              className={`${
                active === item.name
                  ? "btn btn-secondary bg-red-500 text-white hover:bg-red-500 hover:border-red-500"
                  : "btn  hover:border-red-500"
              } ms-4 border-red-500 duration-300`}
              onClick={() => handleSubmit(item)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto my-[2rem]">
        {filters?.map((food) => {
          return (
            <Card
              key={food?._id}
              name={food?.name}
              description={food?.description?.substring(0, 50)}
              image={food?.image}
              category={food?.category}
              price={food?.price}
              id={food?._id}
              food={food}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
