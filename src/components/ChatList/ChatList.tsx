import style from "./ChatList.module.css";
import { ContactList } from "./ContactList/ContactList";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { AddContact } from "./AddContact/AddContact";


export const ChatList = () => {
  return (
    <aside className={style.chatList}>
      <ChatHeader />
      <AddContact />
      <ContactList />
    </aside>
  );
};
