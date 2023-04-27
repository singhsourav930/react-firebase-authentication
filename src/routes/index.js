import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../views/layouts/main";
import SignIn from "../views/signIn";
import SignUp from "../views/signup";
import Dashboard from "../views/dashboard";
import NotFound from "../views/notFound";
import Employee from "../views/employee";
const routes = ({ isLoggedIn, userData }) => [
  {
    path: "/",
    element: isLoggedIn ? (
      <MainLayout userData={userData}>
        <Outlet />
      </MainLayout>
    ) : (
      <Navigate to="/login" />
    ),
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/employees", element: <Employee /> },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? <Outlet /> : <Navigate to="/" />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <SignIn /> },
      { path: "/", element: <Navigate to="/login" /> },
    ],
  },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
