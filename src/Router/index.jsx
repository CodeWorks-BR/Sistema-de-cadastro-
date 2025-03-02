import { createBrowserRouter } from "react-router-dom";
import Login from "./../Container/login";
import Cadastro from "./../Container/cadastro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/cadastro",
    element: (
      <>
        <Cadastro />
      </>
    ),
  },
]);
