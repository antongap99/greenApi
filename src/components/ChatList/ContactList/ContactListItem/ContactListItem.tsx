import style from './ContactListItem.module.css';
import cn from 'classnames'
import { Avatar } from '../../../Avatar/Avatar';

interface Props {
  data: {
    tel: string;
    name: string | null,
    id: string,
    active: boolean
  }
  onClickHandle: (id:string) => void
}

export const ContactListItem = ({onClickHandle, data}:Props) => {


  return (
    <li className={cn(style.contactItem, {
      'active': data.active
    })} onClick={() => onClickHandle(data.id)}>
      <Avatar/>
      <span  className={style.name}>{data.name ? data.name: 'noName'}</span>
      <span className={style.tel}>{data.tel}</span>
    </li>
  );
};


