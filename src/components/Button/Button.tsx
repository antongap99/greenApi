import style from "./Button.module.css";
import cn from "classnames";

export enum ButtonTypes {
  Primary = "primary",
  Defualt = "defualt",
}

interface Props {
  type: ButtonTypes;
}

export const Button = ({ type }: Props) => {
  return (
    <button
      type="submit"
      className={cn(style.submit, {
        primary: type === "primary",
        defualt: type === "defualt",
      })}
    >
      Войти
    </button>
  );
};
