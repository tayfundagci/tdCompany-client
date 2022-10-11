import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCompany = createAsyncThunk(
    "company/fetchCompany",
    async () => {
        const res = await axios("http://localhost:5279/api/companies/");
        return res.data;
    }
);

export const deleteCompany = createAsyncThunk(
    "company/deleteCompany",
    async (id) => {
        await axios.delete(`http://localhost:5279/api/companies/${id}`);
        return id;
    }
);

