import { configureStore } from "@reduxjs/toolkit";
import postsReducer, {postsFetch} from "./postsSlice";


export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
});

store.dispatch(postsFetch());