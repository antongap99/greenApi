import style from './SendForm.module.css';
import { Button } from '../../Button/Button';
import { FormEvent } from 'react';
import { useAppDispatch } from '../../../redux/redux-hooks/hooks';
import { messagesActions } from '../../../redux/messagesSlice/messagesReducer';
import uniqid from 'uniqid';


export const SendForm = () => {
  const dispatch = useAppDispatch()
  const onSubmitHandle = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    if(target.input.value === '') return;
    dispatch(messagesActions.addMessage({
      id: uniqid(),
      text: target.input.value,
      date: new Date().toLocaleTimeString(),
      type: 'sended'
    }))
    console.log(target.input.value);
  }

  return (
    <div className = {style.wrapper}>
      <form className={style.form} onSubmit={onSubmitHandle}>
        <input name='input' className={style.sendInput} type="text" />
        <Button type='button' text='Обновить'/>
        <Button type='submit' text='Отправить'/>
      </form>
    </div>
  );
};


