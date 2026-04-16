import React, { useEffect } from "react";
import { useUserContext } from "./context/user-provider";
import { useNavigate } from "react-router";

const ProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLogin } = useUserContext();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, user, navigate]);

  if (!isLogin) {
    return null;
  }

  if (user.role !== "admin") {
    return (
      <div>
        <p>You do not have access to this page.</p>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  return children;
};

export default ProtectedWrapper;
