import style from './Message.module.css';
import cn from 'classnames'
interface Props {
  text:string,
  date: string,
  type: 'recived' | 'sended',
}

export const Message = ({type, text, date}:Props) => {
  return (
    <li className = {cn(style.message, {
      'recived': type ===  'recived',
      'sended': type ===  'sended',
    }) }>
      <p className={style.text}>{text}</p>
      <p className={style.date}>Отправлено в {date}</p>
    </li>
  );
};


