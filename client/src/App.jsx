import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/Register";
import AddFood from "./pages/AddFood";
import AdminRoute from "./pages/AdminRoute";
import Menu from "./pages/Menu";
import "./App.css";
import Food from "./pages/Food";
import Random from "./pages/Random";
import ViewCart from "./pages/ViewCart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Order from "./pages/Order";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import UserRoute from "./pages/UserRoute";

axios.defaults.baseURL = "http://localhost:8080";
function App() {
  const publishableKey =
    "pk_test_51Oj7bTSELCbyUChj91gOGhwXcDEJMj4rEV9IxXt0CpDzgQhUax3rYvmkbRRfLOPD2VcEqSJKtmCBXEQSylDmXz6R002wiBpVmK";
  const stripePromise = loadStripe(publishableKey);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/randoms" element={<Random />} />
        <Route path="foods/:id" element={<Food />} />
        <Route element={<AdminRoute />}>
          <Route path="/addfood" element={<AddFood />} />
        </Route>
        <Route path="/cart" element={<ViewCart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route
          path="/order"
          element={
            <UserRoute>
              <Elements stripe={stripePromise}>
                <Order />
              </Elements>
            </UserRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
