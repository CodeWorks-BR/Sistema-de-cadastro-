import { Container, Form, Title, Input, StyledLink, PasswordLink, ButtonLink } from "./style";
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
  const [error, setError] = useState(""); // Estado para erro
  const [loading, setLoading] = useState(false); // Estado para controle de carregamento
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Limpa o erro ao digitar
  };

  const validateEmail = (email) => {
    // Validação básica do formato de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("O email fornecido não é válido. Use um email válido.");
      return;
    }

    setLoading(true); // Define o estado de carregamento como true

    try {
      const response = await api.post("/login", form);

      const { token } = response.data;

      // Armazena o token no localStorage
      localStorage.setItem("token", token);

      alert("Login realizado com sucesso!");
      navigate("/registrar-pecas");
    } catch (error) {
      console.error("Erro no login:", error);
      setError(error.response?.data.message || "Email ou senha incorretos.");
    } finally {
      setLoading(false); // Define o estado de carregamento como false após a tentativa de login
    }
  };

  return (
    <Container>
      <Form>
        <img src={user.imageUrl} style={{ width: user.imageSize, borderRadius: user.imageStyle }} alt={user.imageAlt} />
        <Title>LOGIN</Title>
        
        {/* Exibição de erro, se houver */}
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

        <Input 
          type="text" 
          placeholder="Email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          aria-describedby="emailHelp"
        />
        <Input 
          type="password" 
          placeholder="Senha" 
          name="password" 
          value={form.password} 
          onChange={handleChange} 
          aria-describedby="passwordHelp"
        />
        
        <ButtonLink 
          as="button" 
          onClick={handleSubmit}
          disabled={loading} // Desabilitar o botão enquanto carrega
        >
          {loading ? "Entrando..." : "Entrar"}
        </ButtonLink>

        <PasswordLink href="/recuperar-senha">Esqueci minha senha</PasswordLink>
      </Form>

      <StyledLink to="/cadastro">Cadastre-se</StyledLink>
    </Container>
  );
}
