import React, { type FC, type ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDiscCode } from '../store/slices/discountGeneratorSlice'

const CodeEntry: FC = () => {

  const dispatch = useDispatch()
  const [codeIsOk, setCodeIsOk] = useState(false)

  const validateCode = (e: ChangeEvent<HTMLInputElement>) => {

    const { value } = e.target
    const codePattern = /\b[a-zA-Z]{7,8}\d{3,4}\b/gm
    const valid = value.match(codePattern)

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
    <input
      type='discountCode'
      id='discountCode'
      name='discountCode'
      placeholder='Enter your discount code'
      required
      minLength={10}
      maxLength={12}
      onChange={(e) => validateCode(e)}
    />
    <label htmlFor='note' hidden>Enter your discount code</label>
    {codeIsOk && <p>Your code is ok.</p>}
  </div>
}

export default CodeEntry
