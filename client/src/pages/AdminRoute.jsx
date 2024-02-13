import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../utils/context/AuthContext";

const AdminRoute = () => {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user?.role);
    if (user?.role !== "admin") {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminRoute;
