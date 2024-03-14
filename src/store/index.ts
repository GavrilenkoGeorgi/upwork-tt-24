import { configureStore } from '@reduxjs/toolkit'
import discountReducer from './slices/discountGeneratorSlice'

const store = configureStore({
  reducer: {
    discountCode: discountReducer
  },
  devTools: true
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
