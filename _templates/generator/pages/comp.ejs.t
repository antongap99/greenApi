---
to: <%= absPath %>/<%= page_name %>.tsx
---
import { FC } from 'react';
import style from './<%= page_name %>.module.css';

interface Props {
  children?: FC;
}

export const <%= page_name %> = (props:Props) => {
  return <div className = {style.container}></div>;
};


