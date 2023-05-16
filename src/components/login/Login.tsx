import { FormEvent } from "react";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks/hooks";
import { authActions } from "../../redux/authSlice/reducer";
import { Button } from "../Button/Button";
import { InputGroup } from "./InputGroup/InputGroup";
import { InputType } from "../../types/types";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const access = useAppSelector((state) => state.auth.access);

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = {
      idInstance: target.idInstance.value,
      apiTokenInstance: target.idInstance.value,
    };

    if (data.apiTokenInstance && data.idInstance) {
      dispatch(authActions.auth_success());
      navigate("/auth");
    }
  };

  return (
    <form className={style.form} onSubmit={(e) => submitHandle(e)}>
      <h1 className={style.title}>Введите учетные данные</h1>
      <fieldset className={style.fieldset}>
        <InputGroup
          formName="idInstance"
          name="idInstance"
          type={InputType.Text}
        />
        <InputGroup
          formName="apiTokenInstance"
          name="apiTokenInstance"
          type={InputType.Text}
        />
      </fieldset>
      <Button text="Войти" type='submit' />
    </form>
  );
};
