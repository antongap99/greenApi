import { FC } from "react";
import style from "./ChatList.module.css";
import { ContactList } from "./ContactList/ContactList";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { AddContact } from "./AddContact/AddContact";

interface Props {
  children?: FC;
}

export const ChatList = (props: Props) => {
  return (
    <aside className={style.chatList}>
      <ChatHeader />
      <AddContact />
      <ContactList />
    </aside>
  );
};
