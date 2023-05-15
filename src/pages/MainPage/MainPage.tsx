import style from './Main.module.css';
import { ChatList } from '../../components/ChatList/ChatList';
import { Chat } from '../../components/Chat/Chat';

export const MainPage = () => {
  return (
    <div className = {style.container}>
      <ChatList/>
      <Chat/>
    </div>
  );
};


