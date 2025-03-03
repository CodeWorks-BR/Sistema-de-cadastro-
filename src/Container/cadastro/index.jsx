
import { Container, Title, Input, StyledLink, Cadastro } from "./style";
import MyButton from "../../../src/Components/button";

export default function Register() {
  return (
    <Container>
      <Cadastro>
        <Title>Cadastro</Title>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme sua Senha" />
        <MyButton label="Cadastrar" to="/PeçasCadastradas" />
      </Cadastro>

      <StyledLink to="/">Já tem uma conta? Faça login</StyledLink>
    </Container>
  );
}
