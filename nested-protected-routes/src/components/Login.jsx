import React from "react";
import { useUserContext } from "../context/user-provider";
import { useNavigate } from "react-router";

const Login = () => {
  const { isLogin, login, logout, user ,adminLogin } = useUserContext();

  const navigate = useNavigate();
  return (
    <div>
      <h1>
        {isLogin ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Please login to continue.</p>
        )}
      </h1>

      <div>
        {!isLogin && <div>

        <button onClick={login}>Login</button>
        <br />
        <br />
        {' '}
        <button onClick={adminLogin}>Admin Login</button>

        </div> }
        {isLogin && (
          <div>
            <button onClick={logout}>Logout</button>
            <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
