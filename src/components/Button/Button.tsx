import style from "./Button.module.css";
import cn from "classnames";


export type ButtonType = "submit" | "button" | "reset" | undefined;

interface Props {
  type: ButtonType;
  text: string;
  classname?:string
  handle?: () => void;
}




export const Button = ({ classname, type, text, handle }: Props) => {
  return (
    <button
      type={type}
      className={cn(style.submit, {
        primary: type === "submit",
        defualt: type !== "submit",
        logout: classname
      })}
      onClick={() => {
        handle && handle()
      }}
    >
      {text}
    </button>
  );
};
