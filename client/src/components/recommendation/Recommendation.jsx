import React from "react";
import { useRecommendations } from "../../utils/hooks/useRecommendations";
import Spinner from "./Spinner";
import Heading from "./Heading";
import Card from "../Card";

const Recommendation = () => {
  const foods = useRecommendations();
  if (foods.length == 0) {
    return (
      <>
        <Heading text={"Recommendation"} />
        <Spinner />
      </>
    );
  }
  return (
    <div className="px-6 lg:px-10 mb-[2rem] mx-auto">
      <div className="container mx-auto">
        <Heading text={"Recommendation Foods"} />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {foods &&
            foods?.map((item) => {
              return (
                <Card
                  id={item?._id}
                  key={item._id}
                  name={item?.name}
                  description={item?.description?.substring(0, 100)}
                  image={item?.image}
                  category={item?.category}
                  price={item?.price}
                  food={item}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
