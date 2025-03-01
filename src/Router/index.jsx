import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./../Container/login"
import Cadastro from "./../Container/cadastro";


 export const Router =  () =>  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}


