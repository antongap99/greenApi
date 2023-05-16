import { IMessages } from "../../../Interfaces/interfaces";
import { useAppSelector } from "../../../redux/redux-hooks/hooks";
import { Message } from "../Message/Message";
import style from "./MessagesList.module.css";

export const MessagesList = () => {
  const messages = useAppSelector((state) => state.messages.messages);
  const activeNumber = useAppSelector((state) => state.contacts.activeNumber);

  const renderMessage = (messages:IMessages[]): JSX.Element[] => {
    const reversed = [...messages];
    reversed.reverse();

    return reversed.map((message) => (
      <Message
        key={message.id}
        type={message.type}
        text={message.text}
        date={message.date}
      />
    ))
  }

  return (
    <div className={style.wrapper}>
      <div className={style.listWrapper}>
        <ul className={style.list}>
          {activeNumber ? (
            messages[activeNumber].length !== 0 && renderMessage(messages[activeNumber])
          ) : (
            <div className={style.chooseWrapper}>
              <p className={style.choose}>Выберите чат</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
