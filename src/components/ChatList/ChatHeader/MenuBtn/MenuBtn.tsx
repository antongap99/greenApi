import { useState } from "react";
import style from "./MenuBtn.module.css";
import { MenuPoint } from "./MenuPoint/MenuPoint";
import { Button } from "../../../Button/Button";
import { useAppDispatch } from "../../../../redux/redux-hooks/hooks";
import { authActions } from "../../../../redux/authSlice/authReducer";
import { useNavigate } from "react-router-dom";

export const MenuBtn = () => {
  const [showLogout, setShowLogout] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const onClickHandle = () => {
    setShowLogout(!showLogout);
  };

  const logout = () => {
    dispatch(authActions.deleteToken());
    setShowLogout(!showLogout);
    navigate('/')
  }

  return (
    <>
      <button className={style.menu} onClick={onClickHandle}>
        <MenuPoint />
        <MenuPoint />
        <MenuPoint />
      {showLogout && <Button classname="logout" text="Выйти" type='button' handle={logout} />}
      </button>
    </>
  );
};
