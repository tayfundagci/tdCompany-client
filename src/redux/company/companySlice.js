import { createSlice } from "@reduxjs/toolkit";
import { addCompany, deleteCompany, fetchCompany, updateCompany } from "./services";

export const companySlice = createSlice({
    name: "company",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        //fetchCompany
        [fetchCompany.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchCompany.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchCompany.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

        //addCompany
        [addCompany.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addCompany.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [addCompany.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

        //updateCompany
        [updateCompany.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateCompany.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [updateCompany.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

        //deleteCompany
        [deleteCompany.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    }
});

export default companySlice.reducer;
