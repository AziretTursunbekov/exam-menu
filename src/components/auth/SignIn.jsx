import React from "react";
// import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInRequest } from "../../store/thunks/authThunks";
import Button from "../UI/Button";
import { StyledContainer } from "./SignUp";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandle = (userData) => {
    dispatch(signInRequest({ userData, navigate }));
  };

  return (
    <StyledContainer>
      <form onClick={handleSubmit(submitHandle)}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Укажите адрес электронной почты "
              {...register("email", {
                required: {
                  value: true,
                  message: "Введите email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "не правильно введень email",
                },
              })}
            />
            <p>{errors?.email?.message}</p>
          </div>
          <div>
            <input
              type="password"
              placeholder="Введите пароль "
              {...register("password", {
                required: {
                  value: true,
                  message: "Введите password",
                },
                minLength: {
                  value: 6,
                  message: "пароль должен быть неменее 6 символов",
                },
                maxLength: {
                  value: 15,
                  message: "слишком много ",
                },
              })}
            />
            <p>{errors?.password?.message}</p>
          </div>
          <Button type="submit">Продолжить</Button>
        </div>
        <section>
          <h4>
            <Link to={"/register"}>Зарегистрировать аккаунт</Link>
          </h4>
        </section>
      </form>
    </StyledContainer>
  );
};
