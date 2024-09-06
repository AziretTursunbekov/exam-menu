import React from "react";
import styled from "styled-components";
import { deleteMenuRequest, menuRequest } from "../../store/thunks/menuThunks";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ title, image, description, cost, id, isChecked }) => {
  const dispatch = useDispatch();

  const handleAddMenu = (foodId) => {
    dispatch(menuRequest({ foodId, isChecked: !isChecked }));
  };

  const handleDelete = (foodId) => {
    dispatch(deleteMenuRequest(foodId));
  };

  const resultFun = (fodId) => {
    handleAddMenu(fodId);
  };

  return (
    <StyledDiv>
      <section>
        <img src={image} alt="food image" />
        <div>
          <p>{title}</p>
          <b>{description}</b>
          <p>{cost} сом</p>
          <div>
            <input
              type="checkbox"
              checked={Boolean(isChecked)}
              onClick={() => resultFun(id)}
              onChange={() => {}}
            />

            <button onClick={() => handleDelete(id)}>delete</button>
          </div>
        </div>
      </section>
    </StyledDiv>
  );
};

export default Item;

export const StyledDiv = styled.div`
  margin-top: 20px;
  & > section {
    width: 400px;
    height: 400px;
    border: 1px solid;
    padding: 10px;
    border-radius: 10px;
    & > img {
      width: 380px;
      height: 280px;
      border-radius: 10px;
      object-fit: cover;
    }
    & > div {
      display: flex;
      flex-direction: column;
      b {
        font-weight: bold;
        color: gray;
      }
      p {
        font-size: 20px;
        font-weight: bold;
      }
      & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        & > button {
          width: 100%;
          height: 25px;
          border-radius: 5px;
          border: 1px solid;
          font-weight: bold;
        }
        & > input {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
