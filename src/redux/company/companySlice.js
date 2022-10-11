import { createSlice } from "@reduxjs/toolkit";
import { fetchCompany } from "./services";

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
    }
});

export default companySlice.reducer;
