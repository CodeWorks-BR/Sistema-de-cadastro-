import styled from "styled-components";

const Button = styled.button`
 width: 30%;
  padding: 12px;
  margin-right: 300px;
  margin-top: 10px;
  border: none;
  border-radius: 20px;
  background: #fff;
  color: #000;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
   background-color: rgba(255, 255, 255, 0.15);
   color: #fff;
   border-color:#fff;
  }
`;

function MyButton() {
  return <Button>Login</Button>;
}

export default MyButton;
