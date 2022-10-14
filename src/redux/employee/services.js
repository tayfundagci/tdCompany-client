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

export const deleteEmployee = createAsyncThunk(
    "employee/deleteEmployee",
    async (id) => {
        await axios.delete(`http://localhost:5279/api/employees/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
            });
        return id;
    }
);

export const addEmployee = createAsyncThunk(
    "employee/addEmployee",
    async (employee) => {
        const res = await axios.post("http://localhost:5279/api/employees/", employee, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        });
        return res.data;
    }
);

export const updateEmployee = createAsyncThunk(
    "employee/updateEmployee",
    async (employee) => {
        const res = await axios.put(`http://localhost:5279/api/employees/${employee.id}`, employee,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
            });
        return res.data;
    }
);


