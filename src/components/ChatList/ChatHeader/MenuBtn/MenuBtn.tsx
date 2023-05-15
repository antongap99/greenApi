import style from "./MenuBtn.module.css";
import { MenuPoint } from "./MenuPoint/MenuPoint";

export const MenuBtn = () => {
  return (
    <button className={style.menu}>
      <MenuPoint />
      <MenuPoint />
      <MenuPoint />
    </button>
  );
};
