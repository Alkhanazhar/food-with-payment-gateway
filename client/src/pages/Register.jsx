import React, { useState } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/recommendation/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const [upload, setUpload] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
    if (name && password && email && image.url) {
      setMessage("");
      const { data } = await axios.post("/register", {
        name: name,
        email: email,
        password: password,
        image: image.url,
      });
      alert("successfully registered");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } else setMessage("fill the form and upload the image");
  };

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="px-[4rem] pt-[1rem] lg:w-4/12 w-9/12 flex flex-col text-center font-bold bg-rose-400/45 backdrop-blur-xl rounded-xl shadow-xl text-sm">
        <Link to="/" className="font-bold text-4xl mb-2">
          FoodVilla
        </Link>
        <div className="mb-2">
          <label
            htmlFor="image"
            className="cursor-pointer flex justify-center flex-col items-center rounded-3xl w-full"
          >
            {image?.url ? (
              <img
                src={image.url}
                className="w-28 rounded-full aspect-square"
              />
            ) : (
              <RiUser3Fill className="size-10 my-2" />
            )}
            {upload && (
              <div className="absolute">
                <Spinner />
              </div>
            )}
            {image?.url ? "your image" : "upload profile image"}
          </label>
          <input
            type="file"
            accept=".jpeg,.png,.gif"
            className="hidden"
            id="image"
            onChange={handleImage}
          ></input>
        </div>
        <div className="mb-2">
          <label className="block mb-2">Email</label>
          <input
            type="text"
            className="outline-none p-2 rounded-md w-full"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="mb-2">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="outline-none p-2 rounded-md w-full"
            placeholder="Your Full Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />{" "}
        </div>{" "}
        <div className="mb-2">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="outline-none p-2 rounded-md w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>{" "}
        <button
          className="p-2 bg-red-500/80 text-white shadow-xl rounded-md duration-200 active:scale-125"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
        {message && message}
        <Link to={"/login"} className="p-2" type="submit">
          sign in
        </Link>
      </div>
    </div>
  );
};

export default Register;
