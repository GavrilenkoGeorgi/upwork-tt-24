import React, { type FC } from 'react'
import { CodeEntry, RadioButtons, Note, CodeGenerator } from '../components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const Main: FC = () => {
  return <Box
      component='section'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
    <Typography variant='h5' component='h1' align='center' sx={{ p: 4, pb: 0 }}>
      Discount Code Generator (Upwork proposal)
    </Typography>
    <Stack spacing={2}>
      <RadioButtons />
      <CodeEntry />
      <CodeGenerator />
      <Note />
    </Stack>
  </Box>
}

export default Main
