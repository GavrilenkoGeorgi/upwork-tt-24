import React, { type FC, useState } from 'react'
import { generateCode } from '../utils'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'

const CodeGenerator: FC = () => {

  const [code, setCode] = useState('')

  const newCode = () => {
    setCode(generateCode())
  }

  return <div>
    <Button
      variant='outlined'
      fullWidth
      onClick={() => newCode()}
    >
      Generate New Code
    </Button>
    <Typography
      variant='body2'
      textAlign='center'
      sx={{ p: 2 }}
    >
        {code}
    </Typography>
  </div>
}

export default CodeGenerator
