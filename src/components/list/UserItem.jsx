import React from "react";
import { StyledDiv } from "./Item";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserItem = ({ title, image, description, cost }) => {
  const notify = () => toast("Ваш заказ принято😁");

  return (
    <StyledDiv>
      <section>
        <img src={image} alt="" />
        <div>
          <p>{title}</p>
          <b>{description}</b>
          <p>{cost} сом</p>
          <div>
            <button onClick={notify}>Заказать</button>
            <ToastContainer />
          </div>
        </div>
      </section>
    </StyledDiv>
  );
};

export default UserItem;
