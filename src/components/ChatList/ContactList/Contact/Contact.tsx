import { FC } from 'react';
import style from './Contact.module.css';

interface Props {
  children?: FC;
}

export const Contact = (props:Props) => {
  return <div className = {style.container}></div>;
};


