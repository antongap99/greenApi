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
        method,
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
          console.log('data: ', data);
          dispatch(messagesActions.requestSendMessageSuccess());
          dispatch(
            messagesActions.addMessage({
              id: uniqid(),
              text: method === 'post'? inputValue : data.body?.messageData?.textMessageData?.textMessage,
              date: new Date().toLocaleTimeString(),
              type: typeMessage,
              userNumber: activeNumber,
            })
          );
          if(method === 'get'){
            const Id = data.receiptId || ''
            dispatch(messagesActions.addLastMessageId(Id))
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

