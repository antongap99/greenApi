import { FC } from 'react';
import style from './ContactList.module.css';
import { ContactListItem } from './ContactListItem/ContactListItem';

interface Props {
  children?: FC;
}

export const ContactList = (props:Props) => {
  return (
    <ul className = {style.contactList}>
      <ContactListItem tel={'+7-(928)-361-47-60'}/>
    </ul>
  );
};


