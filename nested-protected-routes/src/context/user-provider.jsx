import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    name: "lokesh",
    email: "lokesh@gmail.com",
    role: "user"        ,
  });
  const login = () => {
    setIsLogin(true);
    setUser({
      name: "lokesh",
      email: "lokesh@gmail.com",
      role: "user",
    });
  };

  const logout = () => {
    setIsLogin(false);
  };


  const adminLogin = () => {
    setIsLogin(true);
    setUser({
      name: "lokesh",
      email: "lokesh@gmail.com",
      role: "admin",
    });
  };

  return (
    <UserContext.Provider value={{ login, logout, isLogin, user, adminLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
