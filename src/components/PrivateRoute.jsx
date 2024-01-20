import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const verified = 1;
  return <>{verified ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
