import { Avatar } from '../../Avatar/Avatar';
import style from './ChatHeader.module.css';
import { MenuBtn } from './MenuBtn/MenuBtn';

export const ChatHeader = () => {
  return (
    <header className = {style.header}>
      <Avatar/>
      <MenuBtn/>
    </header>
  );
};


