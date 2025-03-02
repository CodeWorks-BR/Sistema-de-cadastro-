
import { Container, Title, Input, StyledLink } from "./style";


export default function Register() {
  return (
    <Container>
      <div className="register">
        <Title>Cadastro</Title>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme sua Senha" />
  
      </div>

      <StyledLink to="/">Já tem uma conta? Faça login</StyledLink>
    </Container>
  );
}
