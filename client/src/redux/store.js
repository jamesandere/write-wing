import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "./authSlice";
import postsReducer, {postsFetch} from "./postsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
    }
});

store.dispatch(postsFetch());