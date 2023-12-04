import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyDetails: {}
}

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        getDetails: (state, action)=>{
            state.companyDetails = action.payload;
        }
    }
})

export const {getDetails} = companySlice.actions
export default companySlice.reducer