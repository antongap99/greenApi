---
to: <%= absPath %>/<%= pages_name %>.tsx
---
import { FC } from 'react';
import style from './<%= pages_name %>.module.css';

interface Props {
  children?: FC;
}

export const <%= pages_name %> = (props:Props) => {
  return <div className = {style.container}></div>;
};


