import style from './AddContactForm.module.css';
import { InputGroup } from '../../../login/InputGroup/InputGroup';
import { Button } from '../../../Button/Button';
import { InputType } from '../../../../Types/types';
import { FormEvent } from 'react';
import { useAppDispatch } from '../../../../redux/redux-hooks/hooks';
import { contactsActions } from '../../../../redux/contactSlice/contactReducer';
import uniqid from 'uniqid';


interface Props {
  close: (bool:boolean)=>void
}

export const AddContactForm = ({close}:Props) => {
  const dispatch = useAppDispatch();

  const onSumbitHadle = (e:FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    e.preventDefault();
    dispatch(contactsActions.addContact({
      id: uniqid(),
      name: target.userName.value,
      tel: target.tel.value,
      active: false
    }))
    close(false);
  }

  return (
    <form className = {style.form} onSubmit={onSumbitHadle}>
      <InputGroup formName='userName' name='имя' type={InputType.Text}/>
      <InputGroup formName='tel' name='номер телефона' type={InputType.Tel}/>
      <Button text='добавить' type='submit'/>
    </form>
  );
};


