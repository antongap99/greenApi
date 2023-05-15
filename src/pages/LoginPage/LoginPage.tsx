import { FC } from 'react';
import style from './LoginPage.module.css';
import { Login } from '../../components/login/Login';

interface Props {
  children?: FC;
}

export const LoginPage = (props:Props) => {
  return (
    <div className={style.wrapper}>
      <Login/>
    </div>
  );
};


