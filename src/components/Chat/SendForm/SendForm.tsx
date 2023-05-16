import style from './SendForm.module.css';
import { Button } from '../../Button/Button';
import { FormEvent } from 'react';
import { useAppDispatch } from '../../../redux/redux-hooks/hooks';
import { messagesActions } from '../../../redux/messagesSlice/messagesReducer';
import uniqid from 'uniqid';
import { apiHost } from '../../../const/domain';


const idInstance = 1101820960;
const apiToken =  'a86af254e4b344708a9b75e7b4b71164133ea5aebc104a1a8b';

export const SendForm = () => {
  const dispatch = useAppDispatch()
  const onSubmitHandle = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    if(target.input.value === '') return;
    fetch(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiToken}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "chatId": "79818797351@c.us",
        "message": target.input.value
    })
    }).then((data) => {
      console.log(data);
      console.log('отправка');
    }).catch((err) => {
      console.log('не получилось');
    })
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
        <Button type='submit' text='Отправить' />
      </form>
    </div>
  );
};


