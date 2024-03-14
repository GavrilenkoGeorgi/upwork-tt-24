import React, { type FC, useState } from 'react'
import { generateCode } from '../utils'

const CodeGenerator: FC = () => {

  const [code, setCode] = useState('')

  const newCode = () => {
    setCode(generateCode())
  }

  return <div>
    <div>
      <button onClick={() => newCode()}>
        Generate Code
      </button>
    </div>
    {code && <p>{code}</p>}
  </div>
}

export default CodeGenerator
