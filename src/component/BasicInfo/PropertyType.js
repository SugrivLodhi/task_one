import React from 'react'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
const PropertyType = () => {
    const histry = useNavigate()
  const clickHandler =()=>{
    histry('/solar');
  }
  const backClick =()=>{
        histry('/')
    }
  return (
      <div>
    <div>
      <h1>What type of Property Do you have</h1>
        <Button variant='contained' color='secondry'>Residential</Button>
        <Button variant='contained' color='secondry'>Bussiness</Button>   
    </div>
    <div>
       <h1>Are you moving</h1>
       <Button variant='contained' color='secondry'>Yes</Button>
       <Button variant='contained' color='secondry'>No</Button>
    </div>
      <div>
    <Button onClick={backClick}>back</Button>
     <Button onClick={clickHandler}>next</Button>
    </div>
</div>
  )
}

export default PropertyType
