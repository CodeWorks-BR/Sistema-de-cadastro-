import { createBrowserRouter } from "react-router-dom";
import Login from "./../Container/Login";
import Cadastro from "./../Container/Cadastro";
import RegistrarPecas from "./../Container/RegistrarPecas";



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
  {
    path: "/registrar-pecas", // Nome amigável na URL
    element: <RegistrarPecas />,
  },
  
]);
