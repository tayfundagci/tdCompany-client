import { createSlice } from "@reduxjs/toolkit";
import { fetchAllEmployee, fetchEmployee } from "./services";

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
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchEmployee.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

    }
});

export default employeeSlice.reducer;
export const selectEmployee = (state) => state.employee.items;
