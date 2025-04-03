import { Container, Title, Input, StyledLink, Form } from "./style";

import { useState } from "react";
import api from "../../Services/Api";
import { useNavigate } from "react-router-dom";
import MyButton from "../../Components/button";  

const Cadastro = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  

  
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Todos os campos são obrigatórios!");
      return;
    }


    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(form.email)) {
      setError("Email inválido!");
      return;
    }

    setLoading(true); 
    try {
      const response = await api.post("/auth/register", form); 
      console.log(response);  
      setForm({ name: "", email: "", password: "", confirmPassword: "" }); 
      navigate("/login"); 
    } catch (error) {
      console.error("Erro de cadastro:", error);
      setError(error.response?.data.message || "Erro ao cadastrar.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>

        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

        <Input 
          type="text" 
          placeholder="Nome" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="text" 
          placeholder="Email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="password" 
          placeholder="Senha" 
          name="password" 
          value={form.password} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="password" 
          placeholder="Confirme sua Senha" 
          name="confirmPassword" 
          value={form.confirmPassword} 
          onChange={handleChange} 
          required 
        />
        
        
       <MyButton
       label={loading ? "Cadastrando..." : "Cadastrar"} 
       type="submit" 
       disabled={loading}
    
       />
      </Form>

      <StyledLink to="/">Já tem uma conta? Faça login</StyledLink>
    </Container>
  );
}

export default Cadastro;
