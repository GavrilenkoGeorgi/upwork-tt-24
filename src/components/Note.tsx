import React, { type FC, type ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setNote } from '../store/slices/discountGeneratorSlice'

const Note: FC = () => {

  const dispatch = useDispatch()

  const save = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(e.target.value))
  }

  return <div>
    <textarea
      rows={5}
      id='note'
      name='note'
      placeholder='Any notes or comments'
      minLength={2}
      maxLength={500}
      onChange={(e) => save(e)}
    />
    <label htmlFor='note' hidden>Any notes or comments</label>
  </div>
}

export default Note
