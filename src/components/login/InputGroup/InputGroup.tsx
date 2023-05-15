import style from "./InputGroup.module.css";

interface Props {
  name: string
}

export const InputGroup = ({name}: Props) => {
  return (
    <div className={style.inputGroup}>
      <label htmlFor={name} className={style[name]}>
        Введите {name}
      </label>
      <input
        name={name}
        type="text"
        className={style.input}
        id={name}
      />
    </div>
  );
};
