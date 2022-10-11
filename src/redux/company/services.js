import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCompany = createAsyncThunk(
    "company/fetchCompany",
    async () => {
        const res = await axios("http://localhost:5279/api/companies/");
        return res.data;
    }
);

