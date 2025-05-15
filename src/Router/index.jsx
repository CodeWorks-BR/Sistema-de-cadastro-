import { createBrowserRouter } from "react-router-dom";
import Login from "./../Container/login";
import Cadastro from "./../Container/cadastro";
import RegistrarPecas from "./../Container/RegistrarPecas";
import RecuperarSenha from "./../Container/RecuperarSenha";
import ListaProdutos from "./../Container/ListaProdutos";


export const router = createBrowserRouter([

  {
path:"/login",
    element: (
      <>
        <Login />
      </>
    )
  },
  {
    path: "/",
    element: (
      <>
        <ListaProdutos />
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
    path: "/products", 
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
