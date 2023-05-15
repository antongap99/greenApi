import { useState } from 'react';
import style from './AddContact.module.css';
import { AddContactForm } from './AddContactForm/AddContactForm';

export const AddContact = () => {
  const [showForm, setShowForm] = useState<boolean>(false)

  return (
    <div className = {style.addContact}>
      <button className={style.addBtn} onClick={()=> setShowForm(!showForm)}>Добавить контакт</button>
      {showForm && <AddContactForm close={setShowForm}/>}
    </div>
  );
};


