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
                        <Input type="text" placeholder="Descrição" />
                        <Input type="text" placeholder="Modelo" />
                    </InputDiv1>
                    <InputDiv2>
                        <Input type="text" placeholder="Marca" />
                        <Input type="text" placeholder="Quantidade" />
                        <Input type="text" placeholder="Valor" />
                    </InputDiv2>
                </InputDiv>
                  <MyButton label="Registrar" to="/" />
            </CadastroPecas>
        </RegistrarPecas>
    )
}