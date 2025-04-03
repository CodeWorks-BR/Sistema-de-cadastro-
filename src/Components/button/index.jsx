import styled from "styled-components";
import PropTypes from 'prop-types';


function MyButton({ label, onclick, type, disabled }) {
  return <Button type={type} disabled={disabled} onClick={onclick}>{label}</Button>;
}

MyButton.propTypes = {
  label: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

MyButton.defaultProps = {
  type: "button",
  onclick: () => {},
  disabled: false
};

export default MyButton;


const Button = styled.button`
  width: 30%;
  padding: 12px;
  margin: 10px;
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


