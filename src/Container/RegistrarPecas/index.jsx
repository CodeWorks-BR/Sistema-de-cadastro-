import { RegistrarPecas, Input, Title, CadastroPecas, InputDiv1, InputDiv2, InputDiv } from "./style"
import MyButton from "../../../src/Components/button";

export default function Pecas() {
    return (
        <RegistrarPecas>
            <CadastroPecas>
                <Title>Registrar Peças</Title>
                <InputDiv>
                    <InputDiv1>
                        <Input type="text" placeholder="Nome" />
                        <Input type="text" placeholder="Quantidade" />
                        <Input type="text" placeholder="preço" />
                    </InputDiv1>
                    <InputDiv2>
                        <Input type="text" placeholder="categoria" />
                        <Input type="text" placeholder="---" />
                        <Input type="text" placeholder="---" />
                    </InputDiv2>
                </InputDiv>
                  <MyButton label="Registrar" to="/" />
            </CadastroPecas>
        </RegistrarPecas>
    )
}