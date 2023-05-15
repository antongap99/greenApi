import style from "./Chat.module.css";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { MessagesList } from "./MessagesList/MessagesList";
import { SendForm } from "./SendForm/SendForm";



export const Chat = () => {
  return (
    <main className={style.chat}>
      <ChatHeader />
      <MessagesList/>
      <SendForm/>
    </main>
  );
};
