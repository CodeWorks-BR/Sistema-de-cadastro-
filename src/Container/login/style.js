import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-image: url("https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
 
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 550px;
  height: 500px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background: rgb(158, 157, 157, 0.8);
`;

export const Title = styled.h1`
  color: #000;
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
  opacity: 1;
  color: #000;
  font-size: 22px;
  outline: none;
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: #000;
  font-size: 25px;
  margin-top: 15px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 550px;
  height: 100px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: rgb(158, 157, 157, 0.8);
`;

export const PasswordLink = styled.a`
  font-size: 18px;
  z-index: 1;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  margin-left: 300px;
`;

export const ButtonLink = styled.a`
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

  display: inline-block; 
  text-align: center;
  text-decoration: none;
  
  &:hover {
   background-color: rgba(255, 255, 255, 0.15);
   color: #fff;
   border-color:#fff;
  }
`;
