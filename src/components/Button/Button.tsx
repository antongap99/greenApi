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

const idInstance = 1101820960;
const apiToken =  'a86af254e4b344708a9b75e7b4b71164133ea5aebc104a1a8b';

const receiveMessage = async () => {
  try {
    console.log(2);
    const data = await fetch(`${apiHost}waInstance${idInstance}/receiveNotification/${apiToken}`);
    const res = await data.json()
    console.log('res: ', res);


  } catch (error) {
    console.log('error: ', error);
  }
}

export const Button = ({ type, text }: Props) => {
  return (
    <button
      type={type}
      className={cn(style.submit, {
        primary: type === "submit",
        defualt: type !== "submit",
      })}
      onClick={() => {
        receiveMessage()
      }}
    >
      {text}
    </button>
  );
};
