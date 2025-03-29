import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './Container/cadastro';
import Login from './Container/login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </Router>
  );
}

export default App;
