import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background-image: url("https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
 
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 580px;
  height: 650px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
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

export const InlineGroup = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 20px;
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 4px;
  
`;

export const Select = styled.select`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    
`;

export const Button = styled.button`
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export const H4 = styled.h4`
   color: #000;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

