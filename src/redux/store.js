import { configureStore } from '@reduxjs/toolkit'
import companySlice from './company/companySlice'
import employeeSlice from './employee/employeeSlice'

export const store = configureStore({
    reducer: {
        company: companySlice,
        employee: employeeSlice
    },
})