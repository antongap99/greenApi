import { MouseEventHandler } from "react";
import style from "./Button.module.css";
import cn from "classnames";
import { MouseEvent } from "react";
import { apiHost } from "../../const/domain";

export type ButtonType = "submit" | "button" | "reset" | undefined;

interface Props {
  type: ButtonType;
  text: string;
  handle?: () => void;
}




export const Button = ({ type, text, handle }: Props) => {
  return (
    <button
      type={type}
      className={cn(style.submit, {
        primary: type === "submit",
        defualt: type !== "submit",
      })}
      onClick={() => {
        handle && handle()
      }}
    >
      {text}
    </button>
  );
};
