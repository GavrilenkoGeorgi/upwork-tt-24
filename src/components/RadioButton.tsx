import React, { type FC, type ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setRadioOption } from '../store/slices/discountGeneratorSlice'
import { iRadioButtonProps } from '../types'

const RadioButton: FC<iRadioButtonProps> = ({ id, name, value}) => {

  const dispatch = useDispatch()

  const save = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRadioOption(e.target.value))
  }

  return <>
    <input type='radio' id={id} name={name} value={value}
      onChange={(e) => save(e)}
    />
    <label htmlFor={id}>{value}</label>
  </>
}

export default RadioButton
