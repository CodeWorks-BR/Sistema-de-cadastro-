import { createBrowserRouter } from "react-router-dom";
import Login from "./../Container/login";
import Cadastro from "./../Container/cadastro";
import RegistrarPecas from "./../Container/RegistrarPecas";
import RecuperarSenha from "./../Container/RecuperarSenha";


export const router = createBrowserRouter([

  {
path:"/",
    element: (
      <>
        <Login />
      </>
    )
  },
  {
    path: "/login",
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
    path: "/registrar-pecas", 
    element: (
      <>
        <RegistrarPecas />
      </>
    ),
  },
  {
    path: "/recuperar-senha", 
    element: (
      <>
        <RecuperarSenha />
      </>
    ),
  },
  
]);
