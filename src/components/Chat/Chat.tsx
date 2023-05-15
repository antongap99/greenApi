import { FC } from 'react';
import style from './Chat.module.css';

interface Props {
  children?: FC;
}

export const Chat = (props:Props) => {
  return (
    <section className={style.chat}>

    </section>
  );
};


