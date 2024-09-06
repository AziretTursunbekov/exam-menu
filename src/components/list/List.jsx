import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import styled from "styled-components";
import { getAllMenu } from "../../store/thunks/menuThunks";

const List = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector((store) => store.menuu);

  useEffect(() => {
    dispatch(getAllMenu());
  }, []);

  return (
    <StyledDiv>
      {menu.map((item) => (
        <div key={item.id}>
          <Item key={item.id} {...item} />
        </div>
      ))}
    </StyledDiv>
  );
};

export default List;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
`;
