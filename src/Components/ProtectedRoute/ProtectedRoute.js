import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/Dataprovider";

function ProtectedRoute({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ User }, dispatch] = useContext(DataContext);
  useEffect(() => {
    if (!User) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [User]);
  return children;
}

export default ProtectedRoute;
