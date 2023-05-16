import { Dispatch } from "@reduxjs/toolkit";
import { messagesActions } from "./messagesReducer";
import uniqid from "uniqid";


interface IRequestData {
  url: string;
  method: "get" | "post" | "delete";
  body?: Record<string, unknown>;
  inputValue: string;
  activeNumber: string;
  headers?: Record<string, string>;
  typeMessage: "sended" | "recived";
}

export const messageRequestAsync =
  (data: IRequestData) => (dispatch: Dispatch) => {
    const { activeNumber, inputValue, method, headers, body, url , typeMessage} = data;
    if (activeNumber === "") return;

    try {
      const options: Record<string, unknown> = {
        method: method,
      };
      if (headers) options.headers = headers;
      if (body) options.body = JSON.stringify(body);
      dispatch(messagesActions.requestSendMessagePending());
      fetch(url, options)
        .then((res) => {
          if(res.ok) return res.json();
          throw new Error(`error with status ${res.status}`)
        })
        .then((data) => {
          dispatch(messagesActions.requestSendMessageSuccess());

          if(method === 'post'){
            dispatch(
              messagesActions.addMessage({
                id: uniqid(),
                text: inputValue,
                date: new Date().toLocaleTimeString(),
                type: typeMessage,
                userNumber: activeNumber,
              })
            );
          }
          if(method === 'get'){
            if (parseInt(data.body?.senderData?.chatId).toString() !== activeNumber) return;
            const recivedMessage = data.body?.messageData?.textMessageData?.textMessage;
            recivedMessage &&  dispatch(
              messagesActions.addMessage({
                id: uniqid(),
                text: recivedMessage,
                date: new Date().toLocaleTimeString(),
                type: typeMessage,
                userNumber: activeNumber,
              })

            );
            const Id = data.receiptId || ''
            console.log('Id: ', Id);
            dispatch(messagesActions.addLastMessageId(Id))
          }

          if(method === 'delete') {
            dispatch(messagesActions.addLastMessageId(''))
          }
        })
        .catch((err) => {
          dispatch(messagesActions.requestSendMessageError());
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

