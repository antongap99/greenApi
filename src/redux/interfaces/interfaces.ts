
export interface IAuthAction{
  type: string,
  payload: {
    data?:  Record<string, unknown> | string,
    error: string
  }
}

export interface ContactsState {
  contacts:  IContact[],
}


export interface IContact {
  id: string,
  tel: string,
  name: string | null,
  active: boolean
}

export interface IContactsAction {
  type: string,
  payload: IContact
}

export interface IActivateAction {
  type: string,
  payload: string
}

export interface MessagesState {
  messages:  IMessages[],
}


export interface IMessagesAction {
  type: string,
  payload: IMessages
}

export interface IMessages {
  id:string
  text:string,
  date: string,
  type: 'recived' | 'sended'
}