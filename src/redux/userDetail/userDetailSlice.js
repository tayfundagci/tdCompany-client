import { createSlice } from "@reduxjs/toolkit";
import { addUserDetail, fetchUserDetail, updateUserDetail } from "./services";

export const userDetailSlice = createSlice({
    name: "userdetail",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {

        //fetchUserDetail
        [fetchUserDetail.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchUserDetail.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchUserDetail.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //addUserDetail
        [addUserDetail.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addUserDetail.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [addUserDetail.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //updateUserDetail
        [updateUserDetail.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateUserDetail.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [updateUserDetail.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }

    }
});

export default userDetailSlice.reducer;
