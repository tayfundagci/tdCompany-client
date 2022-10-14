import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// userLogin
export const userLogin = createAsyncThunk(
    "auth/userLogin",
    async (user) => {
        const res = await axios.post("http://localhost:5279/api/auth/login", user);
        return res.data;
    }
)

export const userRegister = createAsyncThunk(
    "auth/userRegister",
    async (user) => {
        const res = await axios.post("http://localhost:5279/api/auth/register", user);
        return res.data;
    }
)
