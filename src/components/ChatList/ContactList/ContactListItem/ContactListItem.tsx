import style from './ContactListItem.module.css';
import { Avatar } from '../../../Avatar/Avatar';

interface Props {
  tel: string;
}

export const ContactListItem = ({tel}:Props) => {
  return (
    <li className = {style.contactItem}>
      <Avatar/>
      <span className={style.tel}>{tel}</span>
    </li>
  );
};


