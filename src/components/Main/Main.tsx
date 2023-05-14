import { useState, FC} from 'react';
import style from './Main.module.css';

interface Props {
  children?: FC;
}

export const Main = (props:Props) => {
  return (
    <div className = {style.container}>
      <aside className={style.chatList}>
        список чатов
      </aside>
      <section className={style.chat}></section>
    </div>
  );
};


