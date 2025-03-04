import styled from "styled-components";
import { Link  } from "react-router-dom";
import PropTypes from 'prop-types';


function MyButton({ label, to }) {
  return <Button to={to}>{label}</Button>;
}

MyButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MyButton;


const Button = styled(Link)`
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


