import { createSlice } from "@reduxjs/toolkit";
import { deleteCompany, fetchCompany } from "./services";

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

        //deleteCompany
        [deleteCompany.fulfilled]: (state, action) => {
            state.items.id = state.items.companyList.filter(item => item.id !== action.payload);
        }
    }
});

export default companySlice.reducer;
