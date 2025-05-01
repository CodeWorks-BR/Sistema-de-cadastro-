import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Form, Input, Button, Title, RecuperarSenhaLink } from "./style";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [mostrarRedefinir, setMostrarRedefinir] = useState(false);
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Captura o token da URL
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  // Ativa os campos de redefinir senha se o token estiver presente
  useEffect(() => {
    if (token) {
      setMostrarRedefinir(true);
    }
  }, [token]);

  const handleRedefinirSenha = async (e) => {
    e.preventDefault();

    try {
      if (token) {
        // Se o token estiver presente, redefine a senha
        if (novaSenha !== confirmarSenha) {
          alert("As senhas não coincidem!");
          return;
        }

        const response = await fetch("http://localhost:3000/auth/reset-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, newPassword: novaSenha }),
        });

        const data = await response.json(); // Aguarda a resposta para o json
        if (response.ok) {
          alert("Verifique seu e-mail e confirme a alteração da senha.");
        } else {
          alert(data.message || "Erro ao tentar redefinir a senha.");
        }
      } else {
        // Se o token não estiver presente, envia o e-mail de redefinição
        const response = await fetch("http://localhost:3000/auth/send-password-reset-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await response.json(); // Aguarda a resposta para o json
        if (response.ok) {
          alert("Verifique seu e-mail para redefinir sua senha.");
        } else {
          alert(data.message || "Erro ao solicitar redefinição.");
        }
      }
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      alert("Erro na conexão com o servidor.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleRedefinirSenha}>
        <Title>Recuperar Senha</Title>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Enviar</Button>
        <RecuperarSenhaLink href="/">Voltar</RecuperarSenhaLink>
      </Form>

      <br />

      {mostrarRedefinir && (
        <Form onSubmit={handleRedefinirSenha}>
          <Title>Definir Nova Senha</Title>
          <Input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <Button type="submit">Alterar</Button>
        </Form>
      )}
    </Container>
  );
}
