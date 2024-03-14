import { createSlice } from '@reduxjs/toolkit'
import type { iDiscountGenerator } from '../../types'

const initialState: iDiscountGenerator = {
  option: null,
  discountCode: null,
  note: null
}

const discountSlice = createSlice({
  name: 'discountCodeSlice',
  initialState,
  reducers: {
    setRadioOption: (state, action) => {
      state.option = action.payload
    },
    setDiscCode: (state, action) => {
      state.discountCode = action.payload
    },
    setNote: (state, action) => {
      state.note = action.payload
    }
  }
})

export const { setRadioOption, setDiscCode, setNote } = discountSlice.actions

export default discountSlice.reducer
