import style from './LoginPage.module.css';
import { Login } from '../../components/login/Login';


export const LoginPage = () => {
  return (
    <div className={style.wrapper}>
      <Login/>
    </div>
  );
};


