import { FC } from 'react';
import style from './ErrorPage.module.css';
import { useRouteError } from "react-router-dom";

interface Props {
  children?: FC;
}

interface Error {
  statusText?: string;
  message?: string;
  statusCode?: number
}

export const ErrorPage = (props: Props) => {

  return (
    <div className={style.error}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};


