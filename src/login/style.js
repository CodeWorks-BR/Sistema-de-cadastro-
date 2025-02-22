import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 550px;
  height: 500px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 16px;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
