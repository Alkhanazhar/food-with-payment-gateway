import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../utils/context/AuthContext";

const Login = () => {
  const { user, setUser } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.success) {
        console.log(data);
        localStorage.setItem("token", data.token);
        setUser(data.user);

        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (user) navigate("/");
    // console.log(location)
    // location("/")
  }, [user]);
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="p-[4rem] lg:w-4/12 w-9/12 flex flex-col text-center font-bold bg-rose-400/45 backdrop-blur-xl rounded-xl shadow-xl">
        <div>
          <Link to="/" className="font-bold text-4xl mb-2">
            FoodVilla
          </Link>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="text"
            className="outline-none p-2 rounded-md w-full"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="text"
            className="outline-none p-2 rounded-md w-full"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>{" "}
        <button
          className="p-2 bg-red-500/80 shadow-xl rounded-md duration-200 active:scale-125"
          type="submit"
          onClick={handleSubmit}
        >
          sign in
        </button>{" "}
        <Link to={"/register"} className="p-2" type="submit">
          register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
