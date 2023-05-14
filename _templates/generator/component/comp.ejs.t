---
to: <%= absPath %>/<%= component_name %>.tsx
---
import { FC } from 'react';
import style from './<%= component_name %>.module.css';

interface Props {
  children?: FC;
}

export const <%= component_name %> = (props:Props) => {
  return <div className = {style.container}></div>;
};


