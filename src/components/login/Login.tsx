import { FC, FormEvent } from 'react';
import style from './login.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  children?: FC;
}

export const Login = (props: Props) => {
  const navigate = useNavigate()

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target.username);
    navigate(`/${target.username[0].value}`)
  }

  return (
    <form className={style.container} onSubmit={(e)=> submitHandle(e)}>
      <fieldset>
        <div className={style.inputGroup}>
          <label htmlFor="username" className={style.username}>Имя</label>
          <input name='username' type="text" className={style.name} id="username" />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="surname" className={style.surname}>Фамилия</label>
          <input name='username' type="text" className={style.name} id='surname' />
        </div>
        <div className={style.telGroup}>
          <label htmlFor="tel" className={style.tel}>Номер телефона</label>
          <input name='username' type="tel" className={style.tel} id='tel' />
        </div>
      </fieldset>
      <button type="submit" className={style.submit}>Авторизоваться</button>
    </form>
  );
};


