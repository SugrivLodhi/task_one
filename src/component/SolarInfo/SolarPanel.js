import React from 'react'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
const SolarPanel = () => {
  const histry = useNavigate()
  const clickHandler =()=>{
    histry('/lifeSupportEquiment');
  }
  const backClick =()=>{
        histry('/property')
    }
    
  return (
    <div>
    <div>
     <h1>Do you have rooftop SolarPanel Install</h1>
      <Button variant='contained' color='secondary'>Yes</Button>
      <Button variant='contained' color='secondary'>No</Button>  
    </div>
    <div style={{marginTop:'10px',justifyContent:'space-around' }}>
    <Button onClick={backClick}>back</Button>
    <Button onClick={clickHandler} >next</Button>
    </div>
    </div>
  )
}

export default SolarPanel