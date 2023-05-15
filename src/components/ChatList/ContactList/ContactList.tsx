import style from './ContactList.module.css';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks/hooks';
import { contactsActions } from '../../../redux/contactSlice/contactReducer';


export const ContactList = () => {
  const contacts = useAppSelector(state => state.contacts.contacts);
  const dispatch = useAppDispatch()
  const onClickHandle = (id:string) => {
    dispatch(contactsActions.activateContact(id))
  }
  return (
    <ul className = {style.contactList}>
      {contacts.map(contact => <ContactListItem key={contact.id} data={contact}  onClickHandle={onClickHandle}/>)}
    </ul>
  );
};


