import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { dataSlice } from "./slices/data"
import { languageSlice } from "./slices/language"

const makeStore = () =>
   configureStore({
      reducer: {
         [languageSlice.name]: languageSlice.reducer,
         [dataSlice.name]: dataSlice.reducer,
      },
      devTools: true,
   })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   AppState,
   unknown,
   Action
>

export const wrapper = createWrapper<AppStore>(makeStore)