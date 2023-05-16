import style from './SendForm.module.css';
import { Button } from '../../Button/Button';
import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/redux-hooks/hooks';
import { messageRequestAsync } from '../../../redux/messagesSlice/messagesActions';
import { apiHost } from '../../../const/const';


export const SendForm = () => {
  const dispatch = useAppDispatch();
  const activeNumber = useAppSelector(state => state.contacts.activeNumber);
  const lastMessageId = useAppSelector(state => state.messages.lastMessageId)
  const {idInstance, apiToken} = useAppSelector(state => state.auth);

  const onSubmitHandle = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!activeNumber) return;
    const target = e.target as HTMLFormElement;
    if(target.input.value === '') return;
    dispatch(messageRequestAsync({
      url: `${apiHost}/waInstance${idInstance}/SendMessage/${apiToken}`,
      method: "post",
      body: {
        chatId: `${activeNumber}@c.us`,
        message: target.input.value
      },
      inputValue: target.input.value ,
      activeNumber: activeNumber,
      headers: {
        'Content-Type': 'application/json'
      },
      typeMessage: "sended",
    }))
  }

  const receiveMessage = () => {
    if(!activeNumber) return;
    dispatch(messageRequestAsync({
      url: `${apiHost}waInstance${idInstance}/receiveNotification/${apiToken}`,
      method: "get",
      activeNumber: activeNumber,
      typeMessage: "recived",
      inputValue:'',
    }))

    dispatch(messageRequestAsync({
      url: `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiToken}/${lastMessageId}`,
      method: "delete",
      activeNumber: activeNumber,
      typeMessage: "recived",
      inputValue:'',
    }))
  }


  return (
    <div className = {style.wrapper}>
      <form className={style.form} onSubmit={onSubmitHandle}>
        <input name='input' className={style.sendInput} type="text" />
        <Button type='button' text='Обновить'  handle={receiveMessage}/>
        <Button type='submit' text='Отправить'/>
      </form>
    </div>
  );
};


