import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { postMenu } from "../../store/thunks/menuThunks";

export const Form = () => {
  const dispatch = useDispatch();

  const [menuValue, setMenuValue] = useState({
    title: "",
    image: "",
    description: "",
    cost: "",
    isChecked: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenuValue({
      ...menuValue,
      [name]: value,
      id: Date.now(),
    });
  };

  const handleMenuSubmit = (e) => {
    e.preventDefault();
    if (
      !menuValue.title ||
      !menuValue.cost ||
      !menuValue.description ||
      !menuValue.image
    ) {
      return alert("заполните поле!!!");
    }
    console.log(menuValue);

    dispatch(postMenu(menuValue));

    setMenuValue({
      title: "",
      image: "",
      description: "",
      cost: "",
    });
  };

  return (
    <StyledForm onSubmit={handleMenuSubmit}>
      <h1>Добавить блюдо</h1>
      <input
        type="text"
        name="title"
        placeholder="Название"
        value={menuValue.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="фото"
        value={menuValue.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="состав"
        value={menuValue.description}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="cost"
        placeholder="цена"
        value={menuValue.cost}
        min={0}
        onChange={handleInputChange}
      />

      <button>Добавить</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  width: 86%;
  margin: 0 auto;
  margin-top: 30px;
  background-color: cadetblue;
  & > h1 {
    color: white;
  }

  & > input {
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    height: 70px;
    font-size: 20px;
    border: 1px solid black;
    background-color: white;
  }

  & > button {
    padding: 5px 10px;
    border: 1px solid #333;
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: gray;
      border: none;
    }
  }
`;
