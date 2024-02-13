import axios from "axios"
import { useEffect, useState } from "react"
export const useGetAllFoods = () => {
    const [foods, setFoods] = useState([])
    const getAllFoods = async () => {
        const { data } = await axios.get("/allfoods")
        setFoods(data.foods)
    }
    useEffect(() => {
        getAllFoods()
    }, [])
    return foods;
}