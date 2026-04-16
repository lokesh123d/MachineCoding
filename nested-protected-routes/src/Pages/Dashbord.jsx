import React from "react";
import { Link, Outlet } from "react-router";

const Dashbord = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="orders/123">Order Details</Link> |{" "}
        <Link to="setting">Setting</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashbord;
