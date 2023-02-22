import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../store'

export interface LanguageState {
   languageState: string
}

const initialState: LanguageState = {
   languageState: "Рус",
}

export const languageSlice = createSlice({
   name: "language",
   initialState,
   reducers: {
      setLanguage(state, action) {
         state.languageState = action.payload
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

export const { setLanguage } = languageSlice.actions

export const selectLanguage = (state: AppState) => state.language.languageState

export default languageSlice.reducer