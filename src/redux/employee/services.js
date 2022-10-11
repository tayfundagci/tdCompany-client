import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllEmployee = createAsyncThunk(
    "employee/fetchAllEmployee",
    async () => {
        const res = await axios("http://localhost:5279/api/employees/");
        return res.data;
    }
);

export const fetchEmployee = createAsyncThunk(
    "employee/fetchEmployee",
    async (id) => {
        const res = await axios(`http://localhost:5279/api/employees/${id}`);
        return res.data;
    }
);

