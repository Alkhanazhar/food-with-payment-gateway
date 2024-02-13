import axios from "axios";
import React, { useState } from "react";
import { useAuthContext } from "../utils/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/recommendation/Spinner";
import { RiUser3Fill } from "react-icons/ri";

const AddFood = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const [upload, setUpload] = useState(false);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("drinks");

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUpload(true);
    try {
      const { data } = await axios.post("/upload", formData);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUpload(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = async (e) => {
    if (name && price && description && image.url && category) {
      setMessage("");
      const { data } = await axios.post("/create-foods", {
        name: name,
        image: image.url,
        price: price,
        description: description,
        category: category,
      });
      alert("successfully added");
      setName("");

      navigate("/");
    } else setMessage("fill the form and upload the image");
  };
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="px-[4rem] py-[1rem] lg:w-4/12 w-10/12 flex flex-col text-center font-bold bg-rose-200/45 backdrop-blur-xl rounded-xl shadow-xl text-sm">
        <h1 className="text-4xl my-2">create your food</h1>
        <label
          htmlFor="image"
          className="cursor-pointer flex justify-center flex-col items-center rounded-3xl w-full my-4 "
        >
          {image?.url ? (
            <img src={image.url} className="w-28 rounded-full aspect-square" />
          ) : (
            <RiUser3Fill className="size-10 my-2" />
          )}
          {upload && (
            <div className="absolute">
              <Spinner />
            </div>
          )}
          {image?.url ? "your image" : "upload Food image"}
        </label>
        <div className="flex md:flex-row flex-col gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Name here"
              onChange={(e) => setName(e.target.value)}
              className="input input-ghost w-full bg-red-300 max-w-xs border-none"
            />
          </div>
          <div className="flex-1">
            <input
              type="file"
              className="file-input w-full bg-red-300 max-w-xs mx-auto rounded-none border-none"
              accept=".jpeg,.png,.gif"
              id="image"
              onChange={handleImage}
            />
          </div>
        </div>
        {message && message}
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex-1">
            <input
              type="number"
              placeholder="price here"
              onChange={(e) => setPrice(e.target.value)}
              className="input input-ghost w-full bg-red-300  max-w-xs border-none"
            />
          </div>
          <div className="flex-1">
            <select
              className="select select-bordered bg-red-300 w-full max-w-xs outline-none border rounded-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled defaultValue>
                category
              </option>
              <option value={"drinks"}>drinks</option>
              <option value={"chinese"}>chinese</option>
              <option value={"indian"}>indian</option>
              <option value={"fast-food"}>fast-food</option>
              <option value={"others"}>others</option>
            </select>
          </div>
        </div>
        <textarea
          className="textarea textarea-ghost bg-red-300 text-black border-none my-4"
          placeholder="description of the food item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="bg-red-500 px-6 py-4 rounded-md mb-4"
          onClick={handleSubmit}
        >
          add food
        </button>
      </div>
    </div>
  );
};

export default AddFood;
