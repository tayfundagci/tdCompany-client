import { createSlice } from "@reduxjs/toolkit";
import { addCompany, deleteCompany, fetchCompany, getCompanyPerson, updateCompany } from "./services";

export const companySlice = createSlice({
    name: "company",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        {
            //fetchCompany
            builder.addCase(fetchCompany.pending, (state, action) => {
                state.isLoading = true;
            })
            builder.addCase(fetchCompany.fulfilled, (state, action) => {
                state.items = action.payload
                state.isLoading = false;
            })
            builder.addCase(fetchCompany.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            //fetchCompanyPerson
            builder.addCase(getCompanyPerson.pending, (state, action) => {
                state.isLoading = true;
            })
            builder.addCase(getCompanyPerson.fulfilled, (state, action) => {
                state.items = action.payload
                state.isLoading = false;
            })
            builder.addCase(getCompanyPerson.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            //addCompany
            builder.addCase([addCompany.pending], (state, action) => {
                state.isLoading = true;
            })
            builder.addCase(addCompany.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            builder.addCase(addCompany.rejected, (state, action) => {
                state.isLoading = false;
                //action.error.message = "UnAuthorized !";
                state.error = action.error.message;
            })

            //updateCompany
            builder.addCase(updateCompany.pending, (state, action) => {
                state.isLoading = true;
            })
            builder.addCase(updateCompany.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            builder.addCase(updateCompany.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            //deleteCompany
            builder.addCase(deleteCompany.pending, (state, action) => {
                state.isLoading = true;
            })
            builder.addCase(deleteCompany.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            builder.addCase(deleteCompany.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
        }
    }
});

export default companySlice.reducer;
