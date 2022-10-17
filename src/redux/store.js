import { configureStore } from '@reduxjs/toolkit'
import userSlice from './auth/userSlice'
import companySlice from './company/companySlice'
import employeeSlice from './employee/employeeSlice'
import userDetailSlice from './userDetail/userDetailSlice'

export const store = configureStore({
    reducer: {
        company: companySlice,
        employee: employeeSlice,
        auth: userSlice,
        userdetail: userDetailSlice
    },
})