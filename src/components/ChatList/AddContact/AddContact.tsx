import style from './AddContact.module.css';

export const AddContact = () => {
  return (
    <div className = {style.addContact}>
      <button className={style.addBtn}>Добавить контакт</button>
    </div>
  );
};


