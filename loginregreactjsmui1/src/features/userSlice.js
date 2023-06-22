import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email:"",
  name:""
}

export const userSlice = createSlice({
  name: 'auth_info',
  initialState,
  reducers: {
    setUserInfo:(state, action)=>{
        state.email = action.payload.email
    },
    unsetUserInfo:(state, action) =>{
        state.name = action.payload.name
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo, unsetUserInfo } = userSlice.actions

export default userSlice.reducer