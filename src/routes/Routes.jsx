import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AuthUser from "./protectedRoutes/AuthUser";
import UserLayout from "../layout/UserLayout";
import ProfilePage from "../pages/user/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      // for logined user components
      {
        path: "user",
        element: <AuthUser/>,

        children: [
            {
                path: "profile",
                element: <ProfilePage/>
            },
        ]
      }
    ],
  },
]);
