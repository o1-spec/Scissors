import { auth } from "../../config/firebase";
import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Loader from "../utilities/Loader";

const PrivateRoutes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
        setLoading(false);
      });
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
