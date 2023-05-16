import { FormEvent } from "react";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/redux-hooks/hooks";
import { authActions } from "../../redux/authSlice/authReducer";
import { Button } from "../Button/Button";
import { InputGroup } from "./InputGroup/InputGroup";
import { InputType } from "../../Interfaces/types";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = {
      idInstance: target.idInstance.value,
      apiToken: target.apiTokenInstance.value,
    };

    if (data.apiToken && data.idInstance) {
      dispatch(authActions.setTokens({
        idInstance: data.idInstance,
        apiToken: data.apiToken,
      }));
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
