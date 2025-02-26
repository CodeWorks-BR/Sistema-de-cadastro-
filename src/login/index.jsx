
import { Container, Login, Title, Input, } from "./style";
import MyButton from "../button/index.jsx";

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
        <a>Esqueci minha senha</a>
      </Login>

      <a href="">Criar Conta</a>
    </Container >
  );
};



