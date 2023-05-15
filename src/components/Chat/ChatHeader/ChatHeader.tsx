import { useAppSelector } from '../../../redux/redux-hooks/hooks';
import style from './ChatHeader.module.css';

export const ChatHeader = () => {

  const contacts = useAppSelector(state => state.contacts.contacts)
  const acitveContacts = contacts.find(contact => contact.active === true);
  return (
    <header className = {style.header}>
      <h1 className={style.title}>{acitveContacts ? acitveContacts.name: 'Green Api'}</h1>
    </header>
  );
};


