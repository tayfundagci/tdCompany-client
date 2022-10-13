import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./services";

export const userSlice = createSlice({
    name: "auth",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        isLoggedin: false,
    },
    extraReducers: {

        //userLogin
        [userLogin.pending]: (state, action) => {
            state.isLoading = true;
            state.isLoggedin = false;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
            state.isLoggedin = true;
        },
        [userLogin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isLoggedin = false;
        }
    }
});

export default userSlice.reducer;
