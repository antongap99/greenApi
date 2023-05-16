import { Avatar } from '../../Avatar/Avatar';
import style from './ChatHeader.module.css';
import { Menu } from './MenuBtn/Menu';

export const ChatHeader = () => {
  return (
    <header className = {style.header}>
      <Avatar/>
      <Menu/>
    </header>
  );
};


