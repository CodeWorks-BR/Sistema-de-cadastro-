import { Container, Title, Input, StyledLink, Form } from "./style";
import MyButton from "../../../src/Components/button";
import { useState } from "react";
import api from "../../Services/Api";
import { useNavigate } from "react-router-dom";  // Importando o useNavigate

const Cadastro = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();  // Inicializando o hook navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de submit

    // Verificando se os campos obrigatórios não estão vazios
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    // Verificando se as senhas coincidem
    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await api.post("/register", form); // Enviando os dados para o backend
      console.log(response);  // Verificando a resposta da API no console
      alert("Cadastro realizado com sucesso!");
      setForm({ name: "", email: "", password: "", confirmPassword: "" }); // Limpando os campos após o cadastro

      // Após o cadastro bem-sucedido, redireciona para a página de login
      navigate("/login");  // O caminho pode ser ajustado conforme sua estrutura de rotas
    } catch (error) {
      // Tratando erro caso a requisição falhe
      console.error("Erro de cadastro:", error);
      alert(error.response?.data.message || "Erro ao cadastrar.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <Input 
          type="text" 
          placeholder="Nome" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
        />
        <Input 
          type="text" 
          placeholder="Email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
        />
        <Input 
          type="password" 
          placeholder="Senha" 
          name="password" 
          value={form.password} 
          onChange={handleChange} 
        />
        <Input 
          type="password" 
          placeholder="Confirme sua Senha" 
          name="confirmPassword" 
          value={form.confirmPassword} 
          onChange={handleChange} 
        />
        <MyButton label="Cadastrar" type="submit" />
      </Form>

      <StyledLink to="/">Já tem uma conta? Faça login</StyledLink>
    </Container>
  );
}

export default Cadastro;
