import React, { type FC, type ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDiscCode } from '../store/slices/discountGeneratorSlice'
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography'

const CodeEntry: FC = () => {

  const dispatch = useDispatch()
  const [codeIsOk, setCodeIsOk] = useState(false)
  const [touched, setTouched] = useState(false)

  const validateCode = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { value } = e.target
    const codePattern = /\b[a-zA-Z]{7,8}\d{3,4}\b/gm
    const valid = value.match(codePattern)

    setTouched(true)
    // is upper case a requirement?
    if (valid) {
      setCodeIsOk(true)
      dispatch(setDiscCode(value))
    } else {
      setCodeIsOk(false)
      dispatch(setDiscCode(''))
    }
  }

  return <div>
    <Typography
      variant='body2'
      textAlign='center'
      sx={{ pb: 2 }}
      color='green'
    >
      {codeIsOk ? 'Your code is ok.' : ''}
    </Typography>
    <TextField
      id='outlined-controlled'
      label='Check your discount code'
      error={touched && !codeIsOk}
      onChange={(e) => validateCode(e)}
    />
  </div>
}

export default CodeEntry
