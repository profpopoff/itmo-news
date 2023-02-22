import { Data } from '@/interfaces/Data'
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../store'

export interface DataState {
   dataState: Data | null
}

const initialState: DataState = {
   dataState: null,
}

export const dataSlice = createSlice({
   name: "data",
   initialState,
   reducers: {
      setData(state, action) {
         state.dataState = action.payload
      },
   },
   extraReducers: {
      [HYDRATE]: (state, action) => {
         return {
            ...state,
            ...action.payload.language,
         }
      },
   },
})

export const { setData } = dataSlice.actions

export const selectData = (state: AppState) => state.data.dataState

export default dataSlice.reducer