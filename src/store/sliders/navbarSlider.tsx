
import { createSlice } from '@reduxjs/toolkit' 


export const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState:{
    value:false
  },
  reducers: {
    change: (state) => { 
      state.value =!state.value
      console.log(state.value)
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { change } = navbarSlice.actions

export default navbarSlice.reducer