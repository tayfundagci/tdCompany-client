import { createSlice } from "@reduxjs/toolkit";
import { addEmployee, deleteEmployee, fetchAllEmployee, fetchEmployee, updateEmployee } from "./services";

export const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        //fetchAllEmployee
        [fetchAllEmployee.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchAllEmployee.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchAllEmployee.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

        //fetchEmployee
        [fetchEmployee.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchEmployee.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = false;
        },
        [fetchEmployee.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

        //addEmploye
        [addEmployee.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addEmployee.fulfilled]: (state, action) => {
            state.items = action.payload
        },
        [addEmployee.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

        //updateEmployee
        [updateEmployee.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateEmployee.fulfilled]: (state, action) => {
            state.items = action.payload
        },
        [updateEmployee.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

        //deleteEmployee
        [deleteEmployee.pending]: (state, action) => {
            state.isLoading = true;
        },
        [deleteEmployee.fulfilled]: (state, action) => {
            state.items = action.payload
        },
        [deleteEmployee.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

    }
});

export default employeeSlice.reducer;
export const selectEmployee = (state) => state.employee.items;
