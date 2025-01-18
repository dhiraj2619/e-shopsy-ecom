import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin }) => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);
  console.log("isAuthenticated:", isAuthenticated);
  console.log("loading:", loading);
  console.log("user:", user);

  return (
    <>
      {loading === false &&
        (isAuthenticated === false ? (
          <Navigate to="/login" />
        ) : isAdmin ? (
          user.role !== "admin" ? (
            <Navigate to="/login" />
          ) : (
            children
          )
        ) : (
          children
        ))}
    </>
  );
};

export default ProtectedRoute;
