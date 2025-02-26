import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

 
  background-image: url("https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
      color: #fff;
    }


 
    width: 540px;
    align-items: center;
    justify-content: center;
    margin:20px;
    padding: 40px;
 
    border-radius: 12px;
    background: rgb(158, 157, 157, 0.3);
  
    box-shadow: 0px 4px 10px rgba(158, 157, 157, 0.3);
  }
  
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
  background: rgb(158, 157, 157, 0.3);
  
  box-shadow: 0px 4px 10px rgba(158, 157, 157, 0.3);

  a {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    text-decoration: none;
    color: #000;
    padding-left: 600px;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
 
  }

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
  background: rgba(255, 255, 255, 0.3);
  color: #000;
  font-size: 16px;
  outline: none;

  &:focus~label,
  &:not(:placeholder-shown)~label {
    background: rgba(255, 255, 255, 0.3);
  }

`;


