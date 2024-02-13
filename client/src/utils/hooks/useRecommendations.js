import axios from "axios";
import { useEffect, useState } from "react";

export const useRecommendations = () => {
    const [foods, setFoods] = useState([])
    const getrecommendation = async () => {
        const { data } = await axios.get("/recommendations");
        setFoods(data.foods.slice(0, 4));
    };
    useEffect(() => {
        getrecommendation();
    }, []);
    return foods;
}