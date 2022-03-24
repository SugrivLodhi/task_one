import React from 'react'
import { Button } from '@material-ui/core'
const EnergyType = () => {
  return (
    <div>
    <p>Which Kind of Enegry you want</p>
     <Button variant='contained' color='secondary'>electricity</Button>
     <Button variant='contained' color='secondary'>gas</Button>
     <Button variant='contained' color='secondary'>electricity&gas</Button>
    </div>
  )
}

export default EnergyType
