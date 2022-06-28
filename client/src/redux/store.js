import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadUser }  from "./authSlice";
import postsReducer, {postsFetch} from "./postsSlice";
import usersReducer, { usersFetch } from "./usersSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
        users: usersReducer,
    }
});

store.dispatch(postsFetch());
store.dispatch(loadUser(null));
store.dispatch(usersFetch(null));