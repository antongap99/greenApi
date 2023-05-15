import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./authSlice/reducer";


export const store  = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefualtMiddleware) => getDefualtMiddleware()
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch