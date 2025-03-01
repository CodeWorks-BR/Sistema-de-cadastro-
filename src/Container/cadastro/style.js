import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  outline: none;
  background-color: #fff;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  margin-top: 15px;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #007bff;
  }
`;

