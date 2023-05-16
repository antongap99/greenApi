import { useState } from "react";
import style from "./Menu.module.css";
import { MenuPoint } from "./MenuPoint/MenuPoint";
import { Button } from "../../../Button/Button";
import { useAppDispatch } from "../../../../redux/redux-hooks/hooks";
import { authActions } from "../../../../redux/authSlice/authReducer";
import { useNavigate } from "react-router-dom";
import { contactsActions } from "../../../../redux/contactSlice/contactReducer";

export const Menu = () => {
  const [showLogout, setShowLogout] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const onClickHandle = () => {
    setShowLogout(!showLogout);
  };

  const logout = () => {
    dispatch(authActions.deleteToken());
    dispatch(contactsActions.deleteAllContacts());
    setShowLogout(!showLogout);
    navigate('/')
  }

  return (
    <>
      <div className={style.menu} onClick={onClickHandle}>
        <MenuPoint />
        <MenuPoint />
        <MenuPoint />
      {showLogout && <Button classname="logout" text="Выйти" type='button' handle={logout} />}
      </div>
    </>
  );
};
