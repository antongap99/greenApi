import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./authSlice/authReducer";
import  contactsReducer  from "./contactSlice/contactReducer";
import  messagesReducer  from "./messagesSlice/messagesReducer";


export const store  = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    messages: messagesReducer,
  },
  middleware: (getDefualtMiddleware) => getDefualtMiddleware()
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch