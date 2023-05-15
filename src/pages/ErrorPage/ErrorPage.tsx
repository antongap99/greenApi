import style from './ErrorPage.module.css';

export const ErrorPage = () => {

  return (
    <div className={style.error}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};


