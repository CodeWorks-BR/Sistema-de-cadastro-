import { Container, Title, Input, Link } from "./style";


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

      <Link to="/">Já tem uma conta? Faça login</Link>
    </Container>
  );
}
