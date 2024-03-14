import React, { type FC } from 'react'
import RadioButton from './RadioButton'

const RadioButtons: FC = () => {
  return <div>
    <RadioButton
      id='optionA'
      name='options'
      value='A'
    />
    <RadioButton
      id='optionB'
      name='options'
      value='B'
    />
    <RadioButton
      id='optionC'
      name='options'
      value='C'
    />
  </div>
}

export default RadioButtons
