import styled from "styled-components";



export const Container = styled.div`
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const ProductCard = styled.div`
  border: 2px solid ${({ isLowStock }) => (isLowStock ? "#dc3545" : "#ccc")};
  background-color: ${({ isLowStock }) => (isLowStock ? "#ffe6e6" : "#fff")};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const ProductInfo = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: ${({ variant }) =>
    variant === "danger" ? "#dc3545" : "#007bff"};
  border: none;
  color: white;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "danger" ? "#a71d2a" : "#0056b3"};
  }
`;

export const AlertText = styled.span`
  color: #dc3545;
  font-weight: bold;
  font-size: 0.9rem;
`;