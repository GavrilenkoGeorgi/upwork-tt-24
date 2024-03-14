import React, { type FC, type ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setRadioOption } from '../store/slices/discountGeneratorSlice'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import Box from '@mui/material/Box'

const RadioButtons: FC = () => {

  const dispatch = useDispatch()

  const save = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRadioOption(e.target.value))
  }

  return <FormControl sx={{ pt: 5 }}>
    <Box display='flex' justifyContent='center'>
      <FormLabel id='radio-buttons-group'>Options</FormLabel>
    </Box>
    <RadioGroup
      aria-labelledby='radio-buttons-group'
      name='options'
      onChange={(e) => save(e)}
    >
      <Box
        component='section'
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
      >
        <FormControlLabel value='A' control={<Radio />} label='A' />
        <FormControlLabel value='B' control={<Radio />} label='B' />
        <FormControlLabel value='C' control={<Radio />} label='C' />
      </Box>
    </RadioGroup>
  </FormControl>
}

export default RadioButtons
