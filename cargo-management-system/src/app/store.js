import {configureStore} from '@reduxjs/toolkit';
import companyReducer from '../app/features/company/companySlice'
export const store = configureStore({
    reducer: companyReducer
});