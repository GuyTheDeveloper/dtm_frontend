import React from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoute from "../private-route";

const Subjects = React.lazy(() => import("../pages/auth/subjects/subjects"));
const Register = React.lazy(() => import("../pages/auth/register/register"));
const Login = React.lazy(() => import("../pages/auth/login/login"));
const LoginEmail = React.lazy(() =>
  import("../components/login-email/login-email")
);
const LoginPhone = React.lazy(() =>
  import("../components/login-phone/login-phone")
);
const Faculties = React.lazy(() => import("../pages/faculties/faculties"));
const Profile = React.lazy(() => import("../pages/profile/profile"));
const Questions = React.lazy(() => import("../pages/questions/questions"));
const Result = React.lazy(() => import("../pages/result/result"));
const Students = React.lazy(() => import("../pages/students/students"));

export const Routes = () => {
  const route = useRoutes([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Subjects />
        </PrivateRoute>
      ),
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
      children: [
        { path: "email", element: <LoginEmail /> },
        { path: "phone", element: <LoginPhone /> },
      ],
    },
    {
      path: "/faculties",
      element: (
        <PrivateRoute>
          <Faculties />
        </PrivateRoute>
      ),
    },
    {
      path: "/tests",
      element: (
        <PrivateRoute>
          <Questions />
        </PrivateRoute>
      ),
    },
    {
      path: "/results/:resultId",
      element: (
        <PrivateRoute>
          <Result />
        </PrivateRoute>
      ),
    },
    {
      path: "/students",
      element: (
        <PrivateRoute>
          <Students />
        </PrivateRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      ),
    },
  ]);
  return route;
};
