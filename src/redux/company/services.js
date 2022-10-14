import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCompany = createAsyncThunk(
    "company/fetchCompany",
    async () => {
        const res = await axios("http://localhost:5279/api/companies/");
        return res.data;
    }
);

export const getCompanyPerson = createAsyncThunk(
    "company/getCompanyPerson",
    async () => {
        const res = await axios("http://localhost:5279/api/companies/getcompanyperson");
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

export const addCompany = createAsyncThunk(
    "company/addCompany",
    async (company) => {
        const res = await axios.post("http://localhost:5279/api/companies/", company);
        return res.data;
    }
);

export const updateCompany = createAsyncThunk(
    "company/updateCompany",
    async (company) => {
        const response = await axios.put(`http://localhost:5279/api/companies/${company.id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: company

        })
        return response.data;
    }
);


