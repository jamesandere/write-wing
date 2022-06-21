import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  fetchStatus: null,
  createStatus: null,
};

export const postsFetch = createAsyncThunk("posts/postsFetch", async () => {
  try {
    const response = await axios.get(`${url}/posts`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
});

export const postsCreate = createAsyncThunk(
  "posts/postsCreate",
  async (posts) => {
    try {
      const response = await axios.post(`${url}/posts`, posts);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const postsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [postsFetch.pending]: (state, action) => {
      state.fetchStatus = "pending";
    },
    [postsFetch.fulfilled]: (state, action) => {
      state.fetchStatus = "success";
      state.items = action.payload;
    },
    [postsFetch.rejected]: (state, action) => {
      state.fetchStatus = "rejected";
    },
    [postsCreate.pending]: (state, action) => {
        state.createStatus = "pending";
    },
    [postsCreate.fulfilled]: (state, action) => {
        state.createStatus = "success";
        state.items.push(action.payload);
    },
    [postsCreate.rejected]: (state, action) => {
        state.createStatus = "rejected";
    }
  },
});

export default postsSlice.reducer;
