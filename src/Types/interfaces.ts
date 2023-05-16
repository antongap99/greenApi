export interface IAuthAction {
  type: string;
  payload: {
    data?: Record<string, unknown> | string;
    error: string;
  };
}

export interface ContactsState {
  contacts: IContact[]
  activeNumber: string
}

export interface authState {
  idInstance:string | null;
  apiToken:string | null;
}

export interface IContact {
  id: string;
  tel: string;
  name: string | null;
  active: boolean;
}

export interface IContactsAction {
  type: string;
  payload: IContact;
}

export interface IActivateAction {
  type: string;
  payload: string;
}


export enum Statuses {
  Start = "start",
  Success = "success",
  Pending = "pending",
  Rejected = "rejected",
}

export interface MessagesState {
  requestStatus: Statuses
  messages: Record<string, IMessages[]>
  lastMessageId:string
}

export interface IMessagesAction {
  type: string;
  payload: IMessages;
}

export interface IMessages {
  id: string;
  userNumber: string,
  text: string;
  date: string;
  type: "recived" | "sended";
}
