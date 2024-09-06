import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "../components/list/UserItem";
import { getAllMenu } from "../store/thunks/menuThunks";
import styled from "styled-components";

const UserPage = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector((store) => store.menuu);

  const userMenu = menu.filter((item) => item.isChecked === true);

  useEffect(() => {
    dispatch(getAllMenu());
  }, []);

  return (
    <StyledDiv>
      {userMenu.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </StyledDiv>
  );
};

export default UserPage;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
`;
