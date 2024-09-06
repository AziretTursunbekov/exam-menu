import React from "react";
import styled from "styled-components";

const Button = ({ children, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.button`
  padding: 10px 50px;
  border: none;
  border-radius: 10px;
  background-color: #80808095;
  cursor: pointer;
`;
