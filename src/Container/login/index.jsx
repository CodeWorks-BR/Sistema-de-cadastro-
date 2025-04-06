import {
  Container,
  Form,
  Title,
  Input,
  StyledLink,
  PasswordLink,
  ButtonLink,
} from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/Api";


const user = {
  name: "Login",
  imageUrl: "https://github.com/CodeWorks-BR.png",
  imageAlt: "Foto do usuário de Login",
  imageSize: "150px",
  imageStyle: "50%",
};

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(""); 
  };

  
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

 
    if (!form.email || !form.password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

   
    if (!validateEmail(form.email)) {
      setError("O email fornecido não é válido.");
      return;
    }

    setLoading(true); 

    try {
      const response = await api.post("/auth/login", form);

      const { token } = response.data;

      localStorage.setItem("token", token); 
      navigate("/products"); 
    } catch (err) {
      console.error("Erro no login:", err);
      const message = err.response?.data?.message || "Email ou senha incorretos.";
      setError(message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <img
          src={user.imageUrl}
          style={{ width: user.imageSize, borderRadius: user.imageStyle }}
          alt={user.imageAlt}
        />

        <Title>LOGIN</Title>

       
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

   
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />

     
        <ButtonLink
          as="button"
          type="submit"
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </ButtonLink>

     
        <PasswordLink href="/recuperar-senha">
          Esqueci minha senha
        </PasswordLink>
      </Form>

      <StyledLink to="/cadastro">Cadastre-se</StyledLink>
    </Container>
  );
}
