import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";

const initialState = {
    users: [],
    usersStatus: ''
}

export const usersFetch = createAsyncThunk(
    "users/usersFetch",
    async () => {
        try {
            const response = await axios.get(`${url}/users`, setHeaders());
            return response?.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(usersFetch.pending, (state, action) => {
            return {...state, usersStatus: "pending"}
        });

        builder.addCase(usersFetch.fulfilled, (state, action) => {
            return {
                ...state,
                usersStatus: "success",
                users: action.payload,
            }
        });
    }
});

export default usersSlice.reducer;