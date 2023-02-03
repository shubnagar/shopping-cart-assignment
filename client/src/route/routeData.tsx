import { createBrowserRouter } from "react-router-dom";
import Login from "../view/auth/Login";
import Home from "../view/home/Home";
import ProductHome from "../view/product/ProductHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <ProductHome />,
  },
]);