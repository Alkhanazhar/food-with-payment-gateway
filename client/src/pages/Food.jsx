import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllFoods } from "../utils/hooks/getAllFoods";
import CardMain from "../components/CardMain";

const Food = () => {
  const { id } = useParams();
  const foods = useGetAllFoods();
  const food = foods.filter((food) => food._id === id);
  return (
    <div className="py-[16vh] w-10/12 mx-auto">
      <div className="m-3 tracking-widest text-xl">
        <Link className="hover:text-red-500" to={"/"}>
          foods &nbsp;
        </Link>
        /&nbsp;{food[0]?.name?.split(" ").join("-")}
      </div>
      <h1 className="text-4xl m-2 ">Category: {food[0]?.category}</h1>
      {food && (
        <CardMain
          name={food[0]?.name}
          image={food[0]?.image}
          key={food[0]?._id}
          description={food[0]?.description}
          price={food[0]?.price}
        />
      )}
    </div>
  );
};

export default Food;
