import { MouseEventHandler } from "react";
import style from "./Button.module.css";
import cn from "classnames";
import { MouseEvent } from "react";


export type ButtonType = "submit" | "button" | "reset" | undefined

interface Props {
  type: ButtonType,
  text:string,
  handle?: ()=> void
}

export const Button = ({type, text, handle }: Props) => {

  // const onClickHandle: MouseEventHandler  = (e) => {
  //   handle && handle(e)
  // }

  return (
    <button
      type={type}
      className={cn(style.submit, {
        primary: type === "submit",
        defualt: type !== "submit",
      })}
    >
      {text}
    </button>
  );
};
