import React from "react";
import { useGetAllFoods } from "../utils/hooks/getAllFoods";
import Card from "../components/Card";
import Heading from "../components/recommendation/Heading";
import CardMain from "../components/CardMain";

const Random = () => {
  const foods = useGetAllFoods();
  function getRandomItem(foods) {
    const randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex];
  }
  const random = getRandomItem(foods);
  const random2 = getRandomItem(foods);
  return (
    <div className="pt-[16vh] ">
      <Heading text={"our best pick for your taste buds 😎👌"} />
      <div className="w-full flex container mx-auto">
        <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center ">
          <CardMain
            name={random?.name}
            image={random?.image}
            price={random?.price}
            // description={random?.description}
            category={random?.category}
          />
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
          <CardMain
            name={random2?.name}
            image={random2?.image}
            price={random2?.price}
            // description={random2?.description}
            category={random2?.category}
          />
        </div>
      </div>
    </div>
  );
};

export default Random;
