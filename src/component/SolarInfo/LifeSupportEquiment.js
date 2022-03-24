import React from 'react'
import { useHistry } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
const LifeSupportEquiment = () => {
       const histry = useNavigate()
    const backClick =()=>{
        histry('/solar')
    }
    return (
    <div>
    <div>
     <h1>anyone required life support equiment</h1>
     <Button variant='contained' color='secondary'>Yes</Button>
     <Button variant='contained' color='secondary'>No</Button>
     </div>
     <div>
     <Button onClick={backClick}>back</Button>
     <Button>next</Button>
     </div>
    </div>
  )
}

export default LifeSupportEquiment
