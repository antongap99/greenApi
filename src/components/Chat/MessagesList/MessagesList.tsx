import { useAppSelector } from "../../../redux/redux-hooks/hooks";
import { Message } from "../Message/Message";
import style from "./MessagesList.module.css";

export const MessagesList = () => {
  const messages = useAppSelector((state) => state.messages.messages);
  return (
    <div className={style.wrapper}>
      <div className={style.listWrapper}>
        <ul className={style.list}>
          {messages.map((message) => (
            <Message key={message.id} type={message.type} text={message.text} date={message.date} />
          ))}
        </ul>
      </div>
    </div>
  );
};
