import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserDetail = createAsyncThunk(
    "userdetail/fetchUserDetail",
    async () => {
        const res = await axios(`http://localhost:5279/api/userdetail/${localStorage.getItem("id")}`);
        return res.data;
    }
);

export const addUserDetail = createAsyncThunk(
    "userdetail/addUserDetail",
    async (userDetail) => {
        const res = await axios.post("http://localhost:5279/api/userdetail/", userDetail);
        return res.data;
    }
);




