import React from "react";
import styled from "styled-components";

const Header = () => {
  const logoutHandler = () => {
    localStorage.removeItem("auth");
    window.location.pathname = "/login";
  };

  return (
    <StyledHeader>
      <h1>Menu</h1>
      <button onClick={logoutHandler}>logout</button>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  & > button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid black;
    font-size: 15px;
    color: white;
    background-color: #2a2a18;
  }
  & > h1 {
    color: white;
  }
`;
