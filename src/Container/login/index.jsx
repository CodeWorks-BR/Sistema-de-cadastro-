
import { Container, Login, Title, Input, StyledLink, PasswordLink  } from "./style";
import MyButton from "../../../src/Components/button";



const user = {
  name: "Login",
  imageUrl: "https://github.com/CodeWorks-BR.png",
  imageAlt: "Foto do usuário de Login",
  imageSize: "150px",
  imageStyle: "50%",
}

export default function App() {
  return (
    <Container>
      <Login>
        <img src={user.imageUrl} style={{ width: user.imageSize, borderRadius: user.imageStyle }} alt={user.imageAlt} />
        <Title>LOGIN</Title>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <MyButton />
        <PasswordLink>Esqueci minha senha</PasswordLink>
      </Login>

      <StyledLink to="/cadastro">Cadastre-se</StyledLink>
    </Container >
  );
};



