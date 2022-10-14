import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./services";

const getLocalStorage = () => {
    let user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(localStorage.getItem("user"));
    } else {
        return { isLoggedIn: false };
    }
};

export const userSlice = createSlice({
    name: "auth",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        isLoggedin: false,
        userData: getLocalStorage('user')
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
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.isLoggedin = true;
        },
        [userLogin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isLoggedin = false;
        },

        //userRegister
        [userRegister.pending]: (state, action) => {
            state.isLoading = true;
            state.isLoggedin = false;
        },
        [userRegister.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
        },
        [userRegister.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isLoggedin = false;
        }
    }
});

export default userSlice.reducer;
export const selectUser = (state) => state.auth.token;
