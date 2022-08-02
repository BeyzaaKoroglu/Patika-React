import React from 'react'

import { ExampleComponent, Button } from 'nonameui'
import 'nonameui/dist/index.css'

const App = () => {
  return (
    <>
      <Button type="primary"></Button>
      <Button></Button>
      <Button type="dashed"></Button>
      <Button type="text"></Button>
      <Button type="link"></Button>
    </>
  )
}

export default App
