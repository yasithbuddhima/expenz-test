import { createBrowserRouter, Navigate } from "react-router-dom";

import SignIn from "../pages/Auth/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import LogIn from "../pages/Auth/LogIn";
import { requireAuth } from "../utils/auth";

// Routes
const router = createBrowserRouter([
  {
    path: "*",
    //TODO: Implement a 404 page
    element: <Navigate to="/" replace />,
  },
  {
    path: "/",
    element: <Dashboard />,
    // loader: requireAuth,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <SignIn />,
  },
]);

export default router;
