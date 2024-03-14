import React, { type FC } from 'react'
import { CodeEntry, RadioButtons, Note, CodeGenerator } from '../components'

const Main: FC = () => {
  return <section>
    <h1>
      Discount Code Generator (Upwork proposal)
    </h1>
    <div>
      <RadioButtons />
      <CodeEntry />
      <CodeGenerator />
      <Note />
    </div>
  </section>
}

export default Main
