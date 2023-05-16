import style from './ContactList.module.css';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks/hooks';
import { contactsActions } from '../../../redux/contactSlice/contactReducer';
import { messagesActions } from '../../../redux/messagesSlice/messagesReducer';


export const ContactList = () => {
  const contacts = useAppSelector(state => state.contacts.contacts);
  const dispatch = useAppDispatch()
  const onClickHandle = (data: {id:string, tel:string}) => {
    dispatch(contactsActions.activateContact(data.id));
    dispatch(messagesActions.addMessagesUser(data.tel));
  }
  return (
    <ul className = {style.contactList}>
      {contacts.map(contact => <ContactListItem key={contact.id} data={contact}  onClickHandle={onClickHandle}/>)}
    </ul>
  );
};


