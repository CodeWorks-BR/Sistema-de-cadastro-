import { Container, Title, Input, StyledLink, Form } from "./style";
import MyButton from "../../../src/Components/button";
import { useState } from "react";
import api from "../../Services/Api";
import { useNavigate } from "react-router-dom";  

const Cadastro = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState(""); // Estado para mensagens de erro
  const [loading, setLoading] = useState(false);  // Estado para indicar carregamento
  const navigate = useNavigate();  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Limpa a mensagem de erro ao digitar
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Previne a ação padrão do form

    // Verifica se todos os campos estão preenchidos
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    // Verifica se as senhas coincidem
    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    // Validação do formato do email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(form.email)) {
      setError("Email inválido!");
      return;
    }

    setLoading(true); // Definir carregando como true

    try {
      const response = await api.post("/auth/register", form); // Enviando os dados para o backend
      console.log(response);  
      alert("Cadastro realizado com sucesso!");
      setForm({ name: "", email: "", password: "", confirmPassword: "" }); // Limpando os campos após o cadastro
      navigate("/login"); // Redirecionar para a tela de login
    } catch (error) {
      console.error("Erro de cadastro:", error);
      setError(error.response?.data.message || "Erro ao cadastrar.");
    } finally {
      setLoading(false); // Definir carregando como false após o envio
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>

        {/* Exibição de erro, se houver */}
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
