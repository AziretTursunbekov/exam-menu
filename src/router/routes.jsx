import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "../components/auth/SignIn";
import { useEffect } from "react";
import { isAuth } from "../store/slices/authSlice";
import { PrivateRouter } from "./PrivatRouter";
import MainLayout from "../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import Register from "../pages/Register";
import AdminPage from "../pages/AdminPage";
import UserPage from "../pages/UserPage";
import Layout from "../layout/Layout";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((store) => store.auth);

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem("auth")) || {};
    dispatch(isAuth(data?.role));
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRouter
          Component={<Layout />}
          fallBackPath={"/register"}
          isAllowed={!role}
        />
      ),
      children: [
        {
          path: "/",
          element: (
            <PrivateRouter
              Component={<MainLayout />}
              fallBackPath={"/login"}
              isAllowed={role}
            />
          ),
        },
        {
          path: "/user",
          element: (
            <PrivateRouter
              Component={<UserPage />}
              fallBackPath={"/login"}
              isAllowed={!role}
            />
          ),
        },
        {
          path: "/admin",
          element: (
            <PrivateRouter
              Component={<AdminPage />}
              fallBackPath={"/login"}
              isAllowed={role !== "ADMIN"}
            />
          ),
        },
      ],
    },
    {
      path: "/register",
      element: (
        <PrivateRouter
          Component={<Register />}
          fallBackPath={"/"}
          isAllowed={role}
        />
      ),
    },
    {
      path: "/login",
      element: (
        <PrivateRouter
          Component={<SignIn />}
          fallBackPath={"/"}
          isAllowed={role}
          redirectPath={
            role === "USER" ? "/user" : role === "ADMIN" ? "/admin" : "/"
          }
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
