import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './Container/cadastro';
import Login from './Container/login';
import ListaProdutos from './Container/ListaProdutos';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<ListaProdutos />} />
       
      </Routes>
    </Router>
  );
}

export default App;
