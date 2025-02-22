import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 6px;
  background: #ff7b00;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #e66a00;
  }
`;

function MyButton() {
  return <Button>Login</Button>;
}

export default MyButton;
