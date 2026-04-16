import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./Pages/Dashbord";
import Home from "./components/Home";
import Profile from "./Pages/Profile";
import DashboardSetting from "./Pages/DashbordSetting";
import OrderDetails from "./Pages/OrderDetails";
import Login from "./components/Login";
import ProtectedWrapper from "./protected-wrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        path: "/",
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedWrapper>
            <Dashboard />
          </ProtectedWrapper>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "setting",
            element: <DashboardSetting />,
          },
          {
            path: "orders/:id",
            element: <OrderDetails />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
