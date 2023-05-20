import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div>
        <h2 className="text-5xl">Loading...</h2>
      </div>
    );
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
