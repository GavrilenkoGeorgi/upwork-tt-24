import React, { type FC, type ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setNote } from '../store/slices/discountGeneratorSlice'
import Box from '@mui/material/Box'

const Note: FC = () => {

  const dispatch = useDispatch()

  const save = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(e.target.value))
  }

  return <Box
    component='section'
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
  >
    {/* this one stays default for now: https://github.com/mui/base-ui/issues/167 */}
    <textarea
      rows={5}
      id='note'
      name='note'
      placeholder='Any notes or comments'
      minLength={2}
      maxLength={500}
      onChange={(e) => save(e)}
      style={{ width: '100%' }}
    />
    <label htmlFor='note' hidden>Any notes or comments</label>
  </Box>
}

export default Note
