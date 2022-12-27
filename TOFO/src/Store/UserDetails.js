import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    Users:""
}
let UserDetails=[{
    "Email":"Test@gmail.com",
    "Password":"Test@123"
},
{
    "Email":"Test1@gmail.com",
    "Password":"Test1@123"
},
{
    "Email":"Test2@gmail.com",
    "Password":"Test2@123"
}]
const SignUpSlice =createSlice({
    name:'SignUpSlice',
    initialState,
    reducers:{
        getDetails: (state)=>{
            state.Users=UserDetails
        }
    }
})
export const {getDetails}=SignUpSlice.actions;
export default SignUpSlice.reducer;