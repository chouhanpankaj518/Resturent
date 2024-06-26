import { Button } from '@mui/material'
import React from 'react'
import Banner from "../Images/Banner.jpg"
export default function Home() {
  return (
    <div>
   <div className='hone'  style={{backgroundImage:`url(${Banner})`}}>
     
     <div className='headcontainer'>
      <h1>Food website</h1>
      <p>Best food of India</p>
      <Button color="primary" variant="contained">Order now</Button>
     </div>

   </div>
    </div>
  )
}
