
import { createSlice } from '@reduxjs/toolkit' 


export const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState:{
    screenWidth:0
  },
  reducers: {
    setScreenWidth: (state,action) => { 
      state.screenWidth=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setScreenWidth } = navbarSlice.actions

export default navbarSlice.reducer