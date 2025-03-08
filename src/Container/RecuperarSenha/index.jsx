import { useState } from "react";
import { Container, Form, Input, Button, Title, RecuperarSenhaLink } from "./style"


export default function RecuperarSenha() {
    const [email, setEmail] = useState(""); 
    const [mostrarRedefinir, setMostrarRedefinir] = useState(false);
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
  
    const enviarEmail = (e) => {
      e.preventDefault();
  
      const emailExiste = email === "santosjohny302@gmail.com";
  
      if (emailExiste) {
        setMostrarRedefinir(true);
      } else {
        alert("E-mail não encontrado.");
      }
    };
  
    return (
      <Container>
        <Form onSubmit={enviarEmail}>
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
          <Form>
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
  };