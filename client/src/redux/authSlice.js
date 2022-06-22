import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "./api";
import jwtDecode from 'jwt-decode';

const initialState = {
    token: localStorage.getItem('token'),
    firstName: '',
    lastName: '',
    email: '',
    _id: '',
    registerStatus: '',
    registerError: '',
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (user, {rejectWithValue}) => {
        try {
            const token = await axios.post(`${url}/register`, {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
            });

            localStorage.setItem("token", token.data);

            return token.data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return {
                ...state,
                registerStatus: "pending"
            }
        });

        builder.addCase(registerUser.fulfilled, (state, action) => {
            if(action.payload){
                const user = jwtDecode(action.payload);

                return {
                    ...state,
                    token: action.payload,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    _id: user._id,
                    isAdmin: user.isAdmin,
                    registerStatus: "success"
                }
            } else {
                return state;
            }
        });

        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: "rejected",
                registerError: action.payload,
            }
        });
    }
});

export default authSlice.reducer;