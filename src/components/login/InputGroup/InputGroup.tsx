import { InputType } from "../../../Interfaces/types";
import style from "./InputGroup.module.css";




interface Props {
  formName:string
  name: string,
  type: InputType
}

export const InputGroup = ({formName, name, type}: Props) => {
  return (
    <div className={style.inputGroup}>
      <label htmlFor={name} className={style[name]}>
        Введите {name}
      </label>
      <input
        name={formName}
        type={type}
        className={style.input}
        id={name}
      />
    </div>
  );
};
